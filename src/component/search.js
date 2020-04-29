import React from 'react';

const Search = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        type="input"
        placeholder="Search Robots"
        onChange={searchChange}
        className="bg-light-green dib br3 pa3 ma2 "
      ></input>
    </div>
  );
};

export default Search;
