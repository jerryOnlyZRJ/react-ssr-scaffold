// libraries
import React from "react";
import ReactDOM from "react-dom";
// react-router
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import IndexRoute from "@/routers/IndexRoute/IndexRoute";
// redux
import { Provider } from "react-redux";
import getStore from "@/redux/store";

class App extends React.Component {
  render() {
    return (
      // 数据注水
      <Provider store={getStore(window.__INITIAL_STATE__)}>
        <BrowserRouter>
          <div>{renderRoutes(IndexRoute)}</div>
        </BrowserRouter>
      </Provider>
    );
  }
}

// 如果服务端直出，则只绑定事件，不渲染组件
ReactDOM.hydrate(<App />, document.getElementById("root"));
