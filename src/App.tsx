import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useObserver } from "mobx-react"; 
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./components/Home";
import CustomerAdd from "./components/CustomerAdd";
import EditCustomer from "./components/EditCustomer";
import "./app.scss"; 

function App() {
  const setOpen = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  const setFalse = () => {
    setHamburgerMenu(false);
  };

  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  return useObserver(() => (
    <Router>
      <Navbar hamburgerMenu={hamburgerMenu} setOpen={setOpen} />
      <Menu hamburgerMenu={hamburgerMenu} setFalse={setFalse} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={CustomerAdd} exact />
        <Route path="/edit/:id" component={EditCustomer} exact />
      </Switch>
    </Router>
  ));
}

export default App;
