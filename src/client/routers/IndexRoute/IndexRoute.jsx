import Main from '@/Main'
import Hello from "@/pages/Hello/Hello";
import Login from "@/pages/Login/Login";

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
