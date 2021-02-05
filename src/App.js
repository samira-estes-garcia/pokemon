import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/'
  });

  return (
   <ApolloProvider client={client}>
     <main>
       <p>I am a Pokemon!</p>
     </main>
   </ApolloProvider>
  );
}

export default App;
