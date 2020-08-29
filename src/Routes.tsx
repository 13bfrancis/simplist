import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-in">
        <h1>Sign In</h1>
      </Route>
      <Route path="/sign-up">
        <h1>Sign Up</h1>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
