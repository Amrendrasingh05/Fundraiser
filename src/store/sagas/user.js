import { put, takeLatest, call } from "redux-saga/effects";
import * as axios from "axios";
import * as types from "../actions/user/types";
import * as actions from "../actions/user";
import { BASE_URL } from "../../config/Api";
import { errorToast, successToast } from '../../utils/toast/index';

function loginverifyApi(data) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  return axios.post(`${BASE_URL}auth/verify-otp`, data, {
    headers,
  });
}

function signupUserApi(data) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  return axios.post(`${BASE_URL}auth/login`, data, {
    headers,
  });
}

function resendOtpApi(data) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
  };
  return axios.post(`${BASE_URL}auth/resend-otp`, data, {
    headers,
  });
}

function saveUserEmailApi(data,token) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Authorization: token,
  };
  return axios.post(`${BASE_URL}auth/add-email`, data, {
    headers,
  });
}

function saveUserDetailApi(data,token) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Authorization: token,
  };
  return axios.post(`${BASE_URL}auth/add-details`, data, {
    headers,
  });
}

function updateUserDetailApi(data,token) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Authorization: token,
  };
  return axios.post(`${BASE_URL}auth/add-details`, data, {
    headers,
  });
}

function getUserApi(token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.get(`${BASE_URL}get-profile`, {
    headers,
  });
}

function updateUserApi(data, token) {
  const headers = {
    Authorization: token,
    "Access-Control-Allow-Origin": "*",
  };
  return axios.post(`${BASE_URL}update-details`, data, {
    headers,
  });
}

function* verifyOtpAsync(action) {
  try {
   
    const response = yield call(loginverifyApi, action.data);
    response.history = action.data.history
    yield put(actions.verifyotprespomse(response.data));
    localStorage.setItem("fr_token", response.data.token);
    if(response.data.details.firstName !=null && response.data.details.lastName !=null && response.data.details.email!=null){
      window.location.href = '/event';
    }
   
  } catch (error) {
    if (error.response) {
      errorToast(error.response?.data.message);
    } else {
      errorToast(error.message);
    }
    yield put(actions.loginFailed());
  }
}



function* signupUserAsync(action) {
  try {
    let response = yield call(signupUserApi, action.data);

    yield put(actions.loginResponse(response.data));

    
    
  } catch (error) {
    errorToast(error.response?.data.message);
    yield put(actions.signupFailed());
  }
}


function* resendOtpAsync(action) {
  try {
    let response = yield call(resendOtpApi, action.data);

    yield put(actions.resendOtpResponse(response.data));

    
    
  } catch (error) {
    errorToast(error.response?.data.message);
    yield put(actions.signupFailed());
  }
}


function* saveUserEmailAsync(action) {
  try {
    let token = getToken();
    let response = yield call(saveUserEmailApi, action.data,token);
    yield put(actions.saveEmailrespomse(response.data));

    
    
  } catch (error) {
    errorToast(error.response?.data.message);
    yield put(actions.signupFailed());
  }
}

function* saveUserDetailAsync(action) {
  try {
    let token = getToken();
    let response = yield call(saveUserDetailApi, action.data,token);
    console.log(response.data);
    yield put(actions.saveUserDataresponse(response.data));
  } catch (error) {
    errorToast(error.response?.data.message);
    yield put(actions.signupFailed());
  }
}

function* updateUserDetailAsync(action) {
  try {
    let token = getToken();
    let response = yield call(updateUserDetailApi, action.data,token);
    yield put(actions.updateUserResponse(response.data));

    
    
  } catch (error) {
    errorToast(error.response?.data.message);
    yield put(actions.signupFailed());
  }
}

function* getUserAsync() {
  try {
    console.log('getserAsync')
    let token = localStorage.getItem("fr_token");
    let response = yield call(getUserApi, token);
    yield put(actions.getProfileDataResponse(response.data));
  } catch (error) {
     errorToast(error.response?.data.message);
  }
}

function* updateUserAsync(action) {
  try {
    let token = localStorage.getItem("ll_token");
    let response = yield call(updateUserApi, action.data, token);
    yield put(actions.updateUserResponse(response.data));
    if (action.navigateTo === "adding") {
      action.history.push("/");
    } else {
      successToast("User Updated");
    }
  } catch (error) {
    errorToast("Couldn't Update User");
  }
}

export function* verifyOtpSaga() {
  yield takeLatest(types.LOGIN_OTP_VERIFY_REQUEST, verifyOtpAsync);
}



export function* signupUserSaga() {
  yield takeLatest(types.SIGNUP_USER_REQUEST, signupUserAsync);
}



export function* resendOtpSaga() {
  yield takeLatest(types.RESEND_OTP_REQUEST, resendOtpAsync);
}




export function* saveUserEmailSaga() {
  yield takeLatest(types.LOGIN_EMAIL_REQUEST, saveUserEmailAsync);
}

export function* saveUserDetailSaga() {
  yield takeLatest(types.USER_DETAIL_REQUEST, saveUserDetailAsync);
}

export function* getUserSaga() {
  yield takeLatest(types.USER_DATA_REQUEST, getUserAsync);
}
 
export function* updateUserSaga() {
  yield takeLatest(types.UPDATE_USER_REQUEST, updateUserAsync);
}

export function* updateUserDetailSaga() {
  yield takeLatest(types.USER_UPDATE_REQUEST, updateUserDetailAsync);
}

function getToken() {
  return localStorage.getItem('fr_token');
}
