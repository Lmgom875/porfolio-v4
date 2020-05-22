import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import Edit from "./pages/edit/Edit";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/edit">
            <Edit />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
