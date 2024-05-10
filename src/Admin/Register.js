import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";

function Register() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    dob: "",
    password: "",
    confirmpassword: "",
    email: "",
    contactno: "",
  });

  const handleChange = (a) => {
    setData({ ...data, [a.target.name]: a.target.value });
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3000/userregistration", data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Register Sucessfully");
        } else {
          alert("Invalid Registration");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Nav/>
      <div
        class="form-control d-flex mx-auto"
        style={{ width: "28rem", marginTop: "3rem", backgroundColor: "orange" }}
      >
        <form>
          <h2 class="text-center mt-4 mb-3">Register Form</h2>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">First Name:</label>
            <input
              class="form-control "
              style={{ width: "20rem" }}
              type="text"
              name="fname"
              placeholder="Enter First Name"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">Last Name:</label>
            <input
              class="form-control "
              style={{ width: "20rem" }}
              type="text"
              name="lname"
              placeholder="Enter Last Name"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">D.O.B:</label>
            <input
              class="form-control "
              style={{ width: "20rem" }}
              type="date"
              name="dob"
              placeholder="Enter Date of Birth"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">Email:</label>
            <input
              class="form-control"
              style={{ width: "20rem" }}
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">Password:</label>
            <input
              class="form-control"
              style={{ width: "20rem" }}
              type="password"
              name="password"
              placeholder="Enter password"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">Confirm Password:</label>
            <input
              class="form-control"
              style={{ width: "20rem" }}
              type="password"
              name="confirmpassword"
              placeholder="Enter Confirm password"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">Contact No.:</label>
            <input
              class="form-control"
              style={{ width: "20rem" }}
              type="tel"
              name="contactno"
              placeholder="Enter Contact No."
              maxLength={10}
              minLength={10}
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="text-center mt-3 mb-3">
            {" "}
            <button class="w-25 btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
