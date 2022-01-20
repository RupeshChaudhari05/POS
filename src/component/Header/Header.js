import { React } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-2">
        <Link className="navbar-brand" to="/">
          <h5>POS</h5>
        </Link>
      </nav>
      <NavBar></NavBar>
    </>
  );
};

export default Header;
