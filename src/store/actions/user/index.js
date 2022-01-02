import * as types from './types';

export const loginRequest = (data) => ({
  type: types.LOGIN_USER_REQUEST,
  data,
});

export const loginResponse = (response) => ({
  
  type: types.LOGIN_USER_RESPONSE,
  response,
});


export const resendOtpResponse = (response) => ({
  
  type: types.RESEND_OTP_RESPONSE,
  response,
});


export const verifyotprespomse = (response)=>({
  type: types.LOGIN_OTP_VERIFY_RESPONSE,
  response,
})


export const saveEmailrespomse = (response)=>({
  type: types.LOGIN_EMAIL_RESPONSE,
  response,
})


export const saveUserDataresponse = (response)=>({
  type: types.USER_DETAIL_RESPONSE,
  response,
})

export const loginFailed = (error) => ({
  type: types.LOGIN_USER_FAILED,
  error,
});





export const logOut = () => ({
  type: types.LOGOUT_USER,
});

export const getProfileData = () => ({
  type: types.USER_DATA_REQUEST,
});


export const getProfileDataResponse = (response) => ({
  type: types.USER_DATA_RESPONSE,
  response
});

export const signupRequest = (data) => ({
  type: types.SIGNUP_USER_REQUEST,
  data,
});

export const resendRequest = (data) => ({
  type: types.RESEND_OTP_REQUEST,
  data,
});

export const sendVerifyOtpRequest = (data) => ({
  type: types.LOGIN_OTP_VERIFY_REQUEST,
  data,
});

export const SaveEmail = (data,token)=>({
  type: types.LOGIN_EMAIL_REQUEST,
  data,
});

export const ResetEmail = ()=>({
  type: types.RESET_EMAIL_RESPONSE
});


export const confirmEmail = ()=>({
  type: types.CONFIRM_EMAIL_RESPONSE
});

export const resetMobile = ()=>({
  type: types.RESET_MOBILE_NUMBER
});


export const saveUserData = (data,token)=>({
  type: types.USER_DETAIL_REQUEST,
  data,
});

export const updateUserData = (data,token)=>({
  type: types.USER_UPDATE_REQUEST,
  data,
});

export const updateUserResponse = (response)=>({
  type: types.USER_UPDATE_RESPONSE,
  response,
});

export const signupResponse = (response) => ({
  type: types.SIGNUP_USER_RESPONSE,
  response,
});

export const signupFailed = (error) => ({
  type: types.SIGNUP_USER_FAILED,
  error,
});

export const getUserRequest = () => ({
  type: types.GET_USER_REQUEST,
});

export const getUserResponse = (response) => ({
  type: types.GET_USER_RESPONSE,
  response,
});

export const updateUserRequest = (data, navigateTo, history) => ({
  type: types.UPDATE_USER_REQUEST,
  data,
  navigateTo,
  history,
});



export const showSuccess = () => ({
  type: types.SHOW_SUCCESS,
});
export const hideSuccess = () => ({
  type: types.HIDE_SUCCESS,
});

export const showError = () => ({
  type: types.SHOW_ERROR,
});
export const hideError = () => ({
  type: types.HIDE_ERROR,
});
