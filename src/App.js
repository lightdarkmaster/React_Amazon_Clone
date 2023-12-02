import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';
import Signin from './Signin';

function App() {
  return (
    <Router>
      <div className="app">
         <Header />
         <Navbar />
         <Home />
         <Signin />
      </div>
    </Router>
  );
}

export default App;
