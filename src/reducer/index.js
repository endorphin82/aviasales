import { combineReducers } from "redux";
import tickets from "./tickets.js";
import filters from "./filters";
import currency from "./currency";

export default combineReducers({
  currency,
  tickets,
  filters
});