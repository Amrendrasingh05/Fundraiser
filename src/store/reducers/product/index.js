import * as types from '../../actions/events/types';

const initialState = {
    loading: false,
    error: null,
    success: null,
    prodocts: [],

    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_REQUEST:
            return { ...state, loading: true, error: '' };

        case types.GET_PRODUCT_RESPONSE:
            return {
                ...state,
                loading: false,
                prodocts: action.response.data,

                error: false,
                success: true,
            };
        case types.GET_PRODUCT_FAILED:
            return { ...state, loading: false, error: action.error };
      

        default:
            return state;
    }
};

export default reducer;
