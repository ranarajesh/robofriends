import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchRobots } from "./search/reducer";
import { requestRobots } from "./robots/reducer";

const logger = createLogger();

const rootReducers = combineReducers({ searchRobots, requestRobots });
let middleware = [thunkMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, logger];
}

const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;
