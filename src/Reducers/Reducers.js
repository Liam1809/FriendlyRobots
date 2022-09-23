import { combineReducers } from 'redux';
import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED,
  FILTER_ROBOTS,
} from '../Constants/Constants';

const initialStateSearchField = {
  searchField: '',
};

export const searchRobots = (state = initialStateSearchField, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: '',
};

export const fetchRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case FETCH_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case FETCH_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

const initialStateFilterRobots = {
  filterRobots: [],
};

export const getFilterRobots = (
  state = initialStateFilterRobots,
  action = {}
) => {
  switch (action.type) {
    case FILTER_ROBOTS:
      return { ...state, filterRobots: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ searchRobots, fetchRobots, getFilterRobots });
