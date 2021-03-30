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
        <h1 id="header">Skincare Interaction Checker TEST CHANGE</h1>
        <div id="subtitle">
          Enter two or more products to check for interactions
        </div>
        <div className="form-container">
          <form id="input-1">
            <input type="text">
            </input>
          </form>
          <form id="input-2">
            <input type="text">
            </input>
          </form>
          <button id="submit" type="submit">Check Interaction</button>
        </div>
      </div>
    )
  }
}

export default App;
