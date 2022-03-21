import React, { useState, useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/images/logo.png";
import { errorToast } from "../../utils/toast/index";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/user";
import { Link } from "react-router-dom";

const Home = ({ history }) => {
  let Toekn = localStorage.getItem('fr_token');
  
 
  const [Mobile, setMobile] = useState("");
  const [MobileError, setMobileError] = useState("");

  const [Otp, setOtp] = useState("");
  const [OtpError, setOtpError] = useState("");

  const [Email, setEmail] = useState("");
  const [emailError, setemailError] = useState("");

  const [FirstName, setFirstName] = useState("");
  const [FirstNameError, setFirstNameError] = useState("");

  const [LastName, setLastName] = useState("");
  const [LastNameError, setLastNameError] = useState("");
  const [isOpen, setisOpen] = useState(false);

  let HideClass = {
    display: "none",
  };
  let blockClass = {
    display: "block",
  };
  const {
    loading,
    success,
    user,
    isphone,
    ismobotp,
    isEmail,
    ismailOtp,
    IsName,
  } = useSelector((state) => state.user);

  if(user!=undefined && Toekn!="" && Toekn !=null ){
    if(user.details.is_full_register==true){
window.location.href = "/event";
    }
    
  }
  
  console.log(user);
  const dispatch = useDispatch();

  const OpenCode = ()=>{
    isOpen==false?setisOpen(true):setisOpen(false);
  }
  const SendOtp = (event) => {
    event.preventDefault();
    if (Mobile == "") {
      errorToast("Mobile Number Is Required");
    } else {
      dispatch(
        actions.signupRequest({
          Mobile: Mobile,
          countryCode: "+1",
          Type: "User",
        })
      );
    }
  };


  const ReSendOtp = (event) => {
    event.preventDefault();
    if (Mobile == "") {
      errorToast("Mobile Number Is Required");
    } else {
      dispatch(
        actions.resendRequest({
          Mobile: Mobile,
          countryCode: "+1",
          Type: "User",
        })
      );
    }
  };

  

  const VerifyOtp = (event) => {
    event.preventDefault();
    if (Otp == "") {
      errorToast("Otp Is Required");
    } else {
      dispatch(
        actions.sendVerifyOtpRequest({
          Mobile: Mobile,
          otp: Otp,
          history
        })
      );
    }
  };

  const SaveEmail = (event) => {
    event.preventDefault();

    if (Email == "") {
      errorToast("Email Is Required");
    } else {
      dispatch(
        actions.SaveEmail({
          email: Email,
        })
      );
    }
  };

  const resetEmail = () => {
    dispatch(actions.ResetEmail());
  };

  const confirmEmail = () => {
    dispatch(actions.confirmEmail());
  };

  const resetMobile = () => {
    dispatch(actions.resetMobile());
  };

  const saveName = (event) => {
    event.preventDefault();
    if (FirstName == "") {
      errorToast("First Name Is Required");
    } else if (LastName=='') {
      errorToast("Last Name Is Required");
    } else {
      dispatch(
        actions.saveUserData({
          "firstName":FirstName,
          "lastName":LastName
      })
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="login_wrap d-flex align-items-center justify-content-center flex-column">
      <a href="/" > <img src={logo} className="login_logo" alt="" /> </a>
        <div
          className="card login_box"
          style={isphone == false ? HideClass : blockClass}
        >
          <h3 className="hd text-center font-w-600 mb-0">
            Enter Your Mobile Number
          </h3>
          <p className="font-16 text-center mt-0">
            We’ll text a code to verify your phone.
          </p>

          <form className="">
            <div className="input_back">
              <span className="input input1"></span>
              <span className="input input2"></span>
              <input
                className={`input form-control  ${
                  MobileError != "" ? "error" : ""
                }`}
                placeholder="Enter Mobile Number"
                onChange={(e) => {
                  let regex = /^\d*[.]?\d*$/;
                  if (!e.target.value) {
                    setMobileError("Mobile Number Is Required");
                    setMobile("");
                  } else if (e.target.value && e.target.value.length < 10) {
                    setMobileError("Mobile Number Is Too Short");
                    setMobile("");
                  } else if (!regex.test(e.target.value)) {
                    setMobileError("Only Number Allowed");
                    setMobile("");
                  } else {
                    setMobileError("");
                    setMobile(e.target.value);
                  }
                }}
              />
              <div className="error_msg">
                {MobileError != "" ? MobileError : ""}
              </div>
            </div>

            <br></br>

            <div className="d-flex">
              <button
                type="button"
                className="btn btn-org btn-lg m-auto"
                onClick={SendOtp}
                disabled={loading ? true : false}
              >
                {loading == false ? "Send the Code" : "Please Wait"}
              </button>
            </div>
            <br></br>

            <p className="text-center font-14 mb-0">
              Message and data rates may apply.
            </p>
          </form>
        </div>

        <div
          className="card login_box"
          style={ismobotp == false ? HideClass : blockClass}
        >
          <h3 className="hd text-center font-w-600 mb-0">
            Enter the 4 digit code
          </h3>
          <p className="font-16 text-center mt-0">
            We sent the code to {Mobile}.
          </p>

          <form>
            <div className="input_back">
              <span className="input input1"></span>
              <span className="input input2"></span>
              <input
                className={`input form-control  ${
                  OtpError != "" ? "error" : ""
                }`}
                onChange={(e) => {
                  let regex = /^\d*[.]?\d*$/;
                  if (!e.target.value) {
                    setOtpError("Otp Is Required");
                    setOtp("");
                  } else if (e.target.value && e.target.value.length < 4) {
                    setOtpError("Otp Is Too Short");
                    setOtp("");
                  } else if (e.target.value && e.target.value.length > 4) {
                    setOtpError("Otp Is Too long");
                    setOtp("");
                  } else if (!regex.test(e.target.value)) {
                    setOtpError("Only Number Allowed");
                    setOtp("");
                  } else {
                    setOtpError("");
                    setOtp(e.target.value);
                  }
                }}
                placeholder="4 digit code"
              />
              <div className="error_msg">{OtpError != "" ? OtpError : ""}</div>
            </div>

            <br></br>

            <div className="d-flex">
              <button
                type="button"
                className="btn btn-org btn-lg m-auto"
                onClick={VerifyOtp}
              >
                {loading == false ? "Continue" : "Please Wait"}
              </button>
            </div>
            <br></br>

            <div  className={isOpen==false?"dropdown d-flex":"dropdown d-flex show"}>
              <p
                className="text-center font-14 mb-0cdropdown-toggle cursor m-auto"
                data-toggle="dropdown"
                onClick={OpenCode}
              >
                I didn't receive a code
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </p>

              <div className={isOpen==false?"dropdown-menu":"dropdown-menu show"} style={isOpen==false?{}:{"position": "absolute","transform": "translate3d(108px, 25px, 0px)","top": "0px" ,"left": "0px", "willChange": "transform"}}>
                <a href={null} className="cursor dropdown-item" onClick={ReSendOtp}>
                  Send me a new code
                </a>
                <a href={null} className="cursor dropdown-item" onClick={resetMobile}>
                  Enter a new mobile number
                </a>
                <a href={null} className="cursor dropdown-item">
                  Contact Cigar For Charity Support
                </a>
              </div>
            </div>
          </form>
        </div>

        <div
          className="card login_box"
          style={isEmail == false ? HideClass : blockClass}
        >
          <h3 className="hd text-center font-w-600 mb-0">
            Enter your email address
          </h3>

          <form>
            <div className="input_back">
              <span className="input input1"></span>
              <span className="input input2"></span>
              <input
                className={`input form-control  ${
                  emailError != "" ? "error" : ""
                }`}
                onChange={(e) => {
                  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if (!e.target.value) {
                    setemailError("Email Is Required");
                    setEmail("");
                  }
                  if (!regex.test(e.target.value)) {
                    setemailError("Enter an email");
                    setEmail("");
                  } else {
                    setemailError("");
                    setEmail(e.target.value);
                  }
                }}
                placeholder="Enter Email Address"
              />
              <div className="error_msg">
                {emailError != "" ? emailError : ""}
              </div>
            </div>
            <br></br>

            <div className="d-flex">
              <button
                type="button"
                className="btn btn-org btn-lg m-auto"
                onClick={SaveEmail}
              >
                {loading == false ? "Continue" : "Please Wait"}
              </button>
            </div>
          </form>
        </div>

        <div
          className="card login_box"
          style={ismailOtp == false ? HideClass : blockClass}
        >
          <h3 className="hd text-center font-w-600 mb-0">Confirm your email</h3>
          <p className="font-16 text-center mt-0">You entered {Email}.</p>

          <form>
            <div className="input_back">
              <span className="input input1"></span>
              <span className="input input2"></span>
              <button
                type="button"
                className="btn btn-org btn-lg m-auto btn_"
                onClick={confirmEmail}
              >
                Continue
              </button>
              <a href={null} onClick={resetEmail} className="text-y edit_email">
                Edit Email
              </a>
            </div>

            <br></br>

            <p className="font-14 text-center">
              By creating an account, you agree to Cigar For Charity
              <a href="#" className="text-y border-effect">
                Terms and Conditions
              </a>
              and
              <a href="#" className="text-y border-effect">
                Privacy Policy.
              </a>
            </p>
          </form>
        </div>

        <div
          className="card login_box"
          style={IsName == false ? HideClass : blockClass}
        >
          <h3 className="hd text-center font-w-600 mb-0">Welcome</h3>
          <p className="font-16 text-center mt-0">
            Let’s create your Cigar For Charity profile
          </p>

          <form>
            <div className="input_back sign_up">
              <span className="input input1"></span>
              <span className="input input2"></span>
              <div className="input_wrap">
                <div className="position-relative">
                  <input
                    className={`input form-control input_1  ${
                      FirstNameError != "" ? "error" : ""
                    }`}
                    placeholder="First Name"
                    onChange={(e) => {
                      if (!e.target.value) {
                        setFirstNameError("Mobile Number Is Required");
                        setFirstName("");
                      } else {
                        setFirstNameError("");
                        setFirstName(e.target.value);
                      }
                    }}
                  />
                  <div className="error_msg">
                    {FirstNameError != "" ? FirstNameError : ""}
                  </div>
                </div>

                <div className="position-relative">
                  <input
                    className={`input form-control input_1  ${
                      LastNameError != "" ? "error" : ""
                    }`}
                    placeholder="Last Name"
                    onChange={(e) => {
                      if (!e.target.value) {
                        setLastNameError("Mobile Number Is Required");
                        setLastName("");
                      } else {
                        setLastNameError("");
                        setLastName(e.target.value);
                      }
                    }}
                  />
                  <div className="error_msg">
                    {LastNameError != "" ? LastNameError : ""}
                  </div>
                </div>
              </div>
            </div>

            <br></br>

            <div className="d-flex">
              <button
                type="button"
                className="btn btn-org btn-lg m-auto"
                onClick={saveName}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
