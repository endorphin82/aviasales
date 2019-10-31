import { FAILURE, LOAD_ALL_TICKETS, START, SUCCESS } from "../constants";
import axios from "axios";

export const loadAllTickets = () => dispatch => {
  dispatch({
    type: LOAD_ALL_TICKETS + START
  });
  return axios
    .get("http://localhost:3004/api/tickets")
    .then(response => response.data)
    .then(response => dispatch({
      type: LOAD_ALL_TICKETS + SUCCESS,
      payload: response
    }))
    .catch(errors => dispatch({
      type: LOAD_ALL_TICKETS + FAILURE,
      payload: { errors }
    }));
};