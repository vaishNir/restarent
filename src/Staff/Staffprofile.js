import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StaffNav from "./StaffNav";

function Staffprofile() {
  const [state, setState] = useState({});
  let staffid = localStorage.getItem("staffId");

  const fetchorder = async () => {
    const response = await axios.get(
      `http://localhost:3500/staffprofile/${staffid}`
    );
    console.log(response.data.data);
    setState(response.data.data);
  };
  useEffect(() => {
    fetchorder();
  }, []);
  return (
    <div >
      <StaffNav/>
      <table class=" container mt-5 table table-bordered">

  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">{state.fname}</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Last Name</th>
      <td colSpan="2"> {state.lname}</td>
  </tr>
    <tr>
      <th scope="row">Date Of Birth</th>
      <td colspan="2">{state.dob}</td>
      
    </tr>
    <tr>
      <th scope="row">Gender</th>
      <td colspan="2">{state.gender}</td>
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td colspan="2">{state.email}</td>
    </tr>
    <tr>
      <th scope="row">Password</th>
      <td colspan="2">{state.password}</td>
    </tr>
    <tr>
      <th scope="row">Salary</th>
      <td colspan="2">{state.salary}</td>
    </tr>
    <tr>
      <th scope="row">Contact Number</th>
      <td colspan="2">{state.contactno}</td>
    </tr>
    <tr>
      <th scope="row">Designation</th>
      <td colspan="2">{state.designation}</td>
    </tr>
  </tbody>
</table>

                 
    </div>
  );
}
export default Staffprofile;
