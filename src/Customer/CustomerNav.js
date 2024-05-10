import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CustomerNav() {
  const navigate = useNavigate();
  let Customerid = localStorage.getItem("Customer");

  const handlelogout = () => {
    Customerid = localStorage.removeItem("CustomerId");
    localStorage.removeItem("Cfname");

    alert("Customer logged out");
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Restaurant Page
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="nav justify-content-end mx-5">
            <li className="nav-item ">
              <Link
                className="nav-link"
                to="/Viewfood"
              >
                View food
              </Link>
            </li>
            <li>
              <Link className="nav-link " to="/customerorders">
                ViewOrder
              </Link>
            </li>
            <li>
              <Link className="nav-link " to="/Viewcart">
                viewcart
              </Link>
            </li>
            <li>
              <Link className="dropdown-item mt-1" onClick={handlelogout}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default CustomerNav;
