import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './App.css';
import Launches from './Launches/Launches';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <section className="hero is-info is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Hello to React, Apollo and GraphQL Client
                </h1>
                <h2 className="subtitle">
                  Github
                </h2>
              </div>
            </div>
          </section>
          <section className="hero is-medium is-bold">
            <div className="hero-body">
              <div className="container">
                  <Launches />
              </div>
            </div>
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
