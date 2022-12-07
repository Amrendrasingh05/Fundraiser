import { put, takeLatest, call } from "redux-saga/effects";
import * as axios from "axios";
import * as types from "../actions/events/types";
import * as actions from "../actions/events";
import { BASE_URL } from "../../config/Api";
import { errorToast } from '../../utils/toast/index';
import { successToast } from '../../utils/toast/index';



//to save event
function saveFundDetailsApi(data, token) {
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
    let response = yield call(saveFundDetailsApi, action.data, token);
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
function getFundDetailIDApi(data, token) {
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
    let response = yield call(getFundDetailIDApi, action.data, token);
    yield put(actions.getEventDetailResponse(response.data));
  } catch (error) {
    errorToast(error.response?.data.message);
  }
}




export function* getFundDetailByIDSaga() {
  yield takeLatest(types.FUND_DETAILBY_ID_REQUEST, getFundDetailsIdAsync);
}




//start saved events get
function deleteFundDetailIDApi(data, token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.post(`${BASE_URL}fundraiser/delete/${data.id}`, '', {
    headers,
  });
}



function* deleteFundDetailsIdAsync(action) {
  try {
    console.log(action.data);
    let token = getToken();
    let response = yield call(deleteFundDetailIDApi, action.data, token);
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




//to get funds event
function getFundsApi(data, token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.get(`${BASE_URL}fundraiser/get-fund-raiser`, {
    headers,
  });
}
function* saveFundsAsync(action) {
  try {
    let token = getToken();
    let response = yield call(getFundsApi, action.data, token);
    yield put(actions.getFundsResponse(response.data));
  } catch (error) {
    errorToast(error.response?.data.message);
  }
}

export function* saveFundsSaga() {
  yield takeLatest(types.FUND_REQUEST, saveFundsAsync);
}


//to add product in cart
function addCartApi(data, token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.post(`${BASE_URL}fundraiser/add-to-cart`, data, {
    headers,
  });
}
function* addCartAsync(action) {
  try {
    let token = getToken();
    let response = yield call(addCartApi, action.data, token);
    yield put(actions.addCartResponse(response.data));
    successToast('Item added to cart');
  } catch (error) {
    errorToast(error.response?.data.message);
  }
}

export function* addCartSaga() {
  yield takeLatest(types.ADD_CART_REQUEST, addCartAsync);
}



//to get  cart
function getCartApi(data, token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.get(`${BASE_URL}fundraiser/get-cart`, {
    headers,
  });
}
function* getCartAsync(action) {
  try {
    let token = getToken();
    let response = yield call(getCartApi, action.data, token);
    yield put(actions.getCartResponse(response.data));
  } catch (error) {
    errorToast(error.response?.data.message);
  }
}

export function* getCartSaga() {
  yield takeLatest(types.GET_CART_REQUEST, getCartAsync);
}

function getToken() {
  return localStorage.getItem('fr_token');
}
