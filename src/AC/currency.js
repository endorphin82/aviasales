import { FAILURE, GET_CURRENCY, START, SUCCESS } from "../constants";
import axios from "axios";

export const getCurrency = cur => dispatch => {
  dispatch({
    type: GET_CURRENCY + START
  });
  return axios
    .get("https://www.cbr-xml-daily.ru/daily_json.js")
    .then(response => response.data)
    .then(response => dispatch({
      type: GET_CURRENCY + SUCCESS,
      payload: response.Valute
    }))
    .catch(errors => dispatch({
      type: GET_CURRENCY + FAILURE,
      payload: { errors }
    }));
};