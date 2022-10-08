import React from "react";
import FilterOption from "./FilterOption";

const FilterBar = ({ onOptionClick }) => {
  return (
    <div className="border border-1 rounded-1">
      <div className="border-bottom px-3 pt-4 fs-5 fw-bold">
        透過以下分類搜尋：
      </div>
      <div className="px-3">
        <h5 className="fw-bold my-3">飯店設施</h5>
        <ul className="list-unstyled fs-5">
          <FilterOption
            option="免費無線網路"
            onOptionClick={onOptionClick}
            optionKey="Wifi"
          />
          <FilterOption
            option="禁菸客房"
            onOptionClick={onOptionClick}
            optionKey="noSmoke"
          />
          <FilterOption
            option="廚房"
            onOptionClick={onOptionClick}
            optionKey="kitchen"
          />
          <FilterOption
            option="洗衣房"
            onOptionClick={onOptionClick}
            optionKey="laundry"
          />
          <FilterOption
            option="停車場"
            onOptionClick={onOptionClick}
            optionKey="parking_area"
          />
          <FilterOption
            option="寵物友善"
            onOptionClick={onOptionClick}
            optionKey="pet_friendly"
          />
        </ul>
      </div>
    </div>
  );
};

export default FilterBar;
