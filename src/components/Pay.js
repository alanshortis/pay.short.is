import React, { Component } from "react";

class Pay extends Component {
  state = {
    amount: this.props.match.params.amount || 0
  };

  render() {
    const { amount } = this.state;
    return <div>{amount}</div>;
  }
}

export default Pay;
