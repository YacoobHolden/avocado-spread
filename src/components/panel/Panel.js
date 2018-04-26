import React, { Component } from 'react';

class Panel extends Component {
  render() {
    return (
      <div>
        I'm a panel
        {this.props.children}
      </div>
    );
  }
}

export default Panel;
