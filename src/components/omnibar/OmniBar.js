import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styles from './styles.css';
import { Button } from 'react-toolbox';

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
            <Button>
              Clear All
            </Button>
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
