import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/events";

import Header from "../Common/header.component";
import Footer from "../Common/footer.component";

import home_banner_shape from "../../assets/images/home_banner_shape.svg";
import laptop_screen from "../../assets/images/laptop_screen.png";
import fund_icon1 from "../../assets/images/fund_icon1.png";
import fund_icon2 from "../../assets/images/fund_icon2.png";
import fund_icon3 from "../../assets/images/fund_icon3.png";
import fund_icon4 from "../../assets/images/fund_icon4.png";
import laptop_screen2 from "../../assets/images/laptop_screen2.png";
import about_row7 from "../../assets/images/about_row7.jpg";
import image_big from "../../assets/images/image_big.jpg";
import store1 from "../../assets/images/store1.jpg";

import Two from "../../assets/images/product/2.jpg";
import Three from "../../assets/images/product/3.jpg";
import Four from "../../assets/images/product/4.jpg";
import Five from "../../assets/images/product/5.jpg";
import Six from "../../assets/images/product/12.jpg";
import Seven from "../../assets/images/product/13.jpg";
import Eight from "../../assets/images/product/14.jpg";
import Nine from "../../assets/images/product/16.jpg";
import Carousel from "react-bootstrap/Carousel";

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const { funds, loading } = useSelector((state) => state.event);

  const getFunds = () => {
    dispatch(actions.getFundsRequest({}));
  };

  useEffect(() => {
    getFunds();
  }, []);

  console.log(funds);

  return (
    <>
      <Header />

      <section className="home_banner mover virtual_fundraising_banner mover">
        <div className="container-fluid">
          <img src={home_banner_shape} className="right_shape" alt="" />
          <div className="left_blur_shape"></div>
        </div>

        <div
          className="d-flex align-items-center"
          style={{ position: "relative", zIndex: "100" }}
        >
          <div className="left_box wow fadeInLeft res-full">
            <span className="rounded-circle circle2 ele"></span>
            <div className="cardBox">
              <h2 className="hd text-y text-uppercase font-w-700">
                Virtual Fundraising
              </h2>
              <p className="font-16 mt-3">
                CLICK HERE to register your group for your online fundraising
                campaign. Upon completion, a unique sales site will be created
                for each member of your group. You can track progress and sales
                data via the live leaderboard. Most importantly, your
                organization will receive 50% of every dollar your supporters
                spend on our premium hand-rolled cigars.
              </p>
              <br className="res-hide"></br>
              <a href={"/login"} className="btn btn-dark btn-lg font-16">
                Get Started
              </a>{" "}
            </div>
          </div>

          <div className="ml-auto wow fadeInRight res-hide">
            <img src={laptop_screen} className="ele" alt="" />
          </div>
        </div>
      </section>

      <section className="bg_light position-relative">
        <div className="container">
          <h2 className="text-center hd font-w-500">
            Fundraise without the headaches of <br></br>
            traditional <span className="line_border">fundraisers</span>
          </h2>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row res_scroll">
            <div className="col d-flex mover">
              <span className="icon">
                <img src={fund_icon1} className="ele" alt="" />
              </span>
              <div className="info ml-3">
                <h4 className="font-18 mb-0 font-w-600">100% Virtual</h4>
                <p className="font-14 mb-0">
                  No paperwork to fill out, no cash to collect, and no product
                  to distribute. Fundraise from anywhere.
                </p>
              </div>
            </div>

            <div className="col d-flex mover">
              <span className="icon">
                <img src={fund_icon2} className="ele" alt="" />
              </span>
              <div className="info ml-3">
                <h4 className="font-18 mb-0 font-w-600">Exceed Your Goal</h4>
                <p className="font-14 mb-0">
                  You keep 50% of what you sell. No fees and no minimums to
                  meet.
                </p>
              </div>
            </div>

            <div className="col d-flex mover">
              <span className="icon">
                <img src={fund_icon3} className="ele" alt="" />
              </span>
              <div className="info ml-3">
                <h4 className="font-18 mb-0 font-w-600">Get Paid Quickly</h4>
                <p className="font-14 mb-0">
                  Fundraising Events are four days long. So you get your payout
                  faster.
                </p>
              </div>
            </div>

            <div className="col d-flex mover">
              <span className="icon">
                <img src={fund_icon4} className="ele" alt="" />
              </span>
              <div className="info ml-3">
                <h4 className="font-18 mb-0 font-w-600">No Product Handle</h4>
                <p className="font-14 mb-0">
                  We pop, pack and ship all orders right to the supporter,
                  anywhere in the USA.
                </p>
              </div>
            </div>
          </div>

          <br></br>

          <div className="d-flex">
            <a href={null} className="btn btn-org btn-lg m-auto">
              How It Works
            </a>
          </div>
        </div>
      </section>

      <section className="about_row4 pb-0 pt-2 mover res_bg_none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 position-relative">
              <span
                className="rounded-circle circle2 ele"
                style={{ top: "-60px" }}
              ></span>
              <div className="box p-5">
                <h2 className="hd font-w-600 font-30">
                  About our <span className="line_border"> Product</span>
                </h2>
                <p className="font-16 mb-0 text-justify mt-4">
                  We have partnered with Four Brothers Cigars, a known quality
                  cigar brand that provides premium hand-rolled Nicaraguan
                  cigars. Our exclusive partnership with this renowned brand
                  enables us to provide these high quality cigars at a
                  competitive price to your organization’s supporters. Four
                  Brothers Cigars is known for rich and balanced flavor profiles
                  throughout their line of cigars which includes mild to
                  full-bodied cigars in an array of sizes as well as specialty
                  cigars such as barber pole and infused blends. With earthy,
                  nutty, spicy, and floral flavor profiles, one puff of Four
                  Brothers Cigars will distinguish their quality among even the
                  most exquisite cigar palette. <br></br>
                </p>
                <br></br>
                <a href={null} className="btn btn-dark btn-lg">
                  EXPLORE A POP UP STORE
                </a>{" "}
              </div>
            </div>

            <div
              className="col-md-6 wow fadeInRight animated"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <div className="img ele">
                <img src={about_row7} className="w-100 transition" alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="store">
        <div className="container-fluid">
          <h2 className="hd text-center">
            <strong>
              Live <span className="line_border">Pop-Up Stores</span>
            </strong>
          </h2>

          <br></br>
          <br></br>

          <Carousel className="owl-carousel">
            {funds.map((e, i) => {
              return (
                <Carousel.Item className="box" key={i}>
                  <a href={"/event/funds/" + e._id}>
                    <div className="img">
                      <img src={store1} className="w-100 transition" />
                    </div>

                    <div className="p-2 mt-2">
                      <div className="d-flex align-items-center mb-2">
                        <span className="d-flex align-items-center font-16 font-w-500">
                          <i className="ti ti-time mr-2"></i>
                          {e.EndDate
                            ? new Date(e.EndDate).getDate() +
                              "-" +
                              new Date(e.EndDate).getMonth() +
                              "-" +
                              new Date(e.EndDate).getFullYear()
                            : ""}
                        </span>
                        <span className="d-flex align-items-center ml-auto font-16 font-w-650">
                          <i className="ti ti-user mr-2"></i>{" "}
                          {e.CreatedBy
                            ? e.CreatedBy.firstName +" "+ e.CreatedBy.lastName
                            : ""}
                        </span>
                      </div>

                      <h3
                        className="font-18 mb-0 mt-0"
                        style={{ color: "#000" }}
                      >
                        Team Total :{e.RaisedAmount} $
                      </h3>
                    </div>
                  </a>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </section>

      <div className="about_row4_row2 pb-5 wow fadeInUp">
        <div className="container-fluid">
          <div className="img_big position-relative">
            <img src={image_big} className="w-100 transition" alt="" />
            <a href={null} style={{ width: "250px", textAlign: "center" }}>
              How It Works
            </a>
          </div>

          <br></br>
        </div>
      </div>

      <br></br>
      <br></br>

      <ul className="list list-inline text-center">
        <li className="list-inline-item">
          <a
            href={null}
            className="btn btn-dark btn-lg text-white"
            style={{ borderRadius: "50px" }}
          >
            ORGANIZING
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href={null}
            className="btn btn-org btn-lg text-white"
            style={{ borderRadius: "50px" }}
          >
            PARTICIPATING
          </a>
        </li>
      </ul>

      <section className="event_section mover">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 left wow fadeInLeft res-hide">
              <span className="circle"></span>
              <img src={laptop_screen2} className="ele" alt="" />{" "}
            </div>

            <div className="col-md-6 pl-5">
              <h2 className="hd text-uppercase">
                <strong>Organizing an Event</strong>
              </h2>
              <br></br>

              <div className="d-flex mb-3">
                <i
                  className="fa fa-check-circle mt-0 font-24 text-y"
                  aria-hidden="true"
                ></i>
                <div className="info ml-3">
                  <h3 className="font-22 mt-0 font-w-600">
                    1. DOWNLOAD THE APP
                  </h3>
                  <p className="font-14">
                    The Double Good app is available on the App Store or Google
                    Play Store.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <i
                  className="fa fa-check-circle mt-0 font-24 text-y"
                  aria-hidden="true"
                ></i>
                <div className="info ml-3">
                  <h3 className="font-22 mt-0 font-w-600">
                    2. SCHEDULE YOUR EVENT
                  </h3>
                  <p className="font-14">
                    The Double Good app is available on the App Store or Google
                    Play Store.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <i
                  className="fa fa-check-circle mt-0 font-24 text-y"
                  aria-hidden="true"
                ></i>
                <div className="info ml-3">
                  <h3 className="font-22 mt-0 font-w-600">
                    3. SHARE THE EVENT CODE
                  </h3>
                  <p className="font-14">
                    You’ll get a 6-letter Event Code to distribute to your team
                    so they can join and participate in your fundraising Event.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-3">
                <i
                  className="fa fa-check-circle mt-0 font-24 text-y"
                  aria-hidden="true"
                ></i>
                <div className="info ml-3">
                  <h3 className="font-22 mt-0 font-w-600">
                    4. SET UP YOUR PAYOUT
                  </h3>
                  <p className="font-14">
                    <p className="font-14">
                      If you are the Event organizer, you can set up how you
                      would like to receive the funds. <br></br>
                      <br></br>
                      Funds typically arrive within two weeks from the date your
                      Event ends, and are distributed via direct deposit or
                      check
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="looks pt-0 pb-2">
        <div className="container-fluid">
          <h2 className="hd text-center">
            <strong>
              <span className="line_border">Taste as Good</span> as it Looks
            </strong>
          </h2>

          <br></br>
          <br className="res-hide"></br>

          <div className="owl-carousel owl-theme">
            <div className="box">
              <div className="img">
                <img src={Three} className="w-100 transition" alt="" />{" "}
              </div>

              <div className="p-3" style={{ background: "#F4F5F7" }}>
                <h3 className="font-22">Lorem Ipsum</h3>
                <p className="font-16 mb-0">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusm od tempor
                </p>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={Four} className="w-100 transition" alt="" />{" "}
              </div>

              <div className="p-3" style={{ background: "#F4F5F7" }}>
                <h3 className="font-22">Lorem Ipsum</h3>
                <p className="font-16 mb-0">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusm od tempor
                </p>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={Five} className="w-100 transition" alt="" />{" "}
              </div>

              <div className="p-3" style={{ background: "#F4F5F7" }}>
                <h3 className="font-22">Lorem Ipsum</h3>
                <p className="font-16 mb-0">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusm od tempor
                </p>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={Six} className="w-100 transition" alt="" />{" "}
              </div>

              <div className="p-3" style={{ background: "#F4F5F7" }}>
                <h3 className="font-22">Lorem Ipsum</h3>
                <p className="font-16 mb-0">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusm od tempor
                </p>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={Seven} className="w-100 transition" alt="" />{" "}
              </div>

              <div className="p-3" style={{ background: "#F4F5F7" }}>
                <h3 className="font-22">Lorem Ipsum</h3>
                <p className="font-16 mb-0">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusm od tempor
                </p>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={Eight} className="w-100 transition" alt="" />{" "}
              </div>

              <div className="p-3" style={{ background: "#F4F5F7" }}>
                <h3 className="font-22">Lorem Ipsum</h3>
                <p className="font-16 mb-0">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusm od tempor
                </p>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={Nine} className="w-100 transition" alt="" />{" "}
              </div>

              <div className="p-3" style={{ background: "#F4F5F7" }}>
                <h3 className="font-22">Lorem Ipsum</h3>
                <p className="font-16 mb-0">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusm od tempor
                </p>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={Two} className="w-100 transition" alt="" />{" "}
              </div>

              <div className="p-3" style={{ background: "#F4F5F7" }}>
                <h3 className="font-22">Lorem Ipsum</h3>
                <p className="font-16 mb-0">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed
                  do eiusm od tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
