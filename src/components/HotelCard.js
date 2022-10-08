import React from "react";
import ScoreTag from "./ScoreTag";

const HotelCard = ({ fig, title, score, location, price, description }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-lg-4">
          <img src={fig} className="img-fluid" alt={title} />
        </div>
        <div className="col-lg-6">
          <div className="card-body">
            <h4 className="card-title fw-bold fs-5">{title}</h4>
            <span className="text-success fw-bold">
              <i className="fa-solid fa-location-dot me-2"></i>
              {location}
            </span>
            <p className="card-text">{description}...</p>
          </div>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-between align-items-end align-items-lg-center pe-3 pe-lg-0">
          <ScoreTag score={score} />
          <p className="fs-5 fw-bold">
            NT${price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            <span className="fs-6 text-black-50 ms-1">起</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
