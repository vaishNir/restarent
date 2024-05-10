import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
const Username = "admin@gmail.com";
const Password = "12345";
function AdminLogin1() {
  const [data, setData] = useState({
    Username: "",
    Password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Username);
    console.log(data.Username);
    console.log(data.Password);
    if (Username == data.Username)
      if (Password == data.Password) {
        alert("Admin login success");
        localStorage.setItem("admin", data.Username);
        navigate("Home");
        window.location.reload(false);
      } else {
        alert("Password Not match");
      }
    else {
      alert("Not found");
    }
  };
  return (
    <div className="mb-5">
      <Nav/>
    <form
      className="mx-auto shadow-lg"
      style={{
        width: "18rem",
        marginTop: "7rem",
        backgroundColor: "palegreen",
        borderRadius: "0.5rem",
      }}
    >
    
        <h3 className="text-center pt-5 mb-3">Admin Login</h3>
        <div className="p-4">
          <input
            placeholder="Enter Username"
            type="email"
            onChange={handleChange}
            name="Username"
            className="form-control"
          ></input>
        </div>
        <div className="p-4 pt-0">
          <input
            placeholder="Enter Password"
            type="password"
            onChange={handleChange}
            name="Password"
            className="form-control"
          ></input>
        </div>
        <div className="pb-4 mt-3 text-center">
          <button className="btn btn-success" onClick={handleSubmit}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin1;