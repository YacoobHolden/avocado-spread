import React, { Component } from 'react';
import styles from './styles.css';

const getClassForPriority = notification => {
  switch (notification.severity) {
    case 1:
      return styles.lowSeverity;
    case 2:
      return styles.mediumSeverity;
    case 3: 
      return styles.highSeverity;
  }
}

class Notification extends Component {

  render() {
    if (!this.props.notification) {
      return null;
    }
    const notification = this.props.notification;
    return (
      <div className={styles.card}>
        <div className={`${styles.severity} ${getClassForPriority(notification)}`}>
        </div>      
        I'm a Notification. {notification.title}
      </div>
    );
  }
}

export default Notification;
