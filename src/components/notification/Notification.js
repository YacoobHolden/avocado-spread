import React, { Component } from 'react';
import styles from './styles.css';
import Time from './Time.js';

const getClassForPriority = notification => {
  switch (notification.severity) {
    case 1:
      return styles.lowSeverity;
    case 2:
      return styles.mediumSeverity;
    case 3: 
      return styles.highSeverity;
    default:
      return styles.lowSeverity;
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
          <div className={styles.cardContent}>      
            <div className={styles.contentSection}>
              <div className={styles.notificationTitle}>
                {notification.title}                
              </div>
              <Time notification={notification}/>
            </div>
            <div className={styles.contentSection}>  
                {notification.subtitle && (
                  <div className={styles.subtitle}>
                    {notification.subtitle}
                  </div>
                )}
                <div className={styles.textContent}>
                  {notification.content}
                </div>
            </div>
          </div>
        
      </div>

    );
  }
}

export default Notification;
