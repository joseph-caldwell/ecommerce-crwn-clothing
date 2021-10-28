import React from 'react';
import Homepage from './pages/homepage/Homepage.component'
import './App.css';
import { Switch, Route } from 'react-router';


const HatsPage =()=> (
  <div>
    <h1>HATS PAGE</h1>

  </div>
);

export default function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component='Homepage' />
      <Route exact path='/hats' component='Hatspage' />
    </Switch>
    
    </div>
);
}

//  <Homepage />