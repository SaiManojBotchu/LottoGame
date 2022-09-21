import React, { Component } from 'react';
import Lottery from './Lottery';

class Lotto extends Component {
  render() {
    return (
      <div>
        <Lottery title="Lotto" />
        <Lottery title="Mini Daily" numBalls={4} maxNum={10} />
      </div>
    )
  }
}

export default Lotto;