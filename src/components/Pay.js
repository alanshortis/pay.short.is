import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { formatNumbers, validProvider } from "../utils";
import providers from "../data/providers";
import Provider from "./Provider";

class Pay extends Component {
  constructor(props) {
    super(props);

    this.state = formatNumbers(this.props.match.params.amount);
    this.props.history.push(`/${this.state.amount}`);

    this.validProviders = providers.filter(({ min, max }) =>
      validProvider(min, max, this.state.amount)
    );
  }

  render() {
    const { displayAmount, amount } = this.state;
    const message = `Pay Alan ${displayAmount}`;
    return (
      <div>
        <Helmet title={message} />
        <h1>{message}</h1>
        {this.validProviders.map(provider => (
          <Provider key={provider.id} provider={provider} amount={amount} />
        ))}
      </div>
    );
  }
}

export default Pay;
