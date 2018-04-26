import { observable, action } from 'mobx';
import { getNotifications, subscribeToNotifications } from '../services/api';

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

  openNotificationSocket() {
    subscribeToNotifications((err, data) => this.appendNotification(data))
  }

  @action
  appendNotification(notification) {
    console.log(notification);
    this.notifications.push(notification);
  }

}

export default Store;