import { all } from "redux-saga/effects";

import {
  verifyOtpSaga,
  signupUserSaga,
  getUserSaga,
  updateUserSaga,
  saveUserEmailSaga,
  saveUserDetailSaga,
  updateUserDetailSaga,
  resendOtpSaga
} from "./user";


import {
  saveFundDetailsSaga,
  getFundDetailsSaga,
  getFundDetailByIDSaga,
  deleteFundDetailByIDSaga
} from './event';

export default function* rootSaga() {
  yield all([
    verifyOtpSaga(),
    resendOtpSaga(),
    signupUserSaga(),
    getUserSaga(),
    updateUserSaga(),
    saveUserEmailSaga(),
    saveUserDetailSaga(),
    saveFundDetailsSaga(),
    getFundDetailsSaga(),
    getFundDetailByIDSaga(),
    updateUserDetailSaga(),
    deleteFundDetailByIDSaga()
  ]);
}
