import React from "react";
import { connect } from 'react-redux';
import ActionGetUserName from '../../redux/actions/get_user_name'

const mapState2Props = state => ({
  username: state.getUserName.username
})

const mapDispatcher2Props = dispatch => ({
  getUserName: () => dispatch(ActionGetUserName.getUserName())
})

@connect(mapState2Props, mapDispatcher2Props)
class Hello extends React.Component {
  componentDidMount(){
    this.props.getUserName()
  }
  render() {
    return <div>Hello {this.props.username}!</div>;
  }
}

export default Hello;
