import { LOAD_ALL_TICKETS, START, FAILURE, SUCCESS } from "../constants";

const initialState = {
  loaded: false,
  tickets: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ALL_TICKETS + START:
      return {
        ...state,
        loaded: false,
        errors: {}
      };
    case LOAD_ALL_TICKETS + SUCCESS:
      return {
        ...state,
        loaded: true,
        tickets: [...payload.sort((a,b) => (a.stops > b.stops) ? 1 : ((b.stops > a.stops) ? -1 : 0))]
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