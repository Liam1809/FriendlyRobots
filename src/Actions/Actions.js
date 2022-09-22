import { CHANGE_SEARCH_FIELD } from '../Constants/Constants';

export const searchRobots = searchField => ({
  type: CHANGE_SEARCH_FIELD,
  payload: searchField,
});
