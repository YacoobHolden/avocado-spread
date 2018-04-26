import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from 'material-ui/Button';
import styles from './styles.css';

@inject('store')
@observer
class OmniBar extends Component {
  render() {
    return (
      <div className={styles.omnibar}>
        <div className={styles.left}>
          <div className={styles.item}>
            <i className="material-icons">sort</i>
          </div>
          <div className={styles.item}>
            <button>
              Clear All
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <i class="material-icons">keyboard_arrow_up</i>
          </div>
          <div className={styles.item}>
            <i class="material-icons">keyboard_arrow_up</i>
          </div>
        </div>
      </div>
    );
  }
}

export default OmniBar;
