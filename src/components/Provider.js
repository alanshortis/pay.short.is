import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProviderButton = styled.a`
  &:not(:last-child) {
    margin-right: 1em;
  }
`;

const Provider = ({ amount, provider }) => {
  return (
    <ProviderButton href={provider.url + amount}>
      {provider.name}
    </ProviderButton>
  );
};

Provider.propTypes = {
  amount: PropTypes.string.isRequired,
  provider: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default Provider;
