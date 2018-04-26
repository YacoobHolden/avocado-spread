import { observable, action, toJS } from 'mobx';
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
    if (this.notifications.length) {
      this.notifications = notifications.concat(toJS(this.notifications));
    } else {
      this.notifications = notifications;
    }
  }
}

export default Store;
