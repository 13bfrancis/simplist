import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { App } from "pages/App";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/app">
        <App />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
