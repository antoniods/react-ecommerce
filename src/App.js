import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils.js';

// header called outside the switch so it can appear on all pages regardless of routing
// function App() { for having acces to state i need a class component
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser : null 
    };

  }

  unsubrscibedFromApp = null

  componentDidMount (){
    this.unsubrscibedFromApp = auth.onAuthStateChanged(user=> {
      this.setState({currentUser : user});

      console.log(user);
    });
  }


  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInSignOutPage} />
      </Switch>
    </div>
  );
}
}

export default App;
