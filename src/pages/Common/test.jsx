import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import dashboard from "../../assets/images/dashboard.png";
import setting from "../../assets/images/setting.png";
import logout from "../../assets/images/logout.png";
import * as actions from "../../store/actions/user";
import { useSelector, useDispatch } from "react-redux";

import {capitalizeFirstLetter} from '../../utils/word';

const Footer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    user,
  } = useSelector((state) => state.user);
  console.log(user);
  const [isOpen, setIsopen] = useState(false);
  const [isSetting, setisSetting] = useState(false);
  const [isNames, setisNames] = useState(false);

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

  const Logout = () => {
	
    dispatch(actions.logOut());
  };

  const getProfile = ()=>{
	  
	dispatch(actions.getProfileData());
  }
  
  useEffect(() => {
	  if(user==null){
		 
		getProfile()
	  }
    
  }, [user]);
 
 
  return (
    <>
      <div
        className="overlay"
        style={{ display: isOpen == false ? "none" : "block" }}
      ></div>
      <div className={isOpen == false ? "fixed_nav" : "fixed_nav open"}>
        <a
          className="cursor close d-flex align-items-center justify-content-center rounded-circle"
          href={null}
          onClick={CloseSlider}
        >
          <i className="ti ti-close"></i>
        </a>

        <span className="rounded-circle d-flex align-items-center justify-content-center after_login_circle">
          <i className="ti ti-user"></i>
        </span>

        <br></br>

        <h3 className="font-w-400">{user!=null?capitalizeFirstLetter(user[0].firstName):""} {user!=null?capitalizeFirstLetter(user[0].lastName):""}</h3>
        <br></br>

        <ul className="menu">
          <li>
            <Link to="/event" className="d-flex align-items-center">
              <span className="mr-2">
                <img alt="" src={dashboard} />
              </span>{" "}
              Organizer Dashboard
            </Link>
          </li>
          <li>
            <a
              href={null}
              className="d-flex align-items-center cursor"
              onClick={openSetting}
            >
              <span className="mr-2">
                <img alt="" src={setting} />
              </span>{" "}
              Settings
            </a>

            <div
              className={
                isSetting == false
                  ? "setting transition drop"
                  : "setting transition drop open"
              }
            >
              <a
                className="cursor d-flex align-items-center justify-content-center rounded-circle back"
                href={null}
              >
                <i className="ti ti-arrow-left" onClick={CloseSetting}></i>
              </a>
              <h3 className="font-w-400">Settings</h3>
              <br></br>

              <div className="info mb-4">
                <div className="d-flex mb-2">
                  <span className="font-18" style={{ color: "#979797" }}>
                    First Name
                  </span>
                  <a
                    className="cursor link ml-auto font-16 border-effect edit_fName_Lname"
                    href={null}
                    onClick={openNames}
                  >
                    Edit
                  </a>
                </div>

                <span className="font-18">{user!=null?capitalizeFirstLetter(user[0].firstName):""} </span>
              </div>

              <div className="info mb-4">
                <div className="d-flex mb-2">
                  <span className="font-18" style={{ color: "#979797" }}>
                    Last Name
                  </span>
                </div>

                <span className="font-18">{user!=null?capitalizeFirstLetter(user[0].lastName):""}</span>
              </div>

              <div className="info mb-4">
                <div className="d-flex mb-2">
                  <span className="font-18" style={{ color: "#979797" }}>
                    Email
                  </span>
                  <a
                    className="cursor link ml-auto font-16 border-effect"
                    href={null}
                  >
                    Change
                  </a>
                </div>

                <span className="font-18"> {user!=null?user[0].email:""}</span>
              </div>

              <div className="info mb-4">
                <div className="d-flex mb-2">
                  <span className="font-18" style={{ color: "#979797" }}>
                    Phone
                  </span>
                  <a
                    className="cursor link ml-auto font-16 border-effect"
                    href={null}
                  >
                    Change
                  </a>
                </div>

                <span className="font-18"> {user!=null?user[0].mobile:""}</span>
              </div>
            </div>
          </li>
          <li onClick={Logout}>
            <a href={null} className="d-flex align-items-center ">
              <span className="mr-2">
                <img alt="" src={logout} />
              </span>{" "}
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
            className="cursor d-flex align-items-center justify-content-center rounded-circle back"
            href={null}
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
                className="form-control input"
                placeholder="Fisrt Name"
				defaultValue={user!=null?user[0].firstName:""}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control input"
                placeholder="Last Name"
				defaultValue={user!=null?user[0].lastName:""}
              />
            </div>

            <br></br>
            <br></br>

            <button type="button" className="btn btn-y btn-lg w-100">
              Save Settings
            </button>
          </form>
        </div>
      </div>

      <header className="header transition">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div className="col-md-9 d-flex align-items-center">
              <div className="d-flex align-items-center ml-auto after_login_menu">
                <span className="font-16">Hello ,{user!=null?capitalizeFirstLetter(user[0].firstName):""} {user!=null?capitalizeFirstLetter(user[0].lastName):""}</span>
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
