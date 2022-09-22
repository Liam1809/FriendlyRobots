import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--blue bg-lightest-blue"
        type="search"
        onChange={onSearchChange}
        placeholder="Search Robots"
      />
    </div>
  );
};

export default SearchBox;
