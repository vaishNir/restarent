import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerNav from "./CustomerNav";

function Viewfood({url}) {
  console.log({url});
  const [state, setState] = useState([]);
  let custid = localStorage.getItem("CustomerId");

  const [cartdata, setCartdata] = useState({
    CustomerId : custid,
    count: "1",
  });
  console.log(cartdata,"lll");
  const fetchFood = async () => {
    const response = await axios.get("http://localhost:3500/viewfood");
    console.log(response.data,"kk");
    setState(response.data.data);
  };
  useEffect(() => {
    console.log(fetchFood);
    fetchFood();
  }, []);

  const handleClick = (foodid,productimg,productprice)=>
  {
    console.log(productimg,"mm")
    axios
        .post(`http://localhost:3500/addcart/${foodid}`, cartdata,productimg,productprice)
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
  };

  return (
    <div className="m-4">
      <CustomerNav/>
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
                      x.amount=x.price*a.target.value;
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
                    {(x.amount)?(x.amount):(x.price)}
                  </h4>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleClick(x._id,x.image.originalname,x.price);
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
  );
}

export default Viewfood;