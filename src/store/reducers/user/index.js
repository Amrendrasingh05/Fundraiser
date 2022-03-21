import * as types from '../../actions/user/types';

const initialState = {
  loading: false,
  error: null,
  success: null,
  user: null,
  isphone: true,
  ismobotp: false,
  isEmail: false,
  ismailOtp: false,
  IsName: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST:
      return { ...state, loading: true, error: '' };
    case types.LOGIN_USER_RESPONSE:

      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        ismobotp: true,
        isphone: false
      };
    case types.LOGIN_OTP_VERIFY_REQUEST:
      return { ...state, loading: true, error: '' };

    case types.LOGIN_EMAIL_REQUEST:
      return { ...state, loading: true, error: '' };

    case types.LOGIN_EMAIL_RESPONSE:
      return {
        ...state,
        loading: false,
        user: action.response,
        error: false,
        success: true,
        ismobotp: false,
        isEmail: false,
        ismailOtp: true
      };
    case types.RESET_EMAIL_RESPONSE:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        ismobotp: false,
        isEmail: true,
        ismailOtp: false
      };

    case types.CONFIRM_EMAIL_RESPONSE:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        ismobotp: false,
        isEmail: false,
        ismailOtp: false,
        IsName: true
      };

    case types.RESET_MOBILE_NUMBER:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        ismobotp: false,
        isphone: true
      };

    case types.USER_DETAIL_REQUEST:
      return { ...state, loading: true, error: '' };

    case types.USER_DETAIL_RESPONSE:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.response,
        success: true,
        ismobotp: false,
        isEmail: false,
        ismailOtp: false,
        IsName: false
      };


    case types.USER_UPDATE_REQUEST:
      return { ...state, loading: true, error: '' };

    case types.USER_UPDATE_RESPONSE:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        user: action.response,
      };

    case types.USER_DETAIL_FAILED:
      return { ...state, loading: false, error: action.error };

    case types.LOGIN_OTP_VERIFY_RESPONSE:
      return {
        ...state,
        loading: false,
        user: action.response,
        error: false,
        success: true,
        ismobotp: false,
        isEmail: true,
      };
    case types.LOGIN_USER_FAILED:
      return { ...state, loading: false, error: action.error };



    case types.LOGOUT_USER:
      localStorage.setItem('fr_token', '');
      return { ...state, loading: false, error: false, user: null };
    case types.SIGNUP_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        user: action.response,
      };
    case types.SIGNUP_USER_RESPONSE:
      return {
        ...state,
        loading: false,
        success: true,
        error: '',
        user: action.response.userData,
      };
    case types.SIGNUP_USER_FAILED:
      return { ...state, loading: false, error: action.error };


    case types.RESEND_OTP_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        user: action.response,
      };
    case types.RESEND_OTP_RESPONSE:
      return {
        ...state,
        loading: false,
        success: true,
        error: '',
        user: action.response.userData,
      };
    case types.RESEND_OTP_FAILED:
      return { ...state, loading: false, error: action.error };

    case types.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
        user: {},
      };
    case types.GET_USER_RESPONSE:
      return {
        ...state,
        loading: false,
        user: action.response,
      };
    case types.UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case types.UPDATE_USER_RESPONSE:
      return {
        ...state,
        loading: false,
        user: action.response,
      };

    case types.HIDE_SUCCESS:
      return { ...state, success: false };
    case types.HIDE_ERROR:
      return { ...state, error: false };

    case types.USER_DATA_REQUEST:
      return { ...state, loading: true, error: '' };

    case types.USER_DATA_RESPONSE:
      return {
        ...state,
        loading: false,
        user: action.response.data,
        error: false,
        success: true
      };

    default:
      return state;
  }
};

export default reducer;
