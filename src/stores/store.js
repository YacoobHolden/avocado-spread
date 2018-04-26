import { observable, action } from 'mobx';
import { getNotifications } from '../services/api';

class Store {
  @observable notifications = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action
  fetchNotifications() {
    return getNotifications().then(data => {
      this.notifications = data.notifications;
    });
  }
}

export default Store;