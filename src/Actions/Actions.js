import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS } from '../Constants/Constants';

export const searchRobots = searchField => ({
  type: CHANGE_SEARCH_FIELD,
  payload: searchField,
});

export const fetchRobots = robots => ({
  type: FETCH_ROBOTS,
  payload: robots,
});
