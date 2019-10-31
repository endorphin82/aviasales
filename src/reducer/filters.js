import { UPDATE_FILTER } from "../constants";
import { addOrRemove } from "../helpers";

const initialState = [1, 2];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_FILTER:
      return {
        ...addOrRemove(state, payload)
      };
    default:
      return state;
  }
}