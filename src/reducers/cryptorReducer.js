import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  RELOAD_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_SUCCESS
} from "../utils/actions";

const initialState = {
  page: 0,
  data: [],
  currency: "BRL",
  hasError: false,
  isFetching: false,
  errorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        hasError: false,
        isFetching: true,
        errorMessage: ""
      });

    case FETCHING_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        hasError: false,
        errorMessage: "",
        isFetching: false,
        data: state.data.concat(action.payload.data),
        page: ++state.page,
        currency: action.payload.currency
      });
    case RELOAD_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        hasError: false,
        errorMessage: "",
        page: state.page,
        isFetching: false,
        data: action.payload.data,
        currency: action.payload.currency
      });
    case FETCHING_COIN_DATA_FAIL:
      return Object.assign({}, state, {
        hasError: false,
        errorMessage: "",
        isFetching: false,
        data: action.payload
      });

    default:
      return state;
  }
};
