import React, { useState } from 'react';
import axios from 'axios';
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
import ConflictCard from './Card.jsx';


export default function App() {
  const [product1, setProduct1] = useState('');
  const [product2, setProduct2] = useState('');
  const [actives1, setActives1] = useState(null);
  const [actives2, setActives2] = useState(null);

  const [submitClicked, setSubmitClicked] = useState(false);

  const classes = useStyles();

  const handleChange1 = (event) => {
    const product = event.target.value;
    setProduct1(product);
  };

  const handleChange2 = (event) => {
    const product = event.target.value;
    setProduct2(product);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const product1params = (product1.split(' ').join('+'));
    const product2params = (product2.split(' ').join('+'));

    axios.get('/ingredients', { params: `${product1params}` })
    .then((response) => {
    setActives1(response.data);
    })
    .catch((error) => {
    console.log(error);
    })

    axios.get('/ingredients/2', { params: `${product2params}` })
    .then((response) => {
      setActives2(response.data);
    })
    .catch((error) => {
    console.log(error);
    })

    setSubmitClicked(true);
  };

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

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Skincare Interaction Checker
          </Typography>
          <Typography component="h3" variant="h5">
            Enter two products to check for potential ingredient interactions
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="product1"
              label="Product 1"
              name="product-1"
              type="text"
              onChange={handleChange1}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="product-2"
              label="Product 2"
              type="text"
              id="product2"
              onChange={handleChange2}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              fontSize="48"
              endIcon={<CheckCircleOutlineIcon />}
              className={classes.submit}
              onClick={handleSubmit}
            >
              Check for Interactions
            </Button>
          </form>
        </div>
        {submitClicked && <ConflictCard actives1={actives1} actives2={actives2} conflict={conflict}checkForConflicts={checkForConflicts}/>}
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
