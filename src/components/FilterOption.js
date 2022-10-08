import React from "react";

const FilterOption = ({ option, onOptionClick, optionKey }) => {
  return (
    <li className="d-flex align-items-center mb-2">
      <input
        type="checkbox"
        style={{ width: "20px", height: "20px", cursor: "pointer" }}
        id={option}
        onClick={() => onOptionClick(optionKey)}
      />
      <label htmlFor={option} className="ms-2" style={{ cursor: "pointer" }}>
        {option}
      </label>
    </li>
  );
};

export default FilterOption;
