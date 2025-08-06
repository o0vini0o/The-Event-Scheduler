import React, { createContext, useState, useEffect } from "react";

const EventContext = createContext();

export const EventContextProvider = ({ children }) => {
  // State to store the events
  const [events, setEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  // Fetch events from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/events");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        console.log("data", data);
        // return data;
        setEvents(data.results);
        setError(false);
        // return data;
      } catch (error) {
        console.error(error);
        setError(true);
        return null;
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <EventContext value={{ events, setEvents, isLoading, error }}>
      {children}
    </EventContext>
  );
};

export default EventContext;
