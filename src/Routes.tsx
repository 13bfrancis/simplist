import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
