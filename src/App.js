import React, { Component } from 'react';
  import './App.css';
  import GetJSON from './GetJSON';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <GetJSON/>
        </div>
      );
    }
  }
  
  export default App;
