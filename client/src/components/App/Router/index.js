import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../../Landing";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
  </Switch>
);

export default Router;
