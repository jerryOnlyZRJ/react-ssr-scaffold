import React from "react";
// react-router
import { renderRoutes } from "react-router-config";
import Layout from "@/container/Layout/Layout";

class Main extends React.Component {
  render() {
    return (
      // renderRoutes会将本次匹配的路由挂在props上，因此可以通过其拿到次级路由
      <Layout>{renderRoutes(this.props.route.routes)}</Layout>
    );
  }
}

export default Main;
