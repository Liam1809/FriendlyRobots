import React, { Component } from "react";
import CardList from "../Components/CardList";
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
    console.log(this.state.robots);
    return (
      <div className="tc">
        <h1>Robots are friendly</h1>
        <SearchBox searchOnChange={this.searchOnChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
