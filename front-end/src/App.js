import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import {apolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import {default as ApolloClient} from 'apollo-boost';



import ListPage from './pages/list';
import AdminPage from './pages/admin';
import BottomNavigation from './components/navigation/bottomNavigation';
import './App.css';

const client = new ApolloClient({
    uri: "https://localhost:8000/graphql"
})

function App() {
  return (
    <BrowserRouter>
      <main className='main-content'>

        <Route path='/admin' component={AdminPage}/>
        <Route path='/list' component={ListPage}/>
      </main>
      <BottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
