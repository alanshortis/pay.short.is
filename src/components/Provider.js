import React from "react";

const Provider = ({ amount, provider }) => {
  return <a href={provider.url + amount}>{provider.name}</a>;
};

export default Provider;
