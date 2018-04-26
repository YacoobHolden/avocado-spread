import React, { Component } from 'react';

class Notification extends Component {

  render() {
    if (!this.props.notification) {
      return null;
    }
    return (
      <div>
        I'm a Notification. {this.props.notification.title}
      </div>
    );
  }
}

export default Notification;
