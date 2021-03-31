
import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conflict: false
    };
  }

  render() {
    return (
    <div className="form-container">
      <form id="input-1">
        <input type="text">
        </input>
      </form>
      <form id="input-2">
        <input type="text">
        </input>
      </form>
      <Button
        variant="contained"
        size="large"
        style={{fontSize: 24}}
        endIcon={<CheckCircleOutlineIcon />}>
      Check Interaction
      </Button>
      </div>
    )
  }
}

export default Form;