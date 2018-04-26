import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import { Provider } from 'mobx-react';
import Store from './stores/store';

class App extends Component {
  render() {
    const store = new Store();
    store.openNotificationSocket();
    return (
      <Provider store={store} >
        <Main />
      </Provider>
    );
  }
}

export default App;
