/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ProductDropdown({ products, id, handleChange }) {
  return (
    <Autocomplete
      id={id}
      options={products}
      getOptionLabel={(option) => `${option.brand} ${option.name}`}
      style={{ width: 550 }}
      renderInput={(params) => <TextField
        {...params}
        // label="Product"
        // variant="outlined"
        // onChange={handleChange}
        // variant="outlined"
              margin="normal"
              required
              fullWidth
              id="product1"
              label="Product 1"
              name="product-1"
              type="text"
              onChange={handleChange}
              autoFocus
        />}
    />
  );
}