import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import ListPage from './pages/list';
import AdminPage from './pages/admin';
import BottomNavigation from './components/navigation/bottomNavigation';
import './App.css';

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
