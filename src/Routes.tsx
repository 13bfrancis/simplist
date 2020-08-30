import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { App } from "pages/App";
import { AuthContext } from "context/AuthContext";

export const Routes = () => {
  const currentUser = useContext(AuthContext);

  return (
    <Switch>
      {currentUser ? (
        <Redirect from="/sign-in" to="/app" />
      ) : (
        <Redirect from="/app" to="/sign-in" />
      )}
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
