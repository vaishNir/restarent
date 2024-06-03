import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import StaffNav from "./StaffNav";

function Stafforderconfirm() {
  const [state, setState] = useState({});
  
  const [staffcartdata, setStaffcartdata] = useState({
    customername: "",
  });
  const navigate = useNavigate();

  let stafid = localStorage.getItem("staffId") || null;
  console.log('staf id', stafid)
  useEffect(() => {
    if (stafid) {
      fetchstaffCart();

    }
  }, []);

  
console.log(state)
  const fetchstaffCart = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3500/staffviewcart/${stafid}`
      );
      console.log(response.data.result);
      setState(response.data.result);
      
    } catch (error) {
      console.log("Error on staff view cart", error)
    }
  };
 

  const handleCancel = (id) => {
    axios
      .post(`http://localhost:3500/staffdeletecartitem/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Payment Cancelled");
          navigate("/staffviewfood");
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePlaceorder = (id) => {
    if(staffcartdata.customername){
        axios
        .post(`http://localhost:3500/staffaddorder/${staffcartdata.customername}`,{state:state})
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert(res.data.msg)
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
        axios
        .post(`http://localhost:3500/staffdeletecartitem/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            navigate("/staffviewfood");
          } else {
            console.log(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else{
        alert("Invalid Customer name")
    }   
  };

  return (
    <div className="">
      <StaffNav/>
    <div className="mt-5">
      
      {state.length > 0 ? (
        <ul
          style={{ listStyleType: "none", width: "30rem" }}
          className="p-5 pt-0 mx-auto"
        >
          <h4 className="text-center">Ordered Details</h4>
          {state.map((x) => (
            <div>
              <li
                key={x._id}
                className="justify-content-center shadow-lg p-3 bg-body-tertiary rounded mb-4 container-fluid"
              >
                <div className="d-flex mb-3 justify-content-center">
                  <label className="form-label mt-1 fw-semibold">
                    Customer name :{" "}
                  </label>
                  <input
                    className="form-control ms-1"
                    placeholder="Enter Customer name"
                    style={{ width: "13rem" }}
                    name="customername"
                    count="count"
                    onChange={(a) =>
                        setStaffcartdata({
                            ...staffcartdata,
                            [a.target.name]: a.target.value,
                          })
                    }
                  ></input>
                </div>
                <img
                  src={`http://localhost:3500/${x.foodid.image}`}
                  className="img-fluid"
                  alt="..."
                  style={{ width: "100%", height: "14rem" }}
                />
                <div>
                  <h3 className="mt-3 text-center">
                    Foodname: {x.foodid.foodname}
                  </h3>
                  <div className=" mt-3">
                    <h5 className="text-center">
                      Quantity: <span className="">{x.count}</span>
                    </h5>
                    <h5 className=" text-center">
                      Food price:{" "}
                      <span className="ms-1">
                        {x.count} x {x.foodid.price} = {"\u20B9"}
                        {x.count * x.foodid.price}
                      </span>
                    </h5>
                  </div>
                </div>
              </li>
              <div>
                <p className="mt-3 mb-3 text-center fs-5 fw-semibold">
                  Total :{" "}
                  <span>
                    {"\u20B9"} {x.count * x.foodid.price}
                  </span>
                </p>
                <div className="d-grid mb-3 justify-content-center">
                  <button
                    className="btn btn-success"
                    onClick={() => handlePlaceorder(x._id)}
                  >
                    Place Order
                  </button>
                </div>
                <div className="d-grid justify-content-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleCancel(x._id)}
                  >
                    Cancel order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>unable to buy the food</p>
      )}
      </div>
    </div>
  );
}

export default Stafforderconfirm;
