import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styles from './styles.css';
import { Button } from 'react-toolbox';
import { IconButton } from 'react-toolbox/lib/button';
import { SORT_BY } from '../../stores/store';
@inject('store')
@observer
class OmniBar extends Component {

  handleClearAll = () => {
    this.props.store.clearAll();
  }

  handleToggleDisplayNotifications = () => {
    this.props.store.toggleDisplayNotifications();
  }

  handleSort = () => {
    const store = this.props.store;
    let sortBy = SORT_BY.SEVERITY;
    if (store.sortBy === SORT_BY.SEVERITY) {
      sortBy = SORT_BY.TIME;
    }
    store.setSortBy(sortBy);
  }

  render() {
    const displayNotifications = this.props.store.displayNotifications;
    return (
      <div className={styles.omnibar}>
        <div className={styles.left}>
          <IconButton
            icon={'sort'}
            onClick={this.handleSort}
          />
          <IconButton 
            icon={displayNotifications ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            onClick={this.handleToggleDisplayNotifications}
          />

          <Button onClick={this.handleClearAll}>
            Clear All
          </Button>
        </div>
        <div className={styles.right}>
          <IconButton
            icon={displayNotifications ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            onClick={this.handleToggleDisplayNotifications}
          />
          {/* <IconButton icon={(
            <i className="material-icons">keyboard_arrow_up</i>
          )} /> */}
            
        </div>
      </div>
    );
  }
}

export default OmniBar;
