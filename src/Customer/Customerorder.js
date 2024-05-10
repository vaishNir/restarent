import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CustomerNav from "./CustomerNav";

function Customerorders() {
    const [state, setState] = useState([]);
    const fetchcust_order = async () => {
        const response = await axios.get("http://localhost:3500/viewcustomerorder");
        console.log(response.data.result);
        setState(response.data.result);
      };
      useEffect(() => {
        fetchcust_order();
      }, []);
  return (
    <div className="mt-5">
    <CustomerNav/>
        {state.length > 0 ? (
        <ul
          style={{ listStyleType: "none", width: "48rem" }}
          className="p-5 pt-0 mx-auto"
          
        >
          {state.map((x) => (
            <li
              key={x._id}
              className="shadow-lg p-3 bg-body-tertiary rounded mb-4 container-fluid"
            >
                <div>
                 
                  <h4 className="text-center">Customer Name : {x.userid.fname}</h4></div>
              <div className="d-flex">
              <img
                src={`http://localhost:3500/${x.foodid.image}`}
                className="img-fluid me-4"
                alt="..."
                style={{ width: "8rem", height: "8rem" }}
              />
              <div className="ms-3">
                <h3 className="mt-2 ms-3">{x.foodid.foodname}</h3>
                <div className="d-flex mt-5 ms-3">
                  <h5 className="me-5">
                    Food price:{" "}
                    <span className="ms-1">
                      {"\u20B9"} {x.count * x.amount}
                    </span>
                  </h5>
                </div>
              </div>
              <div className="mt-3 ms-2">
                <h5>
                  Date:{" "}
                  <span>
                    {x.date.slice(0, 10).split("-").reverse().join("/")}
                  </span>
                </h5>
                <h5 className="me-5 mt-5">
                  Quantity: <span className="ms-1">{x.count}</span>
                </h5>
              </div>
              </div>
            </li>
          ))}
          <div className="text-center mt-2">
            <Link to="/admin/Home" className="btn btn-danger">
              Close
            </Link>
          </div>
        </ul>
      ) : (
        <h2 className="mt-5 mb-3 me-4 text-center fs-3 fw-semibold">
          Your Order is Empty
        </h2>
      )}
    </div>
  )
}

export default Customerorders