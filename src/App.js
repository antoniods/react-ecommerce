import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = () => (
  <div><h1>HATS PAGE</h1></div>
);


function App() {
  return (
    <div>
      <Route exact={true} path='/' component={Homepage} />   
      <Route exact={true} path='/hats' component={HatsPage} />  
    </div>
  );
}

export default App;
