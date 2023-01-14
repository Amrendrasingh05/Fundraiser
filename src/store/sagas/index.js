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
  deleteFundDetailByIDSaga,
  saveFundsSaga,
  addCartSaga,
  getCartSaga,
  addOrderSaga,
  paymentDoneSaga
} from './event';

import {
  getProductsSaga,
} from './product';

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
    deleteFundDetailByIDSaga(),
    getProductsSaga(),
    saveFundsSaga(),
    addCartSaga(),
    getCartSaga(),
    addOrderSaga(),
    paymentDoneSaga()
  ]);
}
