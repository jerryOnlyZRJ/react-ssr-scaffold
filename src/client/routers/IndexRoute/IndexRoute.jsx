import Main from '@/pages/Main'
import Hello from "@/pages/Main/Hello";
import Login from "@/pages/Main/Login";

import Loadable from "react-loadable";
import Loading from "@/components/Loading/Loading";

export default [
  {
    path: '/',
    component: Main,
    routes: [{
      key: "index",
      path: "/",
      exact: true,
      component: Hello,
      loadData: Hello.asyncData
    },
    {
      key: "login",
      path: "/login",
      exact: true,
      component: Login
    }]
  }
];
