// GroupingOptions.js

import React from 'react';

const GrpOptions = ({ currentGrouping, setCurrentGrouping }) => {
  const groupingOptions = ['status', 'user', 'priority'];

  const handleChange = (e) => {
    setCurrentGrouping(e.target.value);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="grouping-options">
      <label>Group by:</label>
      <select value={currentGrouping} onChange={handleChange}>
        {groupingOptions.map((option) => (
          <option key={option.id} value={option}>
            {capitalizeFirstLetter(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GrpOptions;
