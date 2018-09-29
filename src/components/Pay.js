import React, { Component } from "react";
import { formatNumbers } from "../utils";
import providers from "../data/providers";
import Provider from "./Provider";

class Pay extends Component {
  constructor(props) {
    super(props);

    this.state = formatNumbers(this.props.match.params.amount);
    this.props.history.push(`/${this.state.amount}`);

    this.validProviders = providers.filter(
      ({ min, max }) =>
        (min === 0 || this.state.amount >= min) &&
        (max === 0 || this.state.amount <= max)
    );
  }

  render() {
    const { displayAmount, amount } = this.state;
    return (
      <div>
        <h1>{displayAmount}</h1>
        {this.validProviders.map(provider => (
          <Provider key={provider.id} provider={provider} amount={amount} />
        ))}
      </div>
    );
  }
}

export default Pay;
