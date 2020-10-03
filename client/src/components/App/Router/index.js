import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../../Landing";
import Register from "../../Register";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/register" component={Register} />
  </Switch>
);

export default Router;
