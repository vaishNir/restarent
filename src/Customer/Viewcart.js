import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CustomerNav from "./CustomerNav";

function Viewcart({ url }) {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  let CustomerId = localStorage.getItem("CustomerId");

  const fetchCart = async () => {
    const response = await axios.get(
      `http://localhost:3500/viewcart/${CustomerId}`
    );
    console.log(response.data, "uu");
    setState(response.data.result);
    calculateTotal(response.data.result);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  console.log(state,"yy");
  const calculateTotal = (cartItems) => {
    let newTotal = 0;
    cartItems.forEach((item) => {
      newTotal += item.count * item.foodid.price;
    });
    setTotal(newTotal);
  };

 
  const handleDelete = (id) => {
    axios
      .post(`http://localhost:3500/deletecartitem/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          fetchCart(); // Refetch the cart after deletion
          console.log(res.data,"lllll");
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckout = (total) => {
    console.log(total,"iii");
    axios
      .post("http://localhost:3500/addorder", state,total)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          navigate(`/payment/${total}`);
          console.log(res.data,"p");
          handleDelete(res.data)
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <CustomerNav />

      <div className="mt-5">
        {CustomerId ? (
          <ul
            style={{ listStyleType: "none", width: "56rem" }}
            className="p-5 pt-0 mx-auto"
          >
            {state.map((x) => (
              <li
                key={x._id}
                className="d-flex justify-content-between shadow-lg p-3 bg-body-tertiary rounded mb-4 container-fluid"
              >
                <img
                  src={`${url}${x.foodid.image.originalname}`}
                  className="img-fluid"
                  alt="..."
                  style={{ width: "8rem", height: "8rem" }}
                />
                <div>
                  <h3 className="mt-2 ms-3">{x.foodid.foodname}</h3>
                  <div className="d-flex mt-5 ms-3">
                    <h5 className="me-5">
                      Food price:{" "}
                      <span className="ms-1">
                        {x.count} x {x.foodid.price} = {"\u20B9"}{" "}
                        {x.count * x.foodid.price}
                      </span>
                    </h5>
                    <h5 className="me-5 ms-3">
                      Quantity: <span className="ms-1">{x.count}</span>
                    </h5>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(x._id)}
                  style={{ height: "2.5rem" }}
                  className="mt-5 btn btn-danger"
                >
                  delete item
                </button>
               
              </li>
            ))}
            {total > 0 ? (
              <div>
                <p className="mt-3 mb-3 me-4 text-end fs-5 fw-semibold">
                  Total :{" "}
                  <span>
                    {"\u20B9"} {total}
                  </span>
                </p>
                <div className="d-grid me-3 justify-content-md-end">
                  <button
                    className="btn btn-success me-md-2"
                    onClick={()=>handleCheckout(total)}
                  >
                    Check out
                  </button>
                </div>
              </div>
            ) : (
              <h3 className="mt-5 mb-3 me-4 text-center fs-3 fw-semibold">
                Cart is empty
              </h3>
            )}
          </ul>
        ) : (
          <p className="mt-5 mb-3 me-4 text-center fs-3 fw-semibold">
            Please login to view the cart
          </p>
        )}
      </div>
    </div>
  );
}

export default Viewcart;
