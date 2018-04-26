import React, { Component } from 'react';
import styles from './styles.css';

class Notification extends Component {

  render() {
    if (!this.props.notification) {
      return null;
    }
    return (
      <div className={styles.card}>
        I'm a Notification. {this.props.notification.title}
      </div>
    );
  }
}

export default Notification;
