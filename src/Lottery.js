import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    numBalls : 6,
    maxNum: 40
  }

  constructor(props) {
    super(props);
    this.state = {nums: Array.from({length: this.props.numBalls})};
    this.generate = this.generate.bind(this);
  }

  // generate() {
  //   const newArray = this.state.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1);
  //   this.setState({nums : newArray});
  // }
  // generate() {
  //   this.setState(curState => {
  //     return { nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1) }
  //   });
  // }
  generate() {
    this.setState(curState => ({ 
      nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }));
  }
  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => <Ball num={n} />)}  
        </div>
        <button onClick={this.generate}>Generate</button>
      </div>
    );
  }
}

export default Lottery;