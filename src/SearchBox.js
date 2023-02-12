import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="tc pa2 ba b--green bg-lightest-blue w-25"
        type="search"
        placeholder="Search pokemon by name"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
