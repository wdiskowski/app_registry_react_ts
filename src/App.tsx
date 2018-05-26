import * as React from 'react';
import './App.css';
import './resources/css/index.css';
import './resources/css/w3.css';
import ReleaseInfoTabView from './modules/release-info/ReleaseInfoTabView';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ReleaseInfoTabView appId={'abc'} targetId="" url="px092vm" />
      </div>
    );
  }
}

export default App;
