import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import messageReducer from "../reducers/messageReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = combineReducers({
  messageReducer,
});

const appStore = createStore(
  store,
  composeWithDevTools(applyMiddleware(thunk))
);

export default appStore;
