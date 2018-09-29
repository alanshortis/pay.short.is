import React, { Component } from "react";
import { formatNumbers } from "../utils";

class Pay extends Component {
  constructor(props) {
    super(props);

    this.state = formatNumbers(this.props.match.params.amount);
    this.props.history.push(`/${this.state.amount}`);
  }

  render() {
    const { displayAmount } = this.state;
    return <div>{displayAmount}</div>;
  }
}

export default Pay;
