import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    response: ''
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;