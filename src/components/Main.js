import React, { Component } from 'react';
import styles from './common.css';
import Panel from './panel/Panel';
import MapPanel from './map/MapPanel';
import Notification from './notification/Notification';
import OmniBar from './omnibar/OmniBar';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Main extends Component {
  render() {
    let notifications = [];
    if (this.props.store && this.props.store.notifications) {
      notifications = toJS(this.props.store.notifications);
    }
    const store = this.props.store;
    return (
        <div className={styles.main}>
          <MapPanel />
          <Panel>
            <OmniBar />
            {
              store.displayNotifications && notifications.map((notification =>
                <Notification notification={notification} key={notification.id} />
              ))
            }
          </Panel>
        </div>
    );
  }
}

export default Main;
