import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function StaffNav() {
  const navigate = useNavigate();
  let staffid = localStorage.getItem("staffId");
  let staffname = localStorage.getItem("sfname");

  const handlelogout = () => {
    staffid = localStorage.removeItem("staffId");
    staffname = localStorage.removeItem("sfname");
    alert("You have logged out");
    navigate("/stafflogin");
    window.location.reload(false);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        {" "}
        Restaurant Page
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="#">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Staffvieworder">
              vieworders
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Staffviewfood">
              Menu items
            </Link>
            </li>
            <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {staffname}
              </a>
              <a className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" onClick={handlelogout}>
                    Log out
                  </Link>
                </li>
              </a>
        </ul>
      </div>
    </nav>
  );
}

export default StaffNav;
