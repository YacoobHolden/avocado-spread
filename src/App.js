import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';
import { Provider } from 'mobx-react';
import ProdStore from './stores/store';
import MockStore from './stores/store.mock';

const env = window.location.hostname === 'localhost' ? 'local' : 'depot';
console.log(env);
const Store = env === 'local' ? MockStore : ProdStore;

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
