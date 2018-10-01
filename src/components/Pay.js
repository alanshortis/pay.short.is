import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { formatNumbers, validProvider } from "../utils";
import providers from "../data/providers";
import Provider from "./Provider";

const Message = styled.h1`
  font-size: 2rem;
`;

const Divider = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  margin: 1em 0;
  &::before,
  &::after {
    content: "\\2014";
    margin: 0 1em;
  }
`;

class Pay extends Component {
  constructor(props) {
    super(props);

    this.state = formatNumbers(this.props.match.params.amount);
    this.props.history.replace(`/${this.state.amount}`);

    this.validProviders = providers.filter(({ min, max }) =>
      validProvider(min, max, this.state.amount)
    );
  }

  render() {
    const { displayAmount, amount } = this.state;
    const message = `Pay Alan ${displayAmount}`;
    return (
      <Fragment>
        <Helmet title={message} />
        <Message>{message}</Message>
        <Divider>via</Divider>
        <div>
          {this.validProviders.map(provider => (
            <Provider key={provider.id} provider={provider} amount={amount} />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Pay;
