import {
  API_ROBOTS_FAILURE,
  API_ROBOTS_SUCCESS,
  API_ROBOTS_PENDING,
} from "./types";

import { getApi } from "../../helper/api";

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: API_ROBOTS_PENDING });
  try {
    const res = await getApi("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: API_ROBOTS_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: API_ROBOTS_FAILURE, payload: e });
  }
};
