import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import ListPage from './pages/list';
import AdminPage from './pages/admin';
import MainNavigation from './components/navigation/MainNavigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <MainNavigation/>

        <Route path='/admin' component={AdminPage}/>
        <Route path='/list' component={ListPage}/>
    </BrowserRouter>
  );
}

export default App;
