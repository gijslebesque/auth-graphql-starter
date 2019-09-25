import React from 'react';
import { Link } from 'react-router-dom';

import { graphql } from 'react-apollo';

import query from '../queries/CurrentUser.js';
import mutation from '../mutations/logout';

const Header = props => {
  const onLogout = () => {
    props.mutate({
      refetchQueries: [{ query }]
    });
  };
  const renderButtons = () => {
    const { loading, user } = props.data;
    if (loading) return null;
    if (user)
      return (
        <div>
          <li>
            <a onClick={onLogout}>Logout</a>
          </li>
        </div>
      );
    else {
      return (
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo left" to="/">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default graphql(mutation)(graphql(query)(Header));
