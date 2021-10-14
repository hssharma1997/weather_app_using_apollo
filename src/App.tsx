import React from 'react';
import './App.css';
import Home from './Home';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


function App() {

  const client = new ApolloClient({
    uri: 'https://graphql-weather-api.herokuapp.com/',
    cache: new InMemoryCache()
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <Home/>
      </ApolloProvider>
    </div>
  );
}

export default App;
