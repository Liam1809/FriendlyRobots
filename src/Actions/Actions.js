import {
  CHANGE_SEARCH_FIELD,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED,
  FILTER_ROBOTS,
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

export const getFilterRobots = (robots, searchField) => dispatch => {
  try {
    const filterRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    dispatch({ type: FILTER_ROBOTS, payload: filterRobots });
  } catch (error) {
    console.log(error);
  }
};
