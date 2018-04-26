import React, { Component } from 'react';
import Panel from './panel/Panel';
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
        <Panel>
          <OmniBar />
          {
            store.displayNotifications && notifications.map((notification => 
              <Notification notification={notification} key={notification.id} />
            ))
          }
        </Panel>
    );
  }
}

export default Main;
