import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css'
import Logs from './Component/Logs'
import { } from 'lodash'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <br />
        <br />
        <br />
        <Logs />
      </header>
    </div>
  );
}

export default App;
