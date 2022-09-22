import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchRobots } from '../Actions/Actions';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import './App.css';

// manage redux root state connection
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
  };
};
// manage redux root action connection
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(searchRobots(event.target.value)),
  };
};

function App(props) {
  const [robots, setRobots] = useState([]);

  const { searchField, onSearchChange } = props;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(values => setRobots(values));
  }, []);

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return !robots.length ? (
    <h1 className="f1">Loading...</h1>
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
