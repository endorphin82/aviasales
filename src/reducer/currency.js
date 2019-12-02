import { FAILURE, GET_CURRENCY, START, SUCCESS } from "../constants";

const initialState = {
  currency: {},
  loaded: false,
  errors: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CURRENCY + START:
      return {
        ...state,
        loaded: false,
        errors: false
      };
    case GET_CURRENCY + SUCCESS:
      return {
        ...state,
        loaded: true,
        currency: {...payload},
        errors: false
      };
    case GET_CURRENCY + FAILURE:
      return {
        ...state,
        loaded: false,
        errors: { ...payload.errors }
      };
    default:
      return { ...state };
  }
}