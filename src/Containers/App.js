import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRobots, searchRobots } from '../Actions/Actions';
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
    isPending: state.fetchRobots.isPending,
    error: state.fetchRobots.error,
  };
};
// manage redux root action connection
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(searchRobots(event.target.value)),
    fetchRobots: () => dispatch(fetchRobots()),
  };
};

function App(props) {
  const { searchField, onSearchChange, robots, fetchRobots, isPending, error } =
    props;

  useEffect(() => {
    fetchRobots();
    // eslint-disable-next-line
  }, []);

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

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
          <CardList robots={filteredRobots} />
        </Scroll>
      </ErrorBoundary>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
