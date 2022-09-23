import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRobots, searchRobots, getFilterRobots } from '../Actions/Actions';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import './App.css';

// manage redux root state connection
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.fetchRobots.robots,
    filterRobots: state.getFilterRobots.filterRobots,
    isPending: state.fetchRobots.isPending,
    error: state.fetchRobots.error,
  };
};
// manage redux root action connection
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(searchRobots(event.target.value)),
    onFetchRobots: () => dispatch(fetchRobots()),
    onGetFilterRobots: (robots, searchField) =>
      dispatch(getFilterRobots(robots, searchField)),
  };
};

function App(props) {
  const {
    searchField,
    onSearchChange,
    robots,
    onFetchRobots,
    isPending,
    error,
    filterRobots,
    onGetFilterRobots,
  } = props;

  useEffect(() => {
    onFetchRobots();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    onGetFilterRobots(robots, searchField);
    //FilterRobots only changes when robots and searchField change
    // eslint-disable-next-line
  }, [robots, searchField]);

  return isPending ? (
    <h1 className="f1">Loading...</h1>
  ) : error ? (
    <h1 className="f1">Whoops...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robots are friendly</h1>
      <ErrorBoundary>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </ErrorBoundary>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
