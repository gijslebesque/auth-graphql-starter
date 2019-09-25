import React from 'react';
import Header from './Header';
const Layout = props => {
  return (
    <div>
      <Header data={props.data} />
      {props.children}
    </div>
  );
};

export default Layout;
