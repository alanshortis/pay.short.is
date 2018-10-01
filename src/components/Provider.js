import React from "react";
import PropTypes from "prop-types";

const Provider = ({ amount, provider }) => {
  return <a href={provider.url + amount}>{provider.name}</a>;
};

Provider.propTypes = {
  amount: PropTypes.string.isRequired,
  provider: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default Provider;
