import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/login';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  render() {
    debugger;
    return <div className="container">HAIIIS</div>;
  }
}

export default Dashboard;
