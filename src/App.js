import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Switch, Route } from "react-router-dom";
import ShopPage from './pages/shoppage/shoppage.component';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
