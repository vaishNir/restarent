import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../Admin/Nav";


function CustomerLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    axios
      .post("http://localhost:3500/userlogin", data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert(res.data.msg);
          navigate("/CustomerNav");
          localStorage.setItem("CustomerId", res.data.result._id);
          localStorage.setItem("Cfname", res.data.result.fname);
          // window.location.reload(false);
        } else {
          alert(res.data.msg);

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };  return (
  <div>
    <Nav/>
      <form
        className="mx-auto shadow-lg"
        style={{
          width: "18rem",
          marginTop: "7rem",
          
          borderRadius: "0.5rem",
        }}
      >
        <h3 className="text-center pt-5 mb-3">Customer Login</h3>
        <div className="p-4">
          <input
            placeholder="Enter Email"
            type="email"
            onChange={handleChange}
            name="email"
            className="form-control"
          ></input>
        </div>
        <div className="p-4 pt-0">
          <input
            placeholder="Enter Password"
            type="password"
            onChange={handleChange}
            name="password"
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

export default CustomerLogin;