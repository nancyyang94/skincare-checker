/* eslint-disable no-use-before-define */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles({
  root: {
    padding: '75px',
    margin: '-75px',
  },
});

export default function ProductDropdown({ products, id, handleChange }) {

  const classes = useStyles();

  return (
    <Autocomplete className={classes.root}
      // value={value}
      onChange={handleChange}
      id={id}
      options={products}
      getOptionLabel={(option) => `${option.brand} ${option.name}`}
      style={{ width: 550 }}
      renderInput={(params) => <TextField
        {...params}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="product1"
        label="Product"
        name="product1"
        type="text"
        autoFocus
        />}
    />
  );
}