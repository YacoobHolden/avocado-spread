import { observable, action } from 'mobx';
import { subscribeToNotifications } from '../services/api';

class Store {
  @observable notifications = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  openNotificationSocket() {
    subscribeToNotifications(
      e => this.appendNotifications(JSON.parse(e.data))
    )
  }

  @action
  appendNotifications(notifications) {
    this.notifications = this.notifications.concat(notifications);
  }

}

export default Store;