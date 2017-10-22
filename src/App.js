import React, { Component } from 'react';
import Calculator from './component/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Calculator</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
