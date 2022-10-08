import React, { useState } from "react";

const InfoBar = ({ amount, changeOrder }) => {
  const [currentOption, setCurrentOption] = useState("為您精選");

  const onSortingClick = (e) => {
    e.preventDefault();
    setCurrentOption(e.target.textContent);
    changeOrder(e.target.textContent);
  };

  return (
    <div className="d-flex justify-content-between mb-2">
      <h3 className="fw-bold">找到 {amount} 間住宿 </h3>
      <div className="dropdown">
        <a
          className="btn dropdown-toggle border border-1"
          href="./#"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {currentOption}
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a
              className="dropdown-item"
              onClick={(e) => onSortingClick(e)}
              href="./#"
            >
              為您精選
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={(e) => onSortingClick(e)}
              href="./#"
            >
              評分由高至低
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={(e) => onSortingClick(e)}
              href="./#"
            >
              評分由低至高
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={(e) => onSortingClick(e)}
              href="./#"
            >
              價格由高至低
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={(e) => onSortingClick(e)}
              href="./#"
            >
              價格由低至高
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoBar;
