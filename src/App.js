import React from 'react';
import ShopPage from  './pages/shop/shop.component';
import Homepage from './pages/homepage/Homepage.component';
import './App.css';
import { Switch, Route } from 'react-router';




export default function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
    
    </div>
);
}

//  <Homepage />