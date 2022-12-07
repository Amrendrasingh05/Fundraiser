import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import dashboard from "../../assets/images/dashboard.png";
import setting from "../../assets/images/setting.png";
import logout from "../../assets/images/logout.png";
import * as actions from "../../store/actions/user";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/word";

import "../../App.css";
const Footer = ({ history }) => {
  const dispatch = useDispatch();
  const { user,loading } = useSelector((state) => state.user);
  console.log(user);
  const [isOpen, setIsopen] = useState(false);
  const [isSetting, setisSetting] = useState(false);
  const [isNames, setisNames] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isNumber, setisNumber] = useState(false);
  const [FirstName, setFirstName] = useState(
    user != null ? user[0].firstName : ""
  );
  const [FirstNameError, setFirstNameError] = useState("");

  const [LastName, setLastName] = useState(
    user != null ? user[0].lastName : ""
  );
  const [LastNameError, setLastNameError] = useState("");

  const openSlider = () => {
    setIsopen(true);
  };

  const CloseSlider = () => {
    setIsopen(false);
    setisSetting(false);
    setisNames(false);
  };

  const openSetting = () => {
    setisSetting(true);
  };

  const CloseSetting = () => {
    setisSetting(false);
  };

  const openNames = () => {
    setisNames(true);
  };

  const closeNames = () => {
    setisNames(false);
  };

  const openEmail = () => {
    setisEmail(true);
  };

  const closeEmail = () => {
    setisEmail(false);
  };

  const openNumber = () => {
    setisNumber(true);
  };

  const closeNumber = () => {
    setisNumber(false);
  };

  const Logout = () => {
    dispatch(actions.logOut());
  };

  const getProfile = () => {
    dispatch(actions.getProfileData());
  };

  const UpdateNames = (event) => {
    console.log("asdasd");
    event.preventDefault();
    if (FirstName == "") {
      setFirstNameError("First Name Is Required");
    } else if (LastName == "") {
      setLastNameError("Last Name Is Required");
    } else {
      dispatch(
        actions.updateUserData({
          firstName: FirstName,
          lastName: LastName,
        })
      );
    }
  };

  useEffect(() => {
    if (user == null) {
      getProfile();
    }
  }, [user]);

  return (
    <>
      <ToastContainer />
      <div
        className="overlay"
        style={{ display: isOpen == false ? "none" : "block" }}
      ></div>

      <div className={isOpen == false ? "fixed_nav" : "fixed_nav open"}>
        <a
          href={null}
          className="cursor close d-flex align-items-center justify-content-center rounded-circle"
          onClick={CloseSlider}
        >
          <i className="ti ti-close"></i>
        </a>

        <div className="d-flex w-100 user_Des">
          <span className="rounded-circle d-flex align-items-center justify-content-center after_login_circle">
            <i className="ti ti-user"></i>
          </span>

          <br className="res-hide"></br>

          <h3 className="font-w-400">Full Name</h3>
        </div>

        <br></br>

        <ul className="menu">
          <li>
            <a href="/event" className="d-flex align-items-center">
              <span className="mr-2">
                <img src={dashboard} alt="" />
              </span>
              Organizer Dashboard
            </a>
          </li>
          <li>
            <a
              className="d-flex align-items-center cursor"
              onClick={openSetting}
            >
              <span className="mr-2">
                <img src={setting} alt="" />
              </span>
              Settings
            </a>

            <div
              className={
                isSetting == false
                  ? "setting transition drop"
                  : "setting transition drop open"
              }
            >
              {" "}
              <a
                className="cursor d-flex align-items-center justify-content-center rounded-circle back"
                onClick={CloseSetting}
              >
                <i className="ti ti-arrow-left"></i>
              </a>
              <h3 className="font-w-400">Settings</h3>
              <br></br>
              <div className="info mb-4">
                <div className="d-flex mb-2">
                  <span className="font-18" style={{ color: "#979797" }}>
                    First Name
                  </span>
                  <a
                    href={null}
                    className="cursor link ml-auto font-16 border-effect edit_fName_Lname"
                    onClick={openNames}
                  >
                    Edit
                  </a>
                </div>

                <span className="font-18">
                  {user != null ? capitalizeFirstLetter(user[0].firstName) : ""}{" "}
                </span>
              </div>
              <div className="info mb-4">
                <div className="d-flex mb-2">
                  <span className="font-18" style={{ color: "#979797" }}>
                    Last Name
                  </span>
                </div>

                <span className="font-18">
                  {user != null ? capitalizeFirstLetter(user[0].lastName) : ""}{" "}
                </span>
              </div>
              <div className="info mb-4">
                <div className="d-flex mb-2">
                  <span className="font-18" style={{ color: "#979797" }}>
                    Email
                  </span>
                  <a
                    href={null}
                    className="cursor link ml-auto font-16 border-effect"
                    onClick={openEmail}
                  >
                    Change
                  </a>
                </div>

                <span className="font-18">
                  {" "}
                  {user != null ? user[0].email : ""}
                </span>
              </div>
              <div className="info mb-4">
                <div className="d-flex mb-2">
                  <span className="font-18" style={{ color: "#979797" }}>
                    Phone
                  </span>
                  <a
                    href={null}
                    className="cursor link ml-auto font-16 border-effect"
                    onClick={openNumber}
                  >
                    Change
                  </a>
                </div>

                <span className="font-18">
                  {" "}
                  {user != null ? user[0].mobile : ""}
                </span>
              </div>
            </div>
          </li>
          <li onClick={Logout}>
            <a href="#" className="d-flex align-items-center">
              <span className="mr-2">
                <img src={logout} alt="" />
              </span>
              Log Out
            </a>
          </li>
        </ul>

        <div
          className={
            isNames == false
              ? "setting transition drop edit_fname_lname"
              : "setting transition drop edit_fname_lname open"
          }
        >
          <a
            href={null}
            className="cursor d-flex align-items-center justify-content-center rounded-circle back"
            onClick={closeNames}
          >
            <i className="ti ti-arrow-left"></i>
          </a>
          <h3 className="font-w-400">Edit</h3>

          <p className="font-14 font-w-500" style={{ color: "#0367F7" }}>
            Your profile has been updated
          </p>

          <br></br>

          <form className="form3">
            <div className="form-group">
              <input
                type="text"
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
                defaultValue={user != null ? user[0].firstName : ""}
              />
              <div className="error_msg">
                {FirstNameError != "" ? FirstNameError : ""}
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
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
                defaultValue={user != null ? user[0].lastName : ""}
              />
              <div className="error_msg">
                {LastNameError != "" ? LastNameError : ""}
              </div>
            </div>

            <br></br>
            <br></br>

            <button
              type="button"
              className="btn btn-y btn-lg w-100"
              onClick={UpdateNames}
              disabled={loading==true?true:false}
            >
              {loading == true ? "Please Wait" : "Update Name"}
            </button>
          </form>
        </div>

        {/* for email */}
        <div
          className={
            isEmail == false
              ? "setting transition drop edit_fname_lname"
              : "setting transition drop edit_fname_lname open"
          }
        >
          <a
            href={null}
            className="cursor d-flex align-items-center justify-content-center rounded-circle back"
            onClick={closeEmail}
          >
            <i className="ti ti-arrow-left"></i>
          </a>
          <h3 className="font-w-400">Edit</h3>

          <p className="font-14 font-w-500" style={{ color: "#0367F7" }}>
            Your profile has been updated
          </p>

          <br></br>

          <form className="form3">
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                placeholder="Email Address"
                defaultValue={user != null ? user[0].email : ""}
              />
            </div>

            <br></br>
            <br></br>

            <button type="button" className="btn btn-y btn-lg w-100">
              Save Email Address
            </button>
          </form>
        </div>

        {/* for phone number */}
        <div
          className={
            isNumber == false
              ? "setting transition drop edit_fname_lname"
              : "setting transition drop edit_fname_lname open"
          }
        >
          <a
            href={null}
            className="cursor d-flex align-items-center justify-content-center rounded-circle back"
            onClick={closeNumber}
          >
            <i className="ti ti-arrow-left"></i>
          </a>
          <h3 className="font-w-400">Edit</h3>

          <p className="font-14 font-w-500" style={{ color: "#0367F7" }}>
            Your profile has been updated
          </p>

          <br></br>

          <form className="form3">
            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                placeholder="Mobile Number"
                defaultValue={user != null ? user[0].mobile : ""}
              />
            </div>

            <br></br>
            <br></br>

            <button type="button" className="btn btn-y btn-lg w-100">
              Save Mobile Number
            </button>
          </form>
        </div>
      </div>

      <header
        className="header transition res-show"
        style={{ display: "none" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <a href="/">
                <img src={logo} alt="" className="logo" />
              </a>
              <div
                style={{ display: "none" }}
                className="nav-icon1 res-show open_nav"
                onClick={openSlider}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header transition res-hide">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>

            <div className="col-md-9 d-flex align-items-center">
              <div className="d-flex align-items-center ml-auto after_login_menu">
                <span className="font-16">
                  Hello ,
                  {user != null ? capitalizeFirstLetter(user[0].firstName) : ""}{" "}
                  {user != null ? capitalizeFirstLetter(user[0].lastName) : ""}
                </span>
                <a
                style={{"color":"black"}}
                href="/event/checkout"
                  className="rounded-circle d-flex align-items-center justify-content-center cursor ml-3 after_login_circle open_nav"
                 
                >
                  <i className="ti ti-shopping-cart"></i>
                </a>
                <span
                  className="rounded-circle d-flex align-items-center justify-content-center cursor ml-3 after_login_circle open_nav"
                  onClick={openSlider}
                >
                  <i className="ti ti-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Footer;
