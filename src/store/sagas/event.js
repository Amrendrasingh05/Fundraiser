import { put, takeLatest, call } from "redux-saga/effects";
import * as axios from "axios";
import * as types from "../actions/events/types";
import * as actions from "../actions/events";
import { BASE_URL } from "../../config/Api";
import { errorToast } from '../../utils/toast/index';


//to save event
function saveFundDetailsApi(data,token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.post(`${BASE_URL}fundraiser/add`, data, {
    headers,
  });
}
function* saveFundDetailsAsync(action) {
  try {
    let token = getToken();
    let response = yield call(saveFundDetailsApi,action.data, token);
    yield put(actions.getEventResponse(response.data));
    window.location.href = "/event";
  } catch (error) {
    errorToast(error.response?.data.message);
  }
}

export function* saveFundDetailsSaga() {
  yield takeLatest(types.FUND_DETAIL_SAVE_REQUEST, saveFundDetailsAsync);
}

//end save event

//start saved events get
function getFundDetailsApi(token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.get(`${BASE_URL}fundraiser/get`, {
    headers,
  });
}



function* getFundDetailsAsync(action) {
  try {
    let token = getToken();
    console.log(action);
    let response = yield call(getFundDetailsApi, token);
    yield put(actions.getEventResponse(response.data));
  } catch (error) {
    // errorToast(error.response?.data.message);
    yield put(actions.getEventFaild([]));

  }
}




export function* getFundDetailsSaga() {
  yield takeLatest(types.FUND_DETAIL_REQUEST, getFundDetailsAsync);
}

//to get event end

//start saved events get
function getFundDetailIDApi(data,token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.get(`${BASE_URL}fundraiser/get/${data.id}`, {
    headers,
  });
}



function* getFundDetailsIdAsync(action) {
  try {
    console.log(action.data);
    let token = getToken();
    let response = yield call(getFundDetailIDApi,action.data, token);
    yield put(actions.getEventDetailResponse(response.data));
  } catch (error) {
    errorToast(error.response?.data.message);
  }
}




export function* getFundDetailByIDSaga() {
  yield takeLatest(types.FUND_DETAILBY_ID_REQUEST, getFundDetailsIdAsync);
}




//start saved events get
function deleteFundDetailIDApi(data,token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.post(`${BASE_URL}fundraiser/delete/${data.id}`,'', {
    headers,
  });
}



function* deleteFundDetailsIdAsync(action) {
  try {
    console.log(action.data);
    let token = getToken();
    let response = yield call(deleteFundDetailIDApi,action.data, token);
    yield put(actions.deleteEventDetailResponse(response.data));
    window.location.href = "/event"
  } catch (error) {
    errorToast(error.response?.data.message);
  }
}




export function* deleteFundDetailByIDSaga() {
  yield takeLatest(types.FUND_DELETE_REQUEST, deleteFundDetailsIdAsync);
}

//to get event end


function getToken() {
  return localStorage.getItem('fr_token');
}
