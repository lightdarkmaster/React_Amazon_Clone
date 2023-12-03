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
         <Switch>

           <Route path="/checkout">
             <Header />
             <Checkout />
           </Route>

           <Route path="/">
            <Header />
             <Navbar />
             <Home />
             <Signin />
           </Route>

         </Switch>
      </div>
    </Router>
  );
}

export default App;
