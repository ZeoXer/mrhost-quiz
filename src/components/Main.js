import React from "react";
import HotelList from "./HotelList";
import InfoBar from "./InfoBar";

const Main = ({ hotels,changeOrder }) => {
  return (
    <div>
      <InfoBar amount={hotels.length} changeOrder={changeOrder} />
      <HotelList hotels={hotels} />
    </div>
  );
};

export default Main;
