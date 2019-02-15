# react-ssr-scaffold
👷React SSR 脚手架

## SSR基本流程：
0. （匹配前端传来路由对应的组件、初始化状态、执行getInitialProps）生成完整组件
1. 服务端渲染 HTML String 直出
2. 浏览器解析 HTML
3. 执行前端 bundle JS
4. JS 中的 React 代码接管页面操作（路由，Redux）