import { UPDATE_FILTER } from "../constants";
import { addOrRemove } from "../helpers";

const initialState = [0, 1, 2, 3];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_FILTER:
        return [...addOrRemove(state, payload)];
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
}