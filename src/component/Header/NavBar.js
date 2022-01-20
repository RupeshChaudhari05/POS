import { React } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <div class="main_nav bg-dark">
        <div className="row container">
          <div className="col boxx">
            <Link className="panel" to="/users">
              User
            </Link>
          </div>
          <div className="col boxx">
            <Link className="panel" to="/product">
              Product
            </Link>
          </div>
          <div className="col boxx">
            <Link className="panel" to="/customer">
              Customer
            </Link>
          </div>
          <div className="col boxx">
            <Link className="panel " to="/orders">
              Order
            </Link>
          </div>
          <div className="col boxx">
            <Link className="panel " to="/expences">
              Expences
            </Link>
          </div>
          <div className="col boxx">
            <Link className="panel " to="/tables">
              Table
            </Link>
          </div>
          <div className="col boxx">
            <Link className="panel" to="/report">
              Report
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
