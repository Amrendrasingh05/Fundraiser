import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <>
      <footer className="wow fadeIn">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col1">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
              <div className="clearfix"></div>
              <br></br>

              <br></br>

              <p className="d-flex align-items-center">
                <i className="ti ti-location-pin mr-2 font-22"></i> Location
              </p>
              <p className="d-flex align-items-center">
                <i className="fa fa-phone mr-2 font-22"></i> +123456789
              </p>
            </div>

            <div className="col-md-3 col2">
              <h3>Menu</h3>
              <ul className="list list-inline footer_links">
                <li className="list-inline-item w-100">
                  <a href="/" className="border-effect">
                    Products
                  </a>
                </li>
                <li className="list-inline-item w-100">
                  <a href="/terms-and-conditions" className="border-effect">
                    Terms & Policy
                  </a>
                </li>
                <li className="list-inline-item w-100">
                  <a href="/privacy-policy" className="border-effect">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col3">
              <h3>Account</h3>
              <ul className="list list-inline footer_links">
                <li className="list-inline-item w-100">
                  <a href="/" className="border-effect">
                    My Account
                  </a>
                </li>
                <li className="list-inline-item w-100">
                  <a href="/" className="border-effect">
                    Checkout
                  </a>
                </li>
                <li className="list-inline-item w-100">
                  <a href="/" className="border-effect">
                    My Cart
                  </a>
                </li>
                <li className="list-inline-item w-100">
                  <a href="/" className="border-effect">
                    My catalog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col4">
              <h3>Stay Connected</h3>
              <ul className="list list-inline footer_links">
                <li className="list-inline-item w-100">
                  <a href="/" className="border-effect">
                    Facebook
                  </a>
                </li>
                <li className="list-inline-item w-100">
                  <a href="/" className="border-effect">
                    Instagram
                  </a>
                </li>
                <li className="list-inline-item w-100">
                  <a href="/" className="border-effect">
                    Linkedin
                  </a>
                </li>
                <li className="list-inline-item w-100">
                  <a href="/" className="border-effect">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <div className="container-fluid d-flex align-items-center">
          <p className="mb-0 font-16">© Company Name 2021. All rights reserved</p>
          <p className="mb-0 font-13 ml-auhref">
            Do not sell my personal information
          </p>
        </div>
      </div>
      <a className="cursor gotoTop"><i className="fa fa-angle-up" aria-hidden="true"></i></a>
    </>
  );
};

export default Footer;
