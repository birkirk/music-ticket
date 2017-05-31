import React, { Component } from 'react';
import './styles.css'

class Share extends Component {
  onClick() {
    return;
  }

  getShared() {
      return this.props.shared.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
        <div className="Share">
            <button onClick={() => this.onClick()}>Share</button>
            <span className="Share-count" >{this.getShared()}</span>
        </div>
    )
  }
}

export default Share;