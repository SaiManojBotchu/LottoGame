import React, { Component } from 'react';

class Ball extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.num}</h1>
      </div>
    )
  }
}

export default Ball;