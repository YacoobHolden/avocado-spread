import React, { Component } from 'react';
import Panel from './components/panel/Panel';
import Notification from './components/notification/Notification';

import './App.css';

class App extends Component {
  render() {
    return (
      <Panel>
        <Notification/>
        <Notification/>        
      </Panel>

    );
  }
}

export default App;
