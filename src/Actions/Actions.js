import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED,
} from '../Constants/Constants';

export const searchRobots = searchField => dispatch =>
  dispatch({
    type: CHANGE_SEARCH_FIELD,
    payload: searchField,
  });

export const fetchRobots = () => async dispatch => {
  try {
    dispatch({ type: FETCH_ROBOTS_PENDING });
    const data = await fetch('https://jsonplaceholder.typicode.com/users');

    const robots = await data.json();

    dispatch({ type: FETCH_ROBOTS_SUCCESS, payload: robots });
  } catch (error) {
    dispatch({ type: FETCH_ROBOTS_FAILED, payload: error });
  }
};
