import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AfterFooter from "../Common/afterfooter.component";
import SideBar from "../Common/sidebar.component";
import step_img from "../../assets/images/step_img.png";
import { useSelector, useDispatch } from "react-redux";
import { errorToast } from "../../utils/toast/index";
import * as actions from "../../store/actions/events";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { ADMIN_BASE_URL } from "../../config/Api";
const Footer = ({ history }) => {
  let participants = [
    { name: "participants", value: "Just Me" },
    { name: "participants", value: "2-10" },
    { name: "participants", value: "11-20" },
    { name: "participants", value: "21-30" },
    { name: "participants", value: "31-40" },
    { name: "participants", value: "41-50" },
    { name: "participants", value: "50+" },
    { name: "participants", value: "I am not sure" },
  ];

  let HideClass = {
    display: "none",
  };
  let blockClass = {
    display: "block",
  };
  const {
    loading,
    error,
    success,
    data,
    isTeam,
    teamType,
    isSubOrg,
    isDate,
    teamMember,
    EventAdded,
  } = useSelector((state) => state.event);

  const dispatch = useDispatch();
  document.body.classList.add("events_Creation");
  const [teamName, setTeamName] = useState("");
  const [categoryId, setcategoryId] = useState("");
  const [subCategoryId, setsubCategoryId] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [category, setCategory] = useState([]);
  const [Subcategory, setSubCategory] = useState([]);

  const [teamNameError, setteamNameError] = useState("");
  const [zipCodeError, setzipCodeError] = useState("");
  const [categoryError, setcategoryError] = useState("");

  const [subcategoryError, setsubcategoryError] = useState("");

  const [IsSubOrg, setIsSubOrg] = useState("No");
  const [SelectedParticants, setSelectedParticants] = useState("");

  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  let Dates = new Date();
  Dates.setMonth(Dates.getMonth() + 1);
  const [minDate, setMinDate] = useState(Dates);
  const [startDate, setStartDate] = useState(Dates);
  const [endDate, setEndDate] = useState(addDays(Dates, 4));
  const SelectDate = (dates) => {
    console.log(dates);
    const start = dates;
    setStartDate(start);
    setEndDate(addDays(start, 4));
    // setEndDate(dateFormat('MMMM hh:mm',addDays(start,4)))
  };

  const GetSubcategory = (CategoryId) => {
    console.log("CategoryId", CategoryId);
    setcategoryId(CategoryId);
    if (CategoryId != "") {
      let token = localStorage.getItem("fr_token");
      const headers = {
        Authorization: token,
        "Content-Type": "application/json",
      };
      axios
        .get(ADMIN_BASE_URL + `subcategory/get?Category_id=${CategoryId}`, {
          headers,
        })
        .then((response) => {
          console.log(response);
          setSubCategory(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const GetCategory = () => {
    let token = localStorage.getItem("fr_token");
    const headers = {
      Authorization: token,
      "Content-Type": "application/json",
    };
    axios
      .get(ADMIN_BASE_URL + "category/get", { headers })
      .then((response) => {
        console.log(response);
        setCategory(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveTeam = (event) => {
    event.preventDefault();
    if (teamName == "") {
      setteamNameError("Team Name Is Required");
    } else {
      dispatch(
        actions.teamNameRequest({
          teamName: teamName,
        })
      );
    }
  };

  const saveOrgDetails = (event) => {
    event.preventDefault();
    if (categoryId == "") {
      setcategoryError("Category Is Required");
    } else if (subCategoryId == "") {
      setsubcategoryError("Sub Category Is Required");
    } else if (zipCode == "") {
      setzipCodeError("Zip Code Is Required");
    } else {
      dispatch(
        actions.teamDetailRequest({
          categoryId: categoryId,
          subCategoryId: subCategoryId,
          zipCode: zipCode,
        })
      );
    }
  };

  const saveIsSub = (event) => {
    event.preventDefault();
    dispatch(
      actions.teamSubOrgRequest({
        categoryId: categoryId,
        subCategoryId: subCategoryId,
        zipCode: zipCode,
      })
    );
  };

  const saveDates = (event) => {
    event.preventDefault();
    if (startDate == "") {
      errorToast("Start Date Is Required");
    } else if (endDate == "") {
      errorToast("End Date Is Required");
    } else {
      dispatch(
        actions.teamDatesRequest({
          startDate: startDate,
          endDate: endDate,
        })
      );
    }
  };

  const OpenTeamName = () => {
    dispatch(actions.teamNameBackRequest());
  };

  const TeamDetailBack = () => {
    dispatch(actions.teamDetailBackRequest());
  };

  const TeamSubOrgBack = () => {
    dispatch(actions.teamSubOrgBackRequest());
  };

  const TeamdATESBack = () => {
    dispatch(actions.teamDatesBackRequest());
  };

  const saveTeamSize = (event) => {
    event.preventDefault();
    dispatch(actions.teamSizeRequest());
  };

  const saveTeamSizebACK = () => {
    dispatch(actions.teamSizeBackRequest());
  };

  const saveEvents = (event) => {
    event.preventDefault();
    console.log("sadsad");
    dispatch(
      actions.savefundDetails({
        TeamName: teamName,
        OrgCategory: categoryId,
        OrgSubCategory: subCategoryId,
        ZipCode: zipCode,
        StartDate: startDate,
        EndDate: endDate,
        TeamMember: SelectedParticants,
        IsSubOrg: IsSubOrg == "Yes" ? true : false,
        SubOrgEmail:
          IsSubOrg == "Yes" ? ["demo@yopmail.com", "demo1@yopmail.com"] : [],
        history,
      })
    );
  };

  useEffect(() => {
    GetCategory();
  }, [Subcategory, history]);
  return (
    <>
      <ToastContainer />

      <SideBar />

      <section
        className="login_wrap after_login mover pt-2 pb-0"
        style={{ background: "none" }}
      >
        <div className="container-fluid events">
          <div className="row ">
            <div className="col-md-5 wow fadeInLeft">
              <img src={step_img} alt="" className="w-100 ele" />
            </div>

            <div className="col-md-7 pl-5 left">
              <div className="progresscontainer">
                <div className="form-container">
                  <form className="form3">
                    <div
                      className="form-page"
                      style={isTeam == false ? HideClass : blockClass}
                    >
                      <p className="font-16">Step 1 of 5</p>
                      <h3 className="font-26">Type in the name of your team</h3>
                      <p className="font-16 mb-4">
                        The team name will be displayed on each participant’s
                        Pop-Up Store.
                      </p>
                      <div className="form-group">
                        <input
                          type="text"
                          className={`input form-control  ${
                            teamNameError != "" ? "error" : ""
                          }`}
                          onChange={(e) => {
                            if (!e.target.value) {
                              setteamNameError("Team Name Is Required");
                              setTeamName("");
                            } else {
                              setteamNameError("");
                              setTeamName(e.target.value);
                            }
                          }}
                          placeholder="Team Name"
                        />
                        <div className="error_msg">
                          {teamNameError != "" ? teamNameError : ""}
                        </div>
                      </div>

                      <br></br>

                      <button
                        className="btn btn_step btn-org btn-lg max-content"
                        onClick={saveTeam}
                        data-nav="next"
                      >
                        Next Team Details
                      </button>
                    </div>

                    <div
                      className="form-page position-relative"
                      style={teamType == false ? HideClass : blockClass}
                    >
                      <a
                        href={null}
                        className="btn btn_step cursor d-flex align-items-center justify-content-center rounded-circle  back_step"
                        data-nav="prev"
                        onClick={OpenTeamName}
                      >
                        <i className="ti ti-arrow-left"></i>
                      </a>
                      <p className="font-16 d-flex align-items-center pl-4">
                        Step 2 of 5
                      </p>
                      <h3 className="font-26">Type in the name of your team</h3>
                      <p className="font-16 mb-4">
                        From sports teams to non-profit organizations, Cigar For
                        Charity has helped raise over $100 million.
                      </p>
                      <div className="form-group">
                        <select
                          className={`select2 input form-control  ${
                            categoryError != "" ? "error" : ""
                          }`}
                          data-minimum-results-for-search="Infinity"
                          onChange={(e) => {
                            GetSubcategory(e.target.value);
                            if (e.target.value != "") {
                              setcategoryError("");
                            }
                          }}
                        >
                          <option value="">Select Category</option>
                          {category.map((e, i) => {
                            return <option value={e._id}>{e.Name}</option>;
                          })}
                        </select>
                        <div className="error_msg">
                          {categoryError != "" ? categoryError : ""}
                        </div>
                      </div>
                      <div className="form-group">
                        <select
                          className={`select2 input form-control  ${
                            subcategoryError != "" ? "error" : ""
                          }`}
                          data-minimum-results-for-search="Infinity"
                          onChange={(e) => {
                            setsubCategoryId(e.target.value);
                            if (e.target.value != "") {
                              setsubcategoryError("");
                            }
                          }}
                        >
                          <option value="">Select Sub Category</option>
                          {Subcategory.map((e, i) => {
                            return <option value={e._id}>{e.Name}</option>;
                          })}
                        </select>
                        <div className="error_msg">
                          {subcategoryError != "" ? subcategoryError : ""}
                        </div>
                      </div>

                      <div className="form-group" style={{ width: "150px" }}>
                        <input
                          type="text"
                          className={`input form-control  ${
                            zipCodeError != "" ? "error" : ""
                          }`}
                          placeholder="Zip Code"
                          onChange={(e) => {
                            if (!e.target.value) {
                              setzipCodeError("Zip Code Is Required");
                              setzipCode("");
                            } else {
                              setzipCodeError("");
                              setzipCode(e.target.value);
                            }
                          }}
                        />
                        <div className="error_msg">
                          {zipCodeError != "" ? zipCodeError : ""}
                        </div>
                      </div>

                      <br></br>

                      <button
                        className="btn btn_step btn-org btn-lg max-content"
                        data-nav="next"
                        onClick={saveOrgDetails}
                      >
                        Next Fundraising Details
                      </button>
                    </div>

                    <div
                      className="form-page position-relative"
                      style={isSubOrg == false ? HideClass : blockClass}
                    >
                      <a
                        href={null}
                        className="btn btn_step cursor d-flex align-items-center justify-content-center rounded-circle  back_step"
                        data-nav="prev"
                        onClick={TeamDetailBack}
                      >
                        <i className="ti ti-arrow-left"></i>
                      </a>
                      <p className="font-16 pl-4">Step 3 of 5</p>
                      <h3 className="font-26">
                        Type in the Sub-Organization Detail
                      </h3>
                      <p className="font-16">
                        From sports teams to non-profit organizations, Cigar For
                        Charity has helped raise over $100 million.
                      </p>
                      <p className="font-16 mb-4">
                        Do you have a Sub-Organization with you?
                      </p>
                      <ul className="list list-inline">
                        <li className="list-inline-item">
                          <input
                            id="radio-1"
                            className="radio-custom"
                            name="radio-group"
                            type="radio"
                            value="Yes"
                            checked={IsSubOrg === "Yes" ? true : false}
                            defaultChecked={IsSubOrg === "Yes"}
                            onClick={() => {
                              setIsSubOrg("Yes");
                            }}
                          />
                          <label
                            htmlFor="radio-1"
                            className="radio-custom-label"
                          >
                            Yes
                          </label>
                        </li>

                        <li className="list-inline-item">
                          <input
                            id="radio-2"
                            className="radio-custom"
                            name="radio-group"
                            type="radio"
                            value="No"
                            checked={IsSubOrg === "No" ? true : false}
                            defaultChecked={IsSubOrg === "No"}
                            onClick={() => {
                              setIsSubOrg("No");
                            }}
                          />
                          <label
                            htmlFor="radio-2"
                            className="radio-custom-label"
                          >
                            No
                          </label>
                        </li>
                      </ul>

                      <div
                        className="form-group"
                        style={IsSubOrg == "No" ? HideClass : blockClass}
                      >
                        {fields.map((field, idx) => {

                          if(fields.length>1){
                            return (
                              <div key={`${field}-${idx}`} style={{position: 'relative',display:'flex','margin':"10px"}}>
                                <input
                                type="text"
                                className="input form-control"
                                placeholder="Enter Email ID"
                                  onChange={(e) => handleChange(idx, e)}
                                />
                                
                                <span onClick={() => handleRemove(idx)} class="close">&times;</span>
                                
                              </div>
                            );
                          }else{
                            return (
                              <div key={`${field}-${idx}`} style={{position: 'relative',display:'flex','margin':"10px"}}>
                                <input
                                type="text"
                                className="input form-control"
                                placeholder="Enter Email ID"
                                  onChange={(e) => handleChange(idx, e)}
                                />
                                
                              </div>
                            );
                          }
                         
                        })}
                        <button
                        className="btn  btn-org btn-sm max-content"
                        type="button"
                        onClick={handleAdd}
                      >
                        Add Email
                      </button>
                      </div>

                      <br></br>

                      <button
                        className="btn btn_step btn-org btn-lg max-content"
                        data-nav="next"
                        onClick={saveIsSub}
                      >
                        Next Fundraising Details
                      </button>
                    </div>

                    <div
                      className="form-page position-relative"
                      style={isDate == false ? HideClass : blockClass}
                    >
                      <a
                        href={null}
                        className="btn btn_step cursor d-flex align-items-center justify-content-center rounded-circle  back_step"
                        data-nav="prev"
                        style={{ top: "47px" }}
                        onClick={TeamSubOrgBack}
                      >
                        <i className="ti ti-arrow-left"></i>
                      </a>
                      <p className="font-16 pl-4">Step 4 of 5</p>
                      <h3 className="font-26">
                        Select your team's 4 day fundraising window
                      </h3>
                      <p className="font-16 mb-4">
                        Do you have a Sub-Organization with you?
                      </p>

                      <div className="form-group">
                        <DatePicker
                          className="input form-control"
                          selected={startDate}
                          onChange={SelectDate}
                          endDate={addDays(startDate, 4)}
                          showTimeSelect
                          dateFormat="MMM d  h:mm aa"
                          selectsStart
                          startDate={startDate}
                          minDate={minDate}
                          monthsShown={2}
                          popperPlacement="bottom"
                          popperModifiers={[
                            {
                              name: "offset",
                              options: {
                                offset: [0, 5],
                              },
                            },
                            {
                              name: "preventOverflow",
                              options: {
                                rootBoundary: "viewport",
                                tether: false,
                                altAxis: true,
                              },
                            },
                          ]}
                        />
                      </div>

                      <div className="form-group">
                        <DatePicker
                          className="input form-control"
                          selected={endDate}
                          dateFormat="MMM d  h:mm aa"
                          disabled
                        />
                      </div>

                      <br></br>

                      <button
                        className="btn btn_step btn-org btn-lg max-content"
                        data-nav="next"
                        onClick={saveDates}
                      >
                        Next Fundraising Details
                      </button>
                    </div>

                    <div
                      className="form-page position-relative"
                      style={teamMember == false ? HideClass : blockClass}
                    >
                      <a
                        href={null}
                        className="btn btn_step cursor d-flex align-items-center justify-content-center rounded-circle  back_step"
                        data-nav="prev"
                        onClick={TeamdATESBack}
                      >
                        <i className="ti ti-arrow-left"></i>
                      </a>
                      <p className="font-16 pl-4">Step 5 of 5</p>
                      <h3 className="font-26 mb-4">
                        How many members of your team will participate in the
                        fundraiser?
                      </h3>

                      <ul className="list list-inline radio_btns">
                        {participants.map((e, i) => {
                          return (
                            <li className="list-inline-item" key={i}>
                              <label
                                className={
                                  SelectedParticants === e.value
                                    ? "cursor act"
                                    : "cursor"
                                }
                              >
                                {e.value}{" "}
                                <input
                                  type="radio"
                                  defaultChecked={
                                    SelectedParticants === e.value
                                  }
                                  value={e.value}
                                  name={e.name}
                                  onChange={() =>
                                    setSelectedParticants(e.value)
                                  }
                                />
                              </label>
                            </li>
                          );
                        })}
                      </ul>

                      <br></br>

                      <button
                        className="btn btn_step btn-org btn-lg max-content"
                        data-nav="next"
                        onClick={saveTeamSize}
                      >
                        Next
                      </button>
                    </div>

                    <div
                      className="form-page position-relative"
                      style={EventAdded == false ? HideClass : blockClass}
                    >
                      <a
                        href={null}
                        className="btn btn_step cursor d-flex align-items-center justify-content-center rounded-circle  back_step"
                        data-nav="prev"
                        onClick={saveTeamSizebACK}
                      >
                        <i className="ti ti-arrow-left"></i>
                      </a>
                      <p className="font-16 pl-4">ESTIMATED EARNINGS</p>
                      <h3 className="font-26 mb-4">
                        Your team could earn between $0-$1,800 in just 4 days!
                      </h3>

                      <p className="font-16 mb-4">
                        Our estimate is based on your team activity type and the
                        number of team members you expect to open a Pop-Up Store
                        during your fundraiser. The average participant sells
                        $400!
                      </p>

                      <br></br>

                      <button
                        className="btn btn_step btn-org btn-lg max-content"
                        onClick={saveEvents}
                      >
                        Done
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AfterFooter />
    </>
  );
};

export default Footer;
