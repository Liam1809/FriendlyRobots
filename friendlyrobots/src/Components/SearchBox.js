import React from "react";

const SearchBox = ({ searchOnChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--blue bg-lightest-blue"
        type="search"
        onChange={searchOnChange}
        placeholder="Search Robots"
      />
    </div>
  );
};

export default SearchBox;
