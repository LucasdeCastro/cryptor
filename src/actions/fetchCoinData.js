import axios from "axios";
import { apiBaseUrl } from "../utils/constants";
import {
  SET_NEW_CURRENCY,
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS
} from "../utils/actions";

export function fetchCoinData(currency) {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });
    return axios
      .get(`${apiBaseUrl}/v1/ticker/?limit=10&convert=${currency}`)
      .then(res => {
        dispatch({
          type: FETCHING_COIN_DATA_SUCCESS,
          payload: { data: res.data, currency }
        });
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });
  };
}
