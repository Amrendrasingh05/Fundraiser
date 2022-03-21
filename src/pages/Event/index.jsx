import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import * as actions from "../../store/actions/events";
import AfterFooter from "../Common/afterfooter.component";
import SideBar from "../Common/sidebar.component";
import event_img from "../../assets/images/event_img.jpg";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Footer = ({ history }) => {
  const dispatch = useDispatch();
  document.body.classList.add("events_Creation");

  const CreateEvent = () => {
    history.push("/create-event");
  };

  const CreateEvents = () => {
    console.log("already an event listed");
  };
  const { data, loading } = useSelector((state) => state.event);
  console.log(loading)
  console.log("asdasd",data);
  const getEvents = () => {
    dispatch(actions.getEventRequest({
      history
    }));
  };

  useEffect(() => {
    getEvents();
  }, []);
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
          style={{ background: "none" }}
        >
          <div className="container-fluid events">
            <h2 className="hd font-w-600">Events</h2>

            <div className="event_wrap">
              <div
                className="event bg position-relative"
                onClick={data.length == 0 ? CreateEvent : CreateEvents}
              >
                <div className="info">
                  <h3 className="font-22 mb-0 font-w-500">Organize an Event</h3>
                  <p className="font-13 mb-0">
                    Invite your team to raise funds. Tap here to get started.
                  </p>
                </div>
              </div>
              {data.map((e, i) => {
                return (
                  <div className="event position-relative p-0" key={i}>
                    <div className="img">
                      <img src={event_img} alt="" className="transition" />
                    </div>
                    <h4 className="mt-2">{e.TeamName}</h4>

                    <ul className="list list-inline mb-2">
                      <li className="list-inline-item">
                        <p className="mb-1 font-14">Start Date</p>
                        <p className="mb-0 font-14">
                          {" "}
                          {new Date(e.StartDate).toDateString()}
                        </p>
                      </li>

                      <li className="list-inline-item ml-4">
                        <p className="mb-1 font-14">Total Sales </p>
                        <p className="mb-0 font-14"> ${e.RaisedAmount}</p>
                      </li>
                    </ul>

                    <a
                      className="cursor link font-14"
                      href={`/event/details/${e._id}`}
                    >
                      Event Details & Breakdown
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <AfterFooter />
      </>
    );
  }
};

export default Footer;
