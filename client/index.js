import React from 'react';
import ReactDOM from 'react-dom';
import { 
  ApolloClient, 
  ApolloProvider,
  InMemoryCache 
} from '@apollo/client';
// ApolloClient is entirely independent. It gets data from our server and stores it locally. 
// import { ApolloProvider } from 'react-apollo';
// This ApolloProvider is the glue layer between the ApolloClient and our React app
// This is what integrates Apollo with React. 
import { HashRouter, Router, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from "history";

import App from './components/App'
import SongList from './components/SongList';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  uri: 'http://localhost:4000/graphql'
});
// Apollo makes the assumption that the app.use() in server.js is routed to '/graphql'
// see ../server/server.js line 31

const history = createMemoryHistory();


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router location={ history.location } navigator={ history }>
        <Routes>
          {/* <Route path='/' element={ <App /> } /> */}
          <Route path='/' element={ <SongList /> } />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
