import React, { useState } from "react";
import axios from "axios";

function Addfood() {
  const [data, setData] = useState({
    foodname: "",
    image: "",
    price: "",
    descripition: "",
  });

  // const handleChange = (a) => {
  //   if (a.target.name === "image") {
  //     const file = a.target.files[0];
  //     setData({ ...data, image: file });
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

  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3500/addfood", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
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
    <div
      className="mx-auto shadow-lg mb-5"
      style={{
        width: "25rem",
        marginTop: "7rem",
        borderRadius: "0.5rem",
      }}
    
  
    >

      <form className="form-control d-block bg-warning-subtle">
        <div>
          <h2 className="text-center mt-3 mb-3">Add food items</h2>
        </div>
        <div className="d-flex p-2">
          <label className="form-label" style={{ width: "7rem" }}>
            Food name:
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter the food name"
            name="foodname"
            style={{ width: "15rem" }}
            onChange={handleChange}
          ></input>
        </div>
        <div className="d-flex p-2">
          <label className="form-label" style={{ width: "7rem" }}>
            Food image:
          </label>
          <input
            className="form-control"
            type="file"
            name="file"
            onChange={handleChange}
            style={{ width: "15rem" }}
          ></input>
        </div>
        <div className="d-flex p-2">
          <label className="form-label" style={{ width: "7rem" }}>
            Price:
          </label>
          <input
            type="tel"
            placeholder="Enter the price"
            name="price"
            onChange={handleChange}
            style={{ width: "15rem" }}
            className="form-control"
          ></input>
        </div>
        <div className="d-flex p-2">
          <label className="form-label" style={{ width: "7rem" }}>
            Descripition:
          </label>
          <textarea
            type="text"
            placeholder="Enter the Descripition"
            name="descripition"
            onChange={handleChange}
            style={{ width: "15rem" }}
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3 mt-3 text-center">
          <button className="btn btn-success" onClick={handleSubmit}>
            Add item
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addfood;