import { put, takeLatest, call } from "redux-saga/effects";
import * as axios from "axios";
import * as types from "../actions/events/types";
import * as actions from "../actions/events";
import { BASE_URL } from "../../config/Api";
import { errorToast } from '../../utils/toast/index';




//end save event

//start saved events get
function getProductsApi(token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.get(`${BASE_URL}fundraiser/get-product`, {
    headers,
  });
}



function* getProductsAsync(action) {
  try {
    let token = getToken();
    console.log(action);
    let response = yield call(getProductsApi, token);
    yield put(actions.getProductResponse(response.data));
  } catch (error) {
    // errorToast(error.response?.data.message);
    yield put(actions.getProductfailed([]));

  }
}




export function* getProductsSaga() {
  yield takeLatest(types.GET_PRODUCT_REQUEST, getProductsAsync);
}

//to get event end

//to get event end


function getToken() {
  return localStorage.getItem('fr_token');
}
