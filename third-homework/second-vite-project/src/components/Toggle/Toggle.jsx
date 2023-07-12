import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
  }

  toggleState = () => {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleState}>
          {this.state.isToggled ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}