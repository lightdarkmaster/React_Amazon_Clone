import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import Signin from './Signin';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
      <Navbar />
         <Switch>

           <Route path="/checkout" component={Checkout} >
             <Checkout />
           </Route>

           <Route path="/">
             <Home />
             <Signin />
           </Route>

         </Switch>
      </div>
    </Router>
  );
}
export default App;

//default route should be in the bottom
