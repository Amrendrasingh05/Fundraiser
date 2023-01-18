import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/events";
import * as user_actions from "../../store/actions/user";
import { FormComponent, FormContainer } from "react-authorize-net";
import { ToastContainer } from "react-toastify";

import arrowright from "../../assets/images/arrow-right.png";
import img6 from "../../assets/images/img6.png";
import { errorToast } from "../../utils/toast/index";
import '../../App.css'
import { useParams } from "react-router-dom";
let clientKey =
  "5FcB6WrfHGS76gHW3v7btBCE3HuuBuke9Pj96Ztfn5R32G5ep42vne7MCWZtAucY";
let apiLoginId = "5KP3u95bQpv";
const Home = ({ history }) => {

  const StyledFormComponent = (props) => ( 
  <FormComponent className="styledForm" {...props}/> )


  const onSuccessHandler = (data) => {
    console.log(data);
	dispatch(
        actions.paymentDoneRequest({
			order_id:OrderId
        })
      );
  };

  const onErrorHandler = (data) => {
    console.log(data);
	errorToast(data.messages.message[0]['text']);
 
};

  const dispatch = useDispatch();
  let { id } = useParams();
  const { prodocts } = useSelector((state) => state.product);
  const { event_id, loading, data, order,payment } = useSelector(
    (state) => state.event
  );
  const { user } = useSelector((state) => state.user);
  const [CheckoutBtn, setCheckoutBtn] = useState(false);
  const [CartsDAta, setCartsDAta] = useState(0);

  const [FirstName, setFirstName] = useState("");
  const [OrderId, setOrderId] = useState("");

  const [LastName, setLastName] = useState("");
  const [StreetAddress, setStreetAddress] = useState("");
  const [AprtMent, setAprtMent] = useState("");
  const [Zipcode, setZipcode] = useState("");

  const CheckOutBn = () => {
    if (FirstName === "") {
      errorToast("First Name is required");
    } else if (LastName === "") {
      errorToast("Last Name is required");
    } else if (StreetAddress === "") {
      errorToast("Street Address is required");
    } else if (AprtMent === "") {
      errorToast("Apartment Name is required");
    } else if (Zipcode === "") {
      errorToast("Zipcode is required");
    } else {
		console.log("CartsDAta",CartsDAta);
      dispatch(
        actions.addOrderRequest({
          first_name: FirstName,
          last_name: LastName,
          street_address: StreetAddress,
          apartment: AprtMent,
          zipcode: Zipcode,
          amount: CartsDAta + parseFloat((CartsDAta * 18) / 100),
        })
      );
    }
  };

  

  console.log("cart", data);
  console.log("order",order)
  console.log("order_id",order?order._id:"")

  const newDate = new Date();
  newDate.setDate(newDate.getDate() + 14);

  console.log("CartsDAta", CartsDAta);

  const getCart = () => {
    dispatch(
      actions.getCartRequest({
        history,
      })
    );
  };

  const getProfile = () => {
    dispatch(
      user_actions.getProfileData({
        history,
      })
    );
  };


  useEffect(()=>{
	let AllDAta = 0
	if (data.length > 0) {

		data.map((e, i) => {
		  AllDAta = AllDAta + e["quantity"] * e["product_id"]["Price"];
		});
		console.log("AllDAta",AllDAta)
		setCartsDAta(AllDAta);
	  }

	  if(order!=""){
		setCheckoutBtn(true)
		setOrderId(order._id)

	  }
	  if(payment!=""){
		window.location.href="/"

	  }
  },[data,order,payment])
  useEffect(() => {

    getCart();
   
  }, []);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <ToastContainer />

      <div className="checkout">
        <div className="container">
          <div className="d-flex ">
            <a href="/" className="btn back primary-bg">
              <i className="fa fa-arrow-left" aria-hidden="true"></i> Back to
              home
            </a>
          </div>
          <br />

          <div className="row" style={{ overflow: "hidden" }}>
            <div className="col-md-7">
              <div className="progresscontainer">
                <h3 className="font-36">Checkout</h3>
                <ul className="list list-inline mt-4 mb-5">
                  <li className="list-inline-item bar-circle active">
                    <div className="d-flex align-items-center">
                      <span className="rounded-circle d-flex align-items-center justify-content-center">
                        01
                      </span>
                      <span className="ml-2 font-14 mr-2">Information</span>
                      <img src={arrowright} alt="arrow" />
                    </div>
                  </li>

                  <li className="list-inline-item bar-circle">
                    <div className="d-flex align-items-center">
                      <span className="rounded-circle d-flex align-items-center justify-content-center">
                        02
                      </span>
                      <span className="ml-2 font-14 mr-2">Payment</span>
                      <img src={arrowright} alt="arrow" />
                    </div>
                  </li>

                  <li className="list-inline-item bar-circle">
                    <div className="d-flex align-items-center">
                      <span className="rounded-circle d-flex align-items-center justify-content-center">
                        03
                      </span>
                      <span className="ml-2 font-14 mr-2">Checkout</span>
                    </div>
                  </li>
                </ul>
                <div className="form-container">
                  <div className="form-page p-0">
                    <h4 className="font-24 mb-3">Contact Information</h4>
                    <div className="form-group">
                      <input
                        type="email"
                        className="input form-control"
                        defaultValue={user != null ? user[0].email : ""}
                        placeholder="E-mail *"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="input form-control"
                        defaultValue={user != null ? user[0].mobile : ""}
                        placeholder="Phone Number *"
                      />
                    </div>

                    <br />

                    <h4 className="font-24 mb-3">Shipping Information</h4>

                    <div className="row">
                      <div className="col-sm-6 pr-1">
                        <div className="form-group">
                          <input
                            type="text"
                            className="input form-control"
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                            placeholder="First Name*"
                          />
                        </div>
                      </div>

                      <div className="col-sm-6 pl-1">
                        <div className="form-group">
                          <input
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                            type="text"
                            className="input form-control"
                            placeholder="Last Name*"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="input form-control"
                        placeholder="Street Address*"
                        onChange={(e) => {
                          setStreetAddress(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        className="input form-control"
                        placeholder="Apartment / Unit / Suite"
                        onChange={(e) => {
                          setAprtMent(e.target.value);
                        }}
                      />
                    </div>

                    <div className="row">
                      <div className="col-sm-6 pr-1">
                        <div className="form-group mb-0">
                          <input
                            type="number"
                            className="input form-control"
                            placeholder="ZipCode"
                            onChange={(e) => {
                              setZipcode(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div
                      style={{
                        display: "block"
                      }}
                      className="add-card-box"
                    >
                      {/* CheckoutBtn === false ? "none" :  */}
                      <FormContainer
                        // className="add-card-box"
                        environment="sandbox"
                        onError={onErrorHandler}
                        onSuccess={onSuccessHandler}
                        amount={CartsDAta + parseFloat((CartsDAta * 18) / 100)}
                        component={StyledFormComponent}
                        clientKey={clientKey}
                        apiLoginId={apiLoginId}
                      />
                    </div>
                    

                    <br />

                    <div
                      style={{
                        display: CheckoutBtn === false ? "block" : "none",
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn_step back btn-lg ml-auto primary-bg"
                        onClick={CheckOutBn}
                      >
                        Checkout &nbsp;
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <h4 className="font-24">Order Summary</h4>
              <p className="font-16" style={{ color: "#999999" }}>
                50% each will be benifit from this fundraiser
              </p>
              <img src={img6} className="w-100" />

              <div className="d-flex align-items-center mt-2">
                <h4 className="font-22">
                  Demo Store{" "}
                  <p className="font-14" style={{ color: "#999999" }}>
                    {new Date().getDate() +
                      "/" +
                      (parseInt(new Date().getMonth()) + 1) +
                      "/" +
                      new Date().getFullYear()}
                  </p>
                </h4>
                <h4 className="font-22 ml-auto">${CartsDAta}.00</h4>
              </div>

              <div className="d-flex align-items-center">
                <p className="font-16 mb-2">Subtotal</p>
                <p className="font-16 ml-auto mb-2">${CartsDAta}.00</p>
              </div>

              <div className="d-flex align-items-center">
                <p className="font-16 mb-2">Tax</p>
                <p className="font-16 ml-auto mb-2">
                  ${parseFloat((CartsDAta * 18) / 100)}
                </p>
              </div>

              {/* <div className="d-flex align-items-center">
				<p className="font-16 mb-2">Shipping</p>
				<p className="font-16 ml-auto mb-2">$10.00</p>
			</div> */}

              <div className="d-flex align-items-center">
                <p className="font-16 mb-2 font-w-500">
                  Estimated delivery on{" "}
                  {newDate.getDate() +
                    "/" +
                    (parseInt(newDate.getMonth()) + 1) +
                    "/" +
                    newDate.getFullYear()}{" "}
                </p>
              </div>

              <div className="d-flex align-items-center">
                <p className="font-16 mb-2">Total </p>
                <p className="font-16 ml-auto mb-2">
                  ${CartsDAta + parseFloat((CartsDAta * 18) / 100)}.00
                </p>
              </div>

              <br />
              {/* <div className="list-inline-item checkbox2 m-auto">
										<input id="checkbox-3" className="checkbox-custom" name="checkbox-group" type="checkbox"/>
										<label htmlFor="checkbox-3" className="checkbox-custom-label font-14 font-w-500">Don’t display name publicly  in the supporter section</label>
									    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
