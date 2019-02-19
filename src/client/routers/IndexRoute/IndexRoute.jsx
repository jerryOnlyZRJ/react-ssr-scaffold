import Main from "@/pages/Main";

// import Loadable from "react-loadable";
import loadable from "@loadable/component";
import Loading from "@/components/Loading/Loading";

// async redux
import ActionGetUserName from "@/redux/actions/get_user_name";

export default [
  {
    path: "/",
    component: Main,
    routes: [
      {
        key: "index",
        path: "/",
        exact: true,
        component: loadable(() => import(/* webpackChunkName: "hello" */ "@/pages/Main/Hello")),
        // 如果组件需要获取异步数据则在loadData中执行
        loadData: ({ store }) => {
          return store.dispatch(ActionGetUserName.getUserName());
        }
      },
      {
        key: "login",
        path: "/login",
        exact: true,
        component: loadable(() =>
          import(/* webpackChunkName: "login" */ `@/pages/Main/Login`)
        )
      }
    ]
  }
];
