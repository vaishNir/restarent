import React from "react";
import { Link, useNavigate } from "react-router-dom";

function StaffNav() {
  const navigate = useNavigate();
  let Staffid = localStorage.getItem("Staff");

  const handlelogout = () => {
    Staffid = localStorage.removeItem("Staff");
    alert("Staff logged out");
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
           < ul className="nav justify-content-end mx-5"> 
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/Staffvieworder">
                Staff vieworder
              </Link>
              </li>
              <li className="nav-item dropdown">
              <Link className="nav-link" to="/Staffprofile">
                Staff Profile
              </Link>
              </li>
        
                
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Staff
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" onClick={handlelogout}>
                    Log out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        
        </div>
      </nav>
    </div>
  );
}

export default StaffNav;