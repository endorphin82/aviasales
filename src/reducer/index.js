import { combineReducers } from "redux";
import tickets from "./tickets.js";
import filters from "./filters";

export default combineReducers({
  tickets,
  filters
});