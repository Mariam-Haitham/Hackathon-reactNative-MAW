import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import channelsReducer from "./channels";
import authReducer from "./authReducer";
import errorReducer from "./errors";

const middlewares = [thunk];

const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));

const rootReducer = combineReducers({
  rootChannels: channelsReducer,
  rootAuth: authReducer,
  errors: errorReducer
});

const store = createStore(rootReducer, enhancer);

export default store;
