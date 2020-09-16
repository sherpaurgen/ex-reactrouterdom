import React from "react";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import "./App.css";
import Detail from "./Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/shop/:userId" component={Detail} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default App;
