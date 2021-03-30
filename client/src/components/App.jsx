import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Skincare Interaction Checker</h1>
        <div className="subtitle">
          Enter two or more products to check for interactions
        </div>
        <div className="form-container">
          <form className="input-1">
            <input type="text">
            </input>
          </form>
          <form className="input-2">
            <input type="text">
            </input>
          </form>
          <button type="submit">Check Interaction</button>
        </div>
      </div>
    )
  }
}

export default App;
