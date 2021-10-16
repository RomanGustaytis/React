import React from 'react';

class TogglerClass extends React.Component {
  state = { isToggled: false };

  render() {
    return (
      <>
        {this.state.isToggled ? 'The Toggler enable!' : 'The Toggler disable!'}
        <button onClick={() => this.setState({ isToggled: !this.state.isToggled })}>
          Class Component Toggle
        </button>
      </>
    );
  }
}

export default TogglerClass;