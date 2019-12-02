import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true, traceLimit: 25
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(reducer, {}, enhancer);

export { store };