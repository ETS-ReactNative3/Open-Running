import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    
    super(props);
    
    this.state = {
      success: false
    }
  }


  testExpress = () => {
    fetch("/anything")
    .then(response => response.json())
    .then(myJson => {
        this.setState({ success: myJson.success });
    })
    .catch(err => console.log(err))
  }

  render() {
    const original = (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={(event) => {this.testExpress()}}>Test</button>
      </div>
    );

    const changed = (
      <div className="App">
        <h1>Success!!!!!!!!!!!!</h1>
      </div>
    );

    if (this.state.success) {
      return changed;
    } else {
      return original;
    }

  }
}

export default App;
