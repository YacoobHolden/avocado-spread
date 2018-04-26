import { observable, action, toJS } from 'mobx';
import { subscribeToNotifications } from '../services/api';
import { compareDesc, parse } from 'date-fns';

export const SORT_BY = {
  SEVERITY: 'severity',
  TIME: 'time',
}
class Store {
  @observable notifications = [];
  @observable displayNotifications = true;
  @observable sortBy = SORT_BY.TIME;

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
  
  @action
  clearAll() {
    this.notifications = [];
  }

  @action
  toggleDisplayNotifications() {
    this.displayNotifications = !this.displayNotifications;
  }

  @action
  setSortBy(sort) {
    this.sortBy = sort;
    this.sort();
  }

  @action
  sort() {
    const sortFunc = (a, b) => {
      switch(this.sortBy) {
        case SORT_BY.SEVERITY:
          return a.severity - b.severity;
        default:
          return compareDesc(parse(a.timestamp), parse(b.timestamp))
      }
    }
    this.notifications = this.notifications.sort(sortFunc);
  }
}

export default Store;
