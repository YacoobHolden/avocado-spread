import React, { Component } from 'react';
import styles from './styles.css';

class Panel extends Component {
  render() {
    return (
      <div className={styles.panel}>
        I'm a panel
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
