import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(values => setRobots(values));
  }, []);

  const searchOnChange = event => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return !robots.length ? (
    <h1 className="f1">Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robots are friendly</h1>
      <ErrorBoundary>
        <SearchBox searchOnChange={searchOnChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </ErrorBoundary>
    </div>
  );
}

export default App;
