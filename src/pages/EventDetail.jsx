import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useLeafletMap from "../hooks/useLeafletMap";

const EventDetail = () => {
  // const { events, setEvents } = useEvents();
  const [event, setEvent] = useState({});
  const mapRef = useLeafletMap(event.latitude, event.longitude, {
    zoom: 13,
    popupText: event.location,
  });

  const { id } = useParams();

  // Fetch events from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/events/${id}`);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        console.log("event data", data);
        // return data;
        setEvent((prev) => {
          return {
            ...prev,
            ...data,
          };
        });
        // return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    };

    fetchData();
  }, [id]);

  console.log("event data", event);
  return (
    <div className="card card-lg  bg-base-100 max-h-2/3 shadow-sm  transition-transform duration-200 hover:scale-105 hover:drop-shadow-[0_0_10px_gray]  border rounded-lg space-y-2 pt-2  max-w-2/3 mx-auto my-8">
      <div className="card-body px-0 py-0 space-y-2 items-center text-center  ">
        <h2 className="card-title border-b border-b-gray-300">{event.title}</h2>

        <p className="card-text ">{event.description}</p>

        <p>
          {event.date &&
            event.date.split("T")[0] +
              " At " +
              event.date.split("T")[1].split(":")[0] +
              ":" +
              event.date.split("T")[1].split(":")[1]}
        </p>
        <p>{event.location}</p>
      </div>

      <div
        ref={mapRef}
        className="block object-contain w-full bg-white h-full aspect-square"
      ></div>
    </div>
  );
};

export default EventDetail;
