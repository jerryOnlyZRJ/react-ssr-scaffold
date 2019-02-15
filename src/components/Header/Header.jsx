import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Hello</Link>丨<Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Header;
