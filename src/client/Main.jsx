import React from "react";
// react-router
import { renderRoutes } from "react-router-config";
import Layout from "@/container/Layout/Layout";

class Main extends React.Component {
  render() {
    return (
      // 数据注水
      <Layout>{renderRoutes(this.props.route.routes)}</Layout>
    );
  }
}

export default Main;
