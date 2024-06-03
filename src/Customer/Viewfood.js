import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerNav from "./CustomerNav";
import { useNavigate } from "react-router-dom"
function Viewfood({ url }) {
  console.log({ url });
  const [state, setState] = useState([]);
  let custid = localStorage.getItem("CustomerId") || null;
  const navigate = useNavigate();

  const [cartdata, setCartdata] = useState({
    CustomerId: "",
    count: 1,
  });

  useEffect(() => {
    if (custid) {

      setCartdata({
        count: 1,
        CustomerId: custid
      })
    }else {
      alert("Please Login again")
      //todo => navigate to customer login page
    }
  }, [])
  console.log(cartdata, "lll");
  const fetchFood = async () => {
    const response = await axios.get("http://localhost:3500/viewfood");
    console.log(response.data, "kk");
    setState(response.data.data);
  };
  useEffect(() => {
    console.log(fetchFood);
    fetchFood();
  }, []);

  const handleClick = async (foodid) => {
    try {
      const res = await axios.post(
        `http://localhost:3500/addcart/${foodid}`,
        cartdata
      )
      console.log("cart res", res)
      if (res.status === 200) {
        navigate("/viewcart");

        alert("Item added to cart");
        return;
      }
    } catch (error) {
      console.log("Error on add cart ", error);
    }
    
  };

  return (
    <div className="">
      <CustomerNav />
      <div className="m-4">
      <ul style={{ listStyleType: "none" }} className="p-3">
        {state.map((x) => (
          <li key={x._id} className="m-3 p-4 d-inline-flex">
            <div className="shadow-lg p-3 bg-body-tertiary rounded">
              <img
                src={`${url}/${x.image.originalname}`}
                className="img-fluid"
                alt="..."
                style={{ width: "15rem", height: "15rem" }}
              />
              <div>
                <h4 className="mt-2">{x.foodname}</h4>
                <div>
                  <label className="form-label me-4">Quantity:</label>
                  <select
                    name="count"
                    onChange={(a) => {
                      setCartdata({
                        ...cartdata,
                        [a.target.name]: a.target.value,
                      });
                      x.amount = x.price * a.target.value;
                    }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                  <h4 className="mb-2">
                    Price: {"\u20B9"}
                    {x.amount ? x.amount : x.price}
                  </h4>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleClick(x._id);
                  }}
                >
                  Add cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Viewfood;
