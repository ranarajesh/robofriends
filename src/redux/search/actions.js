import { CHANGE_SEARCHFIELD } from "./types";

export const setSearchField = (searchText) => ({
  type: CHANGE_SEARCHFIELD,
  payload: searchText,
});
