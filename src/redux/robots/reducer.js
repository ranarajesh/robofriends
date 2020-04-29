import {
  API_ROBOTS_FAILURE,
  API_ROBOTS_SUCCESS,
  API_ROBOTS_PENDING,
} from "./types";
const initialState = {
  isPending: false,
  robots: [],
};

export const requestRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case API_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case API_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        robots: action.payload,
      });
    case API_ROBOTS_FAILURE:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
