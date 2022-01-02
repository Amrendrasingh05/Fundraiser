import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions/events";
import AfterFooter from "../Common/afterfooter.component";
import SideBar from "../Common/sidebar.component";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Footer = ({ history }) => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const { event_id, loading } = useSelector((state) => state.event);
  console.log(event_id);
  const getEvents = () => {
    dispatch(actions.getEventDetailRequest({ id }));
  };

  useEffect(() => {
    getEvents();
  }, []);

  const DeleteEvent = ()=>{
	if(window.confirm("Are you sure to delete event")){
		dispatch(actions.deleteEventDetailRequest({ id }))
	}
  }
  if (loading == true) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <Loader
            type="ThreeDots"
            color="#af7b3a"
            height={200}
            width={200}
            timeout={3000} //3 secs
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <SideBar />
        <section
          className="login_wrap after_login"
          style={{ paddingTop: "70px" }}
        >
          <div className="notification_bar mt-5">
            <p className="mb-0 text-white font-16 text-center">
              To receive the earnings from fundraiser Add aPayment method by{" "}
              <Link to="/" className="border-effect text-white font-w-600">
                Clicking Here
              </Link>
            </p>
          </div>

          <br></br>

          <div className="container-fluid">
            <ul className="breadcrumb list list-inline">
              <li className="list-inline-item">
                <a href={null} className="link border-effect">
                  Events
                </a>
              </li>
              <li className="list-inline-item">
                {event_id.length > 0 ? event_id[0].TeamName : ""}
              </li>
            </ul>
            <br></br>

            <div className="fund">
              <h2 className="hd d-flex align-items-center mb-0 font-w-500">
                {event_id.length > 0 ? event_id[0].TeamName : ""}{" "}
                <span className="text-success ml-auto font-16 font-w-500">
                  This Event is Live
                </span>
              </h2>
              <br></br>

              <h3 className="font-22 mb-4">Event Details</h3>

              <div className="d-flex align-items-center mt-3 w-100">
                <h4 className="font-18 mb-0 d-flex align-items-center w-100 font-w-400">
                  <span>Event Code </span>
                  <span className="ml-auto d-flex align-items-center">
                    <strong className="font-w-600">
                      {event_id.length > 0 ? event_id[0].EventCode : ""}
                    </strong>
                    <label className="mb-0 badge badge-success ml-2 cursor">
                      Copy
                    </label>
                  </span>
                </h4>
              </div>

              <div className="d-flex align-items-center mt-3 w-100">
                <h4 className="font-18 mb-0 d-flex align-items-center w-100 font-w-400">
                  Sub- Organizer Link
                  <span className="ml-auto d-flex align-items-center">
                    <strong className="font-w-600">
                      {event_id.length > 0 ? event_id[0].SubEventCode : ""}
                    </strong>
                    <label className="mb-0 badge badge-success ml-2 cursor">
                      Copy
                    </label>
                  </span>
                </h4>
              </div>

              <div className="d-flex align-items-center mt-3 w-100">
                <h4 className="font-18 mb-0 d-flex align-items-center w-100 font-w-400">
                  Start Date
                  <span className="ml-auto d-flex align-items-center">
                    <strong className="font-w-400">
                      {event_id.length > 0
                        ? new Date(event_id[0].StartDate).toDateString()
                        : ""}{" "}
                      @{" "}
                      {event_id.length > 0
                        ? `${new Date(
                            event_id[0].StartDate
                          ).getHours()} : ${new Date(
                            event_id[0].StartDate
                          ).getMinutes()}`
                        : ""}
                    </strong>
                  </span>
                </h4>
              </div>

              <div className="d-flex align-items-center mt-3 w-100">
                <h4 className="font-18 mb-0 d-flex align-items-center w-100 font-w-400">
                  End Date
                  <span className="ml-auto d-flex align-items-center">
                    <strong className="font-w-400">
                      {event_id.length > 0
                        ? new Date(event_id[0].EndDate).toDateString()
                        : ""}{" "}
                      @{" "}
                      {event_id.length > 0
                        ? `${new Date(
                            event_id[0].EndDate
                          ).getHours()} : ${new Date(
                            event_id[0].EndDate
                          ).getMinutes()}`
                        : ""}
                    </strong>
                  </span>
                </h4>
              </div>

              <br></br>

              <br></br>

              <div className="row mt-2 payout">
                <div className="col-md-6">
                  <h3 className="font-22 mb-4">Payout</h3>

                  <div className="d-flex align-items-center mb-3">
                    <span className="d-block w-50">Total Sales | Profit</span>
                    <span className="d-block w-50 d-flex align-items-center ">
                      <span className="font-w-600 ml-auto">
                        $
                        {event_id.length > 0
                          ? parseFloat(event_id[0].RaisedAmount)
                          : ""}{" "}
                        |
                        <span className="text-success">
                          $
                          {event_id.length > 0
                            ? parseFloat(event_id[0].RaisedAmount)
                            : ""}
                        </span>
                      </span>
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <span className="d-block w-50">Recipient</span>
                    <span className="d-block w-50 d-flex align-items-center ">
                      <span className="font-w-600 ml-auto">
                        Payout to Organizer
                      </span>
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <span className="d-block w-50">Payout Method</span>
                    <span className="d-block w-50 d-flex align-items-center ">
                      <Link
                        className="font-w-600 ml-auto border-effect link font-16"
                        to="/"
                      >
                        Add Payment Method
                      </Link>
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <span className="d-block w-50">Expected Payout Date</span>
                    <span className="d-block w-50 d-flex align-items-center ">
                      <span className="font-w-600 ml-auto">
                        Payout Method Required
                      </span>
                    </span>
                  </div>
                </div>

                <div className="col-md-6 col2" style={{ paddingLeft: "70px" }}>
                  <h3 className="font-22 mb-4 d-flex">
                    Participant Breakdown (1){" "}
                    <a
                      href={null}
                      className="link border-effect ml-auto"
                      style={{ fontSize: "16px" }}
                    >
                      Export to CSV
                    </a>
                  </h3>

                  <div className="d-flex align-items-center mb-3">
                    <span className="d-block w-50">Participant</span>
                    <span className="d-block w-50 d-flex align-items-center ">
                      <span className="font-w-600 ml-auto">Sales | Profit</span>
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <span className="d-block w-50">Recipient</span>
                    <span className="d-block w-50 d-flex align-items-center ">
                      <span className="font-w-600 ml-auto">
                        Payout to Organizer
                      </span>
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <span className="d-block w-50">Md Raseel In Progress</span>
                    <span className="font-w-600 ml-auto">
                      $
                      {event_id.length > 0
                        ? parseFloat(event_id[0].RaisedAmount)
                        : ""}{" "}
                      |
                      <span className="text-success">
                        $
                        {event_id.length > 0
                          ? parseFloat(event_id[0].RaisedAmount)
                          : ""}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex mt-5">
                <a
                  href={null}
                  onClick={DeleteEvent}
                  className="text-danger m-auto font-w-600 border-effect"
                >
                  Delete Event
                </a>
              </div>
            </div>
          </div>
        </section>
        <AfterFooter />
      </>
    );
  }
};

export default Footer;
