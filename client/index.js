import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div>
          <Route path="/" component={Layout}></Route>
          <Route path="/login" component={Login}></Route>
        </div>
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
