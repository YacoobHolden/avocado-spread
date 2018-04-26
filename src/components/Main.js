import React, { Component } from 'react';
import Panel from './panel/Panel';
import Notification from './notification/Notification';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Main extends Component {
  render() {
    if (this.props.store && this.props.store.notifications) {
      console.log(toJS(this.props.store.notifications));
    }
    return (
        <Panel>
          <Notification />
          <Notification />
        </Panel>
    );
  }
}

export default Main;
