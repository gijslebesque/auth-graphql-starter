import React, { Component } from 'react';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';

export default WrappedComponent => {
  class requireAuth extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      if (!this.props.data.user && !this.props.data.loading) {
        this.props.history('/login');
      }
    }

    componentWillUpdate(nextProps) {
      debugger;
      if (!nextProps.data.user && !nextProps.data.loading) {
        debugger;
        this.props.history.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(query)(requireAuth);
};
