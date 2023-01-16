import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/events";

import logo from "../../assets/images/logo.png";
import img2 from "../../assets/images/img2.jpg";
import home_banner_shape from '../../assets/images/home_banner_shape.svg';

import { useParams } from "react-router-dom";

import SideBar from "../Common/sidebar.component";
import Footer from "../Common/footer.component";

import { IMAGE_URL } from "../../config/Api";

import arrowImg from './arrow.png'

const Home = ({ history }) => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const { prodocts } = useSelector((state) => state.product);
  const { event_id, loading,users } = useSelector((state) => state.event);


  const getEventss = () => {
    dispatch(actions.getEventDetailRequest({ id }));
  };


  const getEvents = () => {
    dispatch(actions.getProductRequest({
      history
    }));
  };

  const AddToCart = (element, product_id) => {
    dispatch(
      actions.addCartRequest({
        product_id: product_id,
        fundraiser_id:id
      })
    );
  }

  useEffect(() => {
    getEvents();

  }, []);

  useEffect(() => {
    getEventss();

  }, []);

  console.log('prodcuts', prodocts);
  console.log("darat", event_id);
  console.log('users',users);


  return (
    <>
      <SideBar />
      
      <section className="home_banner mover virtual_fundraising_banner mover career">
        <div className="container">
          <img
            src={home_banner_shape}
            className="right_shape"
          />
          <div className="left_blur_shape"></div>

          <br />

          <div className="form_wrap position-relative">
            <span className="rounded-circle rounded-circle-blur circle1"></span>
            <span
              className="rounded-circle rounded-circle-blur circle2"
              style={{ top: "5% !important" }}
            ></span>
            <p className="text-center font-18 font-w-500">
              This fundraiser ended on {event_id.length == 0 ? "" : event_id[0].EndDate}
            </p>
            <div className="inner_banner wow fadeInUp">
              <h1 className="hd text-center font-w-500">Md’s Fudraising </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 section4">
        <div className="container">
          <div className="row">
            <div className="col-md-8 pr-5 part2">
              <div className="pb-5" style={{ borderBottom: "1px solid #000" }}>
                <h4 className="font-26 mb-2">{event_id.length == 0 ? "" : event_id[0].TeamName}</h4>
                <div className="progress_ mt-4 mb-2"></div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <h4 className="font-20 font-w-600 m-0">${event_id.length == 0 ? "" : event_id[0].RaisedAmount} / $1,000</h4>
                  <h4 className="font-200 font-w-600  m-0">Store Closed</h4>
                </div>
              </div>

              <br />
              <br />

              <h3 className="font-26 font-w-600">Shop Ultra-Premium Cigar</h3>
              <p className="font-16 font-w-600 mt-3">
                50% of each purchase benefits this fundraiser. Minimum order
                amount is $18.
              </p>

              <br />

              <h4 className="font-18 d-flex align-items-center font-w-600">
                <span className="text-y">Shop Curated Collections</span>
                <a
                  href={null}
                  className="ml-5 border-effect"
                  style={{ color: "#000" }}
                >
                  Shop All Flavors
                </a>
              </h4>

              <br />
              {
                prodocts.map((e, i) => {
                  return (
                    <div className="box2 d-flex" key={i}>
                      <div className="info">
                        <h5 className="font-16 font-w-600">SET OF {e.Quantity}</h5>

                        <h2 className="font-28 font-w-600 mt-3"> {e.Name}</h2>
                        <p className="font-16 font-w-600">
                          {e.Description}
                        </p>

                        <h3 className="font-26 font-w-600"> ${e.Price}</h3>

                        <div className="d-flex mt-2">
                          <button
                            onClick={(elemets) => { AddToCart(elemets, e._id) }}
                            type="button"
                            className="btn btn-org btn-lg m-auto"
                            style={{ borderRadius: "10px !important" }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className="img">
                        <img src={IMAGE_URL + e.Image} className="w-100" />
                      </div>
                    </div>
                  )
                })
              }


              <br />
              <br />

              <div
                className="box2 d-flex p-2 pr-4 align-items-center"
                style={{ borderRadius: "0px" }}
              >
                <div className="info">
                  <h4 className="font-w-600">Make a Cigar Donation</h4>
                  <p className="font-22">

                    Send CF cigarn to essential workers 50% of the sale benefits
                    this fundraiser No shipping cost
                  </p>
                  <a
                    href="#"
                    className="link2 border-effect font-22 font-w-600"
                  >
                    How does this work?
                  </a>
                </div>

                <img src={logo} />
              </div>
            </div>

            <div className="col-md-4">
              <div className="position-sticky" style={{ top: "100px" }}>
                <img src={img2} className="w-100" />
                <div className="d-flex mt-2">
                  <button
                    type="button"
                    className="btn btn-org btn-lg m-auto"
                    style={{ borderRadius: "10px !important" }}
                  >
                    Fundraising Link
                  </button>
                </div>
              </div>

              <div className="justify-space mt-5">
                <h6>Event Leaderboard</h6>
                <img src={arrowImg} alt="" style={{cursor:"pointer"}}/>
              </div>
              {
                users.map((e,i)=>{
                  return (
<div className="leaderboard-box justify-space">
                <div className="justify-arround" style={{ width: "65%" }}>
                  <h6>{i+1}</h6>
                  <div className="round">{e.first_name.charAt(0).toUpperCase()}{e.last_name.charAt(0).toUpperCase()}</div>
                  <h6>{e.first_name.charAt(0).toUpperCase() + e.first_name.slice(1)} {e.last_name.charAt(0).toUpperCase() + e.last_name.slice(1)}</h6>
                </div>

                <h5>
                  $ {parseFloat(e.amount)}
                </h5>
              </div>
                  )
                })
              }
              



              <h6 className="mt-5">Recent Supporters (27)</h6>
              <div>

                <div className="leaderboard-box justify-space">

                  <div style={{ maxHeight: "60px" }}>
                    <h6>ANONYMOUS</h6>
                    <p className="text-small" style={{ marginTop: "-4%" }}>Blessings to your fundraiser endeavors</p>
                    <p className="text-secondary text-small" style={{ marginTop: "-2%" }}>2 Months Ago</p>
                  </div>

                  <h5>
                    $ 43.00
                  </h5>

                </div>

                <div className="leaderboard-box justify-space">

                  <div style={{ maxHeight: "60px" }}>
                    <h6>ANONYMOUS</h6>
                    <p className="text-small" style={{ marginTop: "-4%" }}>Blessings to your fundraiser endeavors</p>
                    <p className="text-secondary text-small" style={{ marginTop: "-2%" }}>2 Months Ago</p>
                  </div>

                  <h5>
                    $ 43.00
                  </h5>

                </div>
                <div className="leaderboard-box justify-space">

                  <div style={{ maxHeight: "60px" }}>
                    <h6>ANONYMOUS</h6>
                    <p className="text-small" style={{ marginTop: "-4%" }}>Blessings to your fundraiser endeavors</p>
                    <p className="text-secondary text-small" style={{ marginTop: "-2%" }}>2 Months Ago</p>
                  </div>

                  <h5>
                    $ 43.00
                  </h5>

                </div>



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
