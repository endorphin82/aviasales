import { LOAD_ALL_TICKETS, START, FAILURE, SUCCESS } from "../constants";

const initialState = {
  loaded: false,
  tickets: [],
  errors: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ALL_TICKETS + START:
      return {
        ...state,
        loaded: false,
        errors: false
      };
    case LOAD_ALL_TICKETS + SUCCESS:
      return {
        ...state,
        loaded: true,
        tickets: [...payload],
        errors: false
      };
    case LOAD_ALL_TICKETS + FAILURE:
      return {
        ...state,
        loaded: false,
        errors: { ...payload.errors }
      };
    default:
      return { ...state };
  }
}