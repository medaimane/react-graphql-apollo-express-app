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
                  Created by medaimane  2018
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
          <footer className="footer">
            <div className="content has-text-centered">
              <p>
                <strong>ReactGraphQL-Bulma</strong> by <a href="https://medaimane.github.io" target="_blank" rel="noopener noreferrer">medaimane</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php" target="_blank" rel="noopener noreferrer"> MIT</a>. View the repo on <a className="button is-small" href="https://github.com/medaimane/react-graphql-apollo-express-app/" target="_blank" rel="noopener noreferrer">
                  <span className="icon is-small">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </p>
            </div>
          </footer>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
