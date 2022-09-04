import React, { Component } from "react";
import CardList from "../Components/CardList";
import Scroll from "../Components/Scroll";
import SearchBox from "../Components/SearchBox";

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
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="tc">
        <h1>Robots are friendly</h1>
        <SearchBox searchOnChange={this.searchOnChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
