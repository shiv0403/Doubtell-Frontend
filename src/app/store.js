import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import authReducer from "../reducers/authReducer";
import thunk from "redux-thunk";

const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
