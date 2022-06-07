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
import SongList from './components/SongList';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  uri: 'http://localhost:4000/graphql'
});
// Apollo makes the assumption that the app.use() in server.js is routed to '/graphql'
// see ../server/server.js line 31


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
