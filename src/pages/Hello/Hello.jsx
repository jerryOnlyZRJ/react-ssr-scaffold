import React from "react";
import { connect } from 'react-redux';

const mapState2Props = state => ({
  username: state.getUserName.username
})

@connect(mapState2Props)
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.username}!</div>;
  }
}

export default Hello;
