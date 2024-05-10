import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../Admin/Nav";
function Editfooddetails() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    foodname: "",
    price: "",
    descripition: "",
  });
  const { foodid } = useParams();
  console.log("id", foodid);

  useEffect(() => {
    axios
      .get(`http://localhost:3500/viewone/${foodid}`)
      .then((res) => {
        console.log(res);
        setData({
          foodname: res.data.foodname,
          price: res.data.price,
          descripition: res.data.descripition,
        });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, [foodid]); // Add foodid as a dependency
  
  // const handleChange = (a) => {
  //   if (a.target.name === "image") {
  //     setData({ ...data, image: a.target.files[0] });
  //   } else {
  //     setData({ ...data, [a.target.name]: a.target.value });
  //   }
  // };

  const handleChange = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]:
        e.target.name === "file" ? e.target.files[0] : e.target.value,
    });
  };
  console.log(data);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3500/editfooddetails/${foodid}`, data,)
       
      .then((res) => {
        console.log(res);
        alert("Updated successfully");
        navigate("/Viewfood");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  
  return (
    <div>
      {" "}
      <Nav />
      <div
        className="mx-auto shadow-lg"
        style={{
          width: "25rem",
          marginTop: "7rem",
          backgroundColor: "lightseagreen",
          borderRadius: "0.5rem",
        }}
      >
        <form>
          <div>
            <h2 className="text-center pt-3 mb-3">Edit Food Item</h2>
          </div>
          <div className="d-flex p-2 ps-3">
            <label className="form-label" style={{ width: "7.5rem" }}>
              Food name:
            </label>
            <input
              type="text"
              placeholder={data.foodname}
              name="foodname"
              onChange={handleChange}
              style={{ width: "15rem" }}
              className="form-control"
            ></input>
          </div>
          <div className="d-flex p-2 ps-3">
            <label className="form-label" style={{ width: "7.5rem" }}>
              Price:
            </label>
            <input
              type="tel"
              placeholder={data.price}
              name="price"
              onChange={handleChange}
              style={{ width: "15rem" }}
              className="form-control"
            ></input>
          </div>
          <div className="d-flex p-2 ps-3">
            <label className="form-label" style={{ width: "7.5rem" }}>
              Descripition:
            </label>
            <textarea
              type="text"
              placeholder={data.descripition}
              name="descripition"
              onChange={handleChange}
              style={{ width: "15rem" }}
              className="form-control"
            ></textarea>
          </div>
          <div className="pb-3 mt-3 text-center">
            <button className="btn btn-success" onClick={handleUpdate}>
              Update item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Editfooddetails;
