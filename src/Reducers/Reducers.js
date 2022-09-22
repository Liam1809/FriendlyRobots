import { combineReducers } from 'redux';
import { CHANGE_SEARCH_FIELD } from '../Constants/Constants';

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, action = {}) => {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export default combineReducers({ searchRobots });
