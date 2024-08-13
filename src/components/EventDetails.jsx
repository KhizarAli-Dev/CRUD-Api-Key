import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams(); 
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://crudapi.co.uk/api/v1/Object/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((res) => {
        setEvent(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">{event.eventName}</h1>
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="text-gray-500">Venue: {event.eventVenue}</p>
        <p className="text-gray-700">{event.eventDescription}</p>
        <p className="text-gray-500">
          Start: {new Date(event.eventStart).toLocaleString()}
        </p>
        <p className="text-gray-500">
          End: {new Date(event.eventEnd).toLocaleString()}
        </p>
      </div>
      <Link to="/eventlist" className="underline cursor-pointer text-indigo">
        Back to Events List
      </Link>
    </div>
  );
};

export default EventDetails;
