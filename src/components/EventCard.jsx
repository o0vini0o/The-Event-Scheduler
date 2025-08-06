import React from "react";
import { useNavigate } from "react-router";
import "leaflet/dist/leaflet.css"; // import leaflet css
import useLeafletMap from "../hooks/useLeafletMap";

const EventCard = ({
  id,
  title,
  description,
  date,
  location,
  latitude,
  longitude
}) => {
  const navigate = useNavigate();
  const mapRef = useLeafletMap(latitude, longitude, {
    zoom: 13,
    popupText: location
  });

  return (
    <div
      onClick={() => navigate(`/events/${id}`)}
      className="card card-lg  bg-base-100 h-full shadow-sm  transition-transform duration-200 hover:scale-105 hover:drop-shadow-[0_0_10px_gray]  border rounded-lg space-y-2 pt-2 "
    >
      <div className="card-body px-0 py-0 space-y-2 items-center text-center  ">
        <h2 className="card-title border-b border-b-gray-300 text-black">
          {title}
        </h2>

        <p className="card-text ">{description}</p>

        <p>
          {date.split("T")[0] +
            " At " +
            date.split("T")[1].split(":")[0] +
            ":" +
            date.split("T")[1].split(":")[1]}
        </p>
        <p className="text-black">{location}</p>
      </div>

      <figure>
        <div
          ref={mapRef}
          className="block object-contain w-full bg-white h-auto aspect-square"
        ></div>
      </figure>
    </div>
  );
};

export default EventCard;
