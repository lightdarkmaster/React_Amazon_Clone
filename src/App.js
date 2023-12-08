import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import Signin from './Signin';
import Checkout from './Checkout';
import Login from './Login';

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

           <Route path="/login" component={Login} >
             <Login />
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
//commeted the <Header /> and <Navbar/> cause we don't need that to be in all pages
//if you want to render the components wherever the route was you need to put the component/s outside the <Switch>
