import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../../Landing";
import Register from "../../Register";
import Profile from "../../Profile";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);

export default Router;
