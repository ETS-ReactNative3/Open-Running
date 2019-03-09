import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from  './components/Login'
import { DefaultButton } from 'office-ui-fabric-react';

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
    return <Login />;
  }
  // render() {
  //   const original = (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <button onClick={(event) => {this.testExpress()}}>Test</button>
  //       <DefaultButton primary={ false } href='https://google.com'>I am a ui fabric button</DefaultButton>
  //     </div>
  //   );

  //   const changed = (
  //     <div className="App">
  //       <h1>Success!!!!!!!!!!!!</h1>
  //     </div>
  //   );

  //   if (this.state.success) {
  //     return changed;
  //   } else {
  //     return original;
  //   }

  // }
}

export default App;
