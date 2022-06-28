import React from "react";
import { Link } from "react-router-dom";
// import {Navbar,Nav,Container} from 'react-bootstrap'

//login/sign up, about us, contact

function NavbarNoLogin() {
  return (
    <div>
      <Link to="/nonprofit">Hello</Link>
    </div>
  );
}

export default NavbarNoLogin;
