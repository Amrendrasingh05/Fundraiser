import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import dashboard from "../../assets/images/dashboard.png";
import $ from "jquery";
const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  $(window).scroll(function () {
    var top = $(this).scrollTop();

    if (top > 500) {
      $(".gotoTop").fadeIn(300);
    } else {
      $(".gotoTop").fadeOut(300);
    }
  });

  $("body").on("click", ".gotoTop", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  const openSlider = () => {
    setIsopen(true);
  };

  const CloseSlider = () => {
    setIsopen(false);
  };

  return (
    <>
      <ul className="top_socials">
        <li>
          <a href="/">
            <i className="ti ti-facebook"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="ti ti-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="ti ti-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="ti ti-linkedin"></i>
          </a>
        </li>
      </ul>

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

        <div
          className="d-flex align-items-center"
          style={{ marginTop: "65px", marginBottom: "35px" }}
        >
          <a href="/login" className="btn btn-dark w-50">
            Login
          </a>
          <a href="/login" className="btn btn-border w-50 ml-3">
            Sign up
          </a>
        </div>

        <br></br>

        <ul className="menu">
          <li>
            <a
              href="/virtual-fundraising"
              className="d-flex align-items-center"
            >
              <span className="mr-2">
                <img src={dashboard} alt="" />
              </span>
              Virtual Fundraising
            </a>
          </li>
          <li>
            <a href="/about-us" className="d-flex align-items-center">
              <span className="mr-2">
                <img src={dashboard} alt="" />
              </span>
              About Us
            </a>
          </li>
        </ul>
      </div>

      <header className="header transition">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <a href="/">
                <img src={logo} className="logo" />
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

            <div className="col-md-9 d-flex align-items-center">
              <nav className="ml-auto">
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="/virtual-fundraising" className="border-effect">
                      Virtual Fundraising
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/about-us" className="border-effect">
                      About Us
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/login" className="btn">
                      Login
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/login" className="btn btn-border">
                      Sign up
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
