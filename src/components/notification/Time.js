import React, { Component } from 'react';
import styles from './styles.css';
import { parse, distanceInWords } from 'date-fns';

class Time extends Component {

    constructor(props) {
        super(props);
        this.state = {
            now: Date.now()
        }
        setTimeout(() => this.setState({
            now: Date.now()
        }), 1000);
    }
    render() {
    const notification = this.props.notification;        
        return (
            <div className={styles.notificationTime}>
                {`${distanceInWords(parse(notification.timestamp), this.state.now)}`}
              </div>
        );
    }
}

export default Time;