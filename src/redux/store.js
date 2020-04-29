import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchRobots } from "./search/reducer";
import { requestRobots } from "./robots/reducer";

const logger = createLogger();

const rootReducers = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

export default store;
