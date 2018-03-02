import axios from "axios";
import { apiBaseUrl } from "../utils/constants";
import {
  SET_NEW_CURRENCY,
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  RELOAD_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_SUCCESS
} from "../utils/actions";

export function fetchCoinData(currency, page, reload = false) {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });

    let url = "";
    const start = page == 0 ? 0 : page * 10;

    if (reload && start > 0) {
      url = `${apiBaseUrl}/v1/ticker/?limit=${start}&start=0&convert=${currency}`;
    } else {
      url = `${apiBaseUrl}/v1/ticker/?limit=10&start=${start}&convert=${currency}`;
    }

    return axios
      .get(url)
      .then(res => {
        dispatch({
          type: reload ? RELOAD_COIN_DATA_SUCCESS : FETCHING_COIN_DATA_SUCCESS,
          payload: { data: res.data, currency }
        });
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });
  };
}
