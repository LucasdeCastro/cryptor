import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS
} from "../utils/actions";

const initialState = {
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
