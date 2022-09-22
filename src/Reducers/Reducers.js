import { combineReducers } from 'redux';
import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS } from '../Constants/Constants';

const initialState = {
  searchField: '',
  robots: [],
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const fetchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ROBOTS:
      return { ...state, robots: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ searchRobots, fetchRobots });
