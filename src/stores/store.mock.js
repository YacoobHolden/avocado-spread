import { observable, action } from 'mobx';
import { subscribeToNotifications } from '../services/api';

class Store {
  @observable notifications = [
    {
      "id": 2,
      "title": "Traffic Alert",
      "content": "CRASH occurred on SH1 (thanks, Gwyneth)",
      "type": "TRAFFIC",
      "timestamp": "2018-04-26T03:59:21+00:00",
      "properties": {
        "lat": -36.8322175,
        "long": 174.745171
      }
    },
    {
      "id": 1,
      "title": "Overspeed",
      "content": "Jane is going too fast!",
      "type": "OVERSPEED",
      "timestamp": "2018-04-26T03:43:21+00:00",
      "properties": {
        "driverGid": "3fac4c38-367d-484b-9cdc-6496a2bc0742"
      }
    }
  ];

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
    // this.notifications = this.notifications.concat(notifications);
  }
}

export default Store;