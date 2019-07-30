import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./login";
import SignupPage from "./signup";
import Home from "./home";

const AppRouter = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
    </div>
  );
};

export default AppRouter;
