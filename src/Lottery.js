import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
  static defaultProps = {
    numBalls : 6,
    maxNum: 40
  }

  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5, 6],
    };
    this.generate = this.generate.bind(this);
  }

  generate() {
    const newArray = this.state.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1);
    this.setState({nums : newArray});
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.nums.map(n => <Ball num={n} />)}
        <button onClick={this.generate}>Generate</button>
      </div>
    );
  }
}

export default Lottery;