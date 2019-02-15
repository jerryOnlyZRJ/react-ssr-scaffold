import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Hello from '../../components/Hello/Hello'
import Login from '../../components/Login/Login'

import Loadable from "react-loadable";
import Loading from "../../components/Loading/Loading";

class IndexRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          key="index"
          exact
          path="/"
          component={Hello}
        />
        <Route
          key="login"
          path="/login"
          component={Login}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default IndexRoute;
