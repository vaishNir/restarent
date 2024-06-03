import React, { useState } from "react";
import axios from "axios";
import Nav from "../Admin/Nav";

function Staffpassword() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (a) => {
    setData({ ...data, [a.target.name]: a.target.value });
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    if (data.password === data.confirmpassword) {
      console.log(data);
      axios
        .post("http://localhost:3500/staffresetpassword", data)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Password and Confirm password must be same");
    }
  };

  return (
    <div className="">
      <Nav/>
    <div className="mt-5">
      
      <form>
        <div
          className="form-control mx-auto d-block "
          style={{
            width: "25rem",
            marginTop: "7rem",
        
          }}
        >
          <div className="p-2 w-100">
            {" "}
            <h2 className="text-center mt-3 mb-3">Staff Reset Password</h2>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "9rem" }}>
              Username:
            </label>
            <input
              className="form-control "
              style={{ width: "13rem" }}
              name="email"
              placeholder="Enter Username"
              type="email"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "9rem" }}>
              Password:
            </label>
            <input
              className="form-control "
              style={{ width: "13rem" }}
              name="password"
              placeholder="Enter Password"
              type="password"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "9rem" }}>
              Confirm Password:
            </label>
            <input
              className="form-control "
              style={{ width: "13rem" }}
              name="confirmpassword"
              placeholder="Re-enter the Password"
              type="password"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="text-center mt-3 mb-3">
            <button className="w-25 btn btn-danger" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}
export default Staffpassword;
