import React from "react";
import { connect } from "react-redux";
import ActionGetUserName from "@/redux/actions/get_user_name";

/**
 * @description  将Redux的state映射到组件的props上
 * @param {Object} state 
 */
const mapState2Props = state => ({
  username: state.getUserName.username
});

/**
 * @description  对dispatcher进行封装并挂载在props上
 * @param {Function} dispatch 
 */
const mapDispatcher2Props = dispatch => ({
  getUserName: () => dispatch(ActionGetUserName.getUserName())
});

@connect(
  mapState2Props,
  mapDispatcher2Props
)
class Hello extends React.Component {
  componentDidMount() {
    // SSR都应该进行优化
    // 防止经过服务端渲染之后再次拉取数据
    if (!this.props.username) {
      this.props.getUserName();
    }
  }
  render() {
    return <div>Hello {this.props.username}!</div>;
  }
}

export default Hello;
