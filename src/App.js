import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout" component={Checkout}>
            <Header />
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Navbar />
            <Home />
            <Signin />
          </Route>{" "}
        </Switch>{" "}
      </div>{" "}
    </Router>
  );
}
export default App;

//default route should be in the bottom
//commeted the <Header /> and <Navbar/> cause we don't need that to be in all pages
//if you want to render the components wherever the route was you need to put the component/s outside the <Switch>
