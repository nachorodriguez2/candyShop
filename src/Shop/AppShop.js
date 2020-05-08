import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";
import Shop from "./Shop";
import CheckOut from "./CheckOut";

const AppShop = () => {
  return (
    <Router>
      <div className="contenedor">
        <Nav />
        <Switch>
          <Route exact path="/candyShop" component={Main} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/checkOut" component={CheckOut} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppShop;
