// SortingOptions.js

import React from 'react';

const SortOptions = ({ currentSorting, setCurrentSorting }) => {
  const sortingOptions = ['priority', 'title'];

  const handleChange = (e) => {
    setCurrentSorting(e.target.value);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="sorting-options">
      <label>Sort by:</label>
      <select value={currentSorting} onChange={handleChange}>
        {sortingOptions.map((option) => (
          <option key={option.id} value={option}>
            {capitalizeFirstLetter(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortOptions;

