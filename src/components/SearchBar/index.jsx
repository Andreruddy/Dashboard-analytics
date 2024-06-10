import React from "react";
const SearchBar = (props) => {
  const { value, onChange } = props;

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Filter by product..."
      className="bg-gray-800 p-2 rounded"
    />
  );
};

export default SearchBar;
