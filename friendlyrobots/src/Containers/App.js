import React, { Component } from "react";
import CardList from "../Components/CardList";
import ErrorBoundary from "../Components/ErrorBoundary";
import Scroll from "../Components/Scroll";
import SearchBox from "../Components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((values) => this.setState({ robots: values }));
  }

  searchOnChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return !robots.length ? (
      <h1 className="f1">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robots are friendly</h1>
        <ErrorBoundary>
          <SearchBox searchOnChange={this.searchOnChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
