import React, { Component } from 'react';
import Panel from './components/panel/Panel';
import Notification from './components/notification/Notification';
import './App.css';

import { getNotifications } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    }
  }

  componentDidMount() {
    getNotifications().then(resp => {
      console.log(resp);
      this.setState({
        notifications: resp.notifications,
      })
    })
  }

  render() {
    return (
      <Panel>
        <Notification />
        <Notification />        
      </Panel>
    );
  }
}

export default App;
