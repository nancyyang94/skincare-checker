import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from  'clsx';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from '../styling/useStyles.jsx';
import interactions from './interactions.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ProductDropdown from './ProductList.jsx';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

export default function App() {
  const [product1, setProduct1] = useState('');
  const [product2, setProduct2] = useState('');
  const [actives1, setActives1] = useState(null);
  const [actives2, setActives2] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios.get('/products')
    .then((response) => {
    setData(response.data);
    setProducts(response.data.slice());
    })
    .catch((error) => {
    console.log(error);
    })
  };

  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();

  const handleChange1 = (event, newValue) => {
    let productName = `${newValue.brand} ${newValue.name}`;
        setProduct1(productName);
  };

  const handleChange2 = (event, newValue) => {
    let productName = `${newValue.brand} ${newValue.name}`;
    setProduct2(productName);
  };

  const reset = () => {
    window.location.reload();
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const product1params = (product1.split(' ').join('+'));
    const encoded = encodeURI(product1params);
    const product2params = (product2.split(' ').join('+'));
    const encoded2 = encodeURI(product2params);

    axios.get('/ingredients', { params: `${encoded}` })
    .then((response) => {
    setActives1(response.data);
    })
    .catch((error) => {
    console.log(error);
    })

    axios.get('/ingredients/2', { params: `${encoded2}` })
    .then((response) => {
      setActives2(response.data);
    })
    .catch((error) => {
    console.log(error);
    })
    setSubmitClicked(true);
    setOpen(true);
  };

  const handleSubmit2 = (event) => {
    const product2params = (product2.split(' ').join('+'));
    axios.get('/ingredients/2', { params: `${product2params}` })
    .then((response) => {
      setActives2(response.data);
    })
    .catch((error) => {
    console.log(error);
    })
    setSubmitClicked(true);
  }

  const conflict = (arr1, arr2) => {
    for (var i = 0; i < arr1.length; i++) {
      let active1 = arr1[i];
      const interactions1 = Object.keys(interactions[active1]);
      for (var j = 0; j < arr2.length; j++) {
        let active2 = arr2[j];
        if (interactions1.includes(active2)) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  const checkForConflicts = (arr1, arr2) => {
    for (var i = 0; i < arr1.length; i++) {
      let active1 = arr1[i];
      const interactions1 = Object.keys(interactions[active1]);
      for (var j = 0; j < arr2.length; j++) {
        let active2 = arr2[j];
        if (interactions1.includes(active2)) {
          return `${active1} and ${active2} used together ${interactions[active1][active2]}`;
        }
      }
    }
  }

  const handleClose = () => {
    setOpen(false);
    setActives1(null);
    setActives2(null);
  };


  const productsChosen = product1 && product2;
  const currentStyle = productsChosen ? { backgroundColor: '#4498ff' } : {};

  return (
    <div>
      <Dialog className={(actives1 && actives2)
      && conflict(actives1, actives2)
      ? classes.modal : clsx(classes.modal, classes.modalShort) }
        open={open}
        onClose={handleClose}
        PaperProps ={{
          classes: {
           root: classes.dialog,
          }
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <DialogTitle>
            <Typography className={classes.modalTitle} >
              {(actives1 && actives2)
                && conflict(actives1, actives2)
                ? 'Interaction Found' : null
              }
            </Typography>
            <Typography className={classes.modalTitle}>
              {(actives1 && actives2) && !conflict(actives1, actives2)
              ? 'No interactions found' : null}
            </Typography>
          </DialogTitle>
          <DialogContent className={(actives1 && actives2) && conflict(actives1, actives2) ? classes.dialogContent : classes.hideDialog} dividers>
          <Typography
          className={(actives1 && actives2) && conflict(actives1, actives2) ? classes.dialogContent : classes.hideDialog} gutterBottom>
            {
              actives1 &&
              actives1.length > 0 ? `Active Ingredients: ${actives1}, ${actives2}` : null
            }
            <br />
          {
              (actives1 && actives2) && conflict(actives1, actives2) ? `${checkForConflicts(actives1, actives2)}` : null
              }
          </Typography>
        </DialogContent>
        <div className={classes.buttons}>
        <DialogActions>
          {open ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
          <Button
            variant="outlined"
            size="medium">
            <a href="https://www.healthline.com/health/beauty-skin-care/ingredients-that-work-well-together" target="_blank"
            rel="noopener noreferrer">
              Source
            </a>
          </Button>
          <Button
            variant="outlined"
            size="medium"
            onClick={reset}>
            Reset Products
          </Button>
        </DialogActions>
        </div>
        </div>
      </Dialog>
      <Grid container component="main" className={open ? classes.rootBlur : classes.root} >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography className={classes.title1}component="h1" variant="h5">
              Skincare Interaction Checker
            </Typography>
            <Typography className={classes.title2} component="h3" variant="h5">
              Enter two products to check for potential ingredient interactions
            </Typography>
              <ProductDropdown id="product-1-dropdown" products={products} handleChange={handleChange1}/>
              <br />
              <ProductDropdown id="product-2-dropdown" products={products} handleChange={handleChange2}/>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                fontSize="48"
                endIcon={<CheckCircleOutlineIcon />}
                className={classes.submit}
                onClick={handleSubmit}
                disabled={!productsChosen}
                style={currentStyle}
              >
                Check for Interactions
              </Button>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    </div>
  );
}
