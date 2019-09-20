import React from 'react';
import Header from './Header';
import { graphql } from 'react-apollo';

import query from '../queries/CurrentUser.js';
const Layout = props => {
  console.log(props);
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default graphql(query)(Layout);
