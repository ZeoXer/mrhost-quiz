import React from "react";
import HotelCard from "./HotelCard";

const HotelList = ({ hotels }) => {
  const renderedHotels = hotels.map((hotel) => {
    return (
      <li key={hotel.title}>
        <HotelCard
          fig={hotel.fig}
          title={hotel.title}
          score={hotel.score}
          location={hotel.location}
          price={hotel.price}
          description={hotel.description}
        />
      </li>
    );
  });
  return <ul className="list-unstyled">{renderedHotels}</ul>;
};

export default HotelList;
