import { UPDATE_FILTER } from "../constants";

export const updateFilter = filter => {
  return {
    type: UPDATE_FILTER,
    payload: filter
  };
};