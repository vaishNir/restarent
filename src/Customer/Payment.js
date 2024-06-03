import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import CustomerNav from "./CustomerNav";

function Payment() {
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const params=useParams()
  let custid = localStorage.getItem("CustomerId");
  const [state, setState] = useState([]);
  let total = 0;
  const fetchOrder = async () => {
    const response = await axios.get(
      `http://localhost:3500/vieworder/${custid}`
    );
    console.log(response.data,"mmmmmm");
    setState(response.data.result);
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  const handleChange = (a) => {
    setCardInfo({ ...cardInfo, [a.target.name]: a.target.value });
  };

  const handleClick = (a) => {
    if (
      cardInfo.number.length === 16 &&
      cardInfo.name &&
      cardInfo.expiry.length === 7 &&
      cardInfo.cvc.length === 3
    ) {
      axios
        .post("http://localhost:3500/paymentstatus",{state:state})
        .then((res) => {
          alert(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .post(`http://localhost:3500/cartitems/${custid}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      navigate("/viewfood");
    } else {
      alert("Invalid Card");
    }
  };

  const handleCancel = (a) => {
    a.preventDefault();
    axios
      .post("http://localhost:3500/cancelorder", { state: state })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert(res.data.msg);
          navigate("/viewcart");
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mb-5">
      <CustomerNav/>
      {state.map((x) => {
        if (x.paymentstatus == false) {
          total = total + x.count * x.amount;
        }
      })}

      <div
        className="container"
        style={{
          width: "25rem",
          borderRadius: "0.5rem",
        }}
      >
        <div id="Checkout" className="inline">
          <h1 className="text-center mb-3">Pay Invoice</h1>
          <div className="card-row">
            <span className="visa"></span>
            <span className="mastercard"></span>
            <span className="amex"></span>
            <span className="discover"></span>
          </div>
          <form>
            <div className="form-group">
              <div className="amount-placeholder mb-2 ">
                <h4 for="PaymentAmount" className="text-center mb-3">
                  Payment amount: <span>{"\u20B9"}</span>
                  <span className="ms-1">{params.total}</span>
                </h4>
              </div>
            </div>
            <div className="form-group">
              <label or="NameOnCard">Card Holder Name:</label>
              <input
                id="NameOnCard"
                className="form-control"
                placeholder="Enter Card holder name"
                type="text"
                maxlength="25"
                name="name"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="form-group">
              <label for="CreditCardNumber">Card number</label>
              <input
                id="CreditCardNumber"
                maxLength="16"
                placeholder="Enter Card Number"
                className="null card-image form-control"
                name="number"
                type="tel"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="expiry-date-group form-group">
              <label for="ExpiryDate">Valid Thru</label>
              <input
                id="ExpiryDate"
                className="form-control"
                placeholder="MM / YYYY"
                type="text"
                maxlength="7"
                name="expiry"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="security-code-group form-group">
              <label for="SecurityCode">Enter CVV(Security Code)</label>
              <div className="input-container">
                <input
                  id="SecurityCode"
                  className="form-control"
                  type="tel"
                  placeholder="Enter CVV"
                  maxLength="3"
                  name="cvc"
                  onChange={handleChange}
                  required
                ></input>
                <i id="cvc" className="fa fa-question-circle"></i>
              </div>
              <div className="cvc-preview-container two-card hide">
                <div className="amex-cvc-preview"></div>
                <div className="visa-mc-dis-cvc-preview"></div>
              </div>
            </div>
            <div className="text-center mt-3">
              <button
                onClick={handleClick}
                className="btn btn-block btn-success submit-button"
                type="submit"
              >
                <span className="align-middle">
                  Pay {"\u20B9"}
                  {params.total}
                </span>
              </button>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-danger" onClick={handleCancel}>
                Cancel order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Payment;
