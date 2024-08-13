import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EventList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://crudapi.co.uk/api/v1/Object", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((res) => {
        setData(res.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Events List</h1>
      <div className="bg-gray-100 p-4 rounded-md">
        <ul className="space-y-4">
          {data.map((item, index) => (
            <li key={index} className="p-4 bg-white rounded-md shadow-md">
              <Link to={`/event/${item._uuid}`}>
                <h2 className="text-xl font-bold">{item.eventName}</h2>
              </Link>
              <p className="text-gray-500">Venue: {item.eventVenue}</p>
              <p className="text-gray-700">{item.eventDescription}</p>
              <p className="text-gray-500">
                Start: {new Date(item.eventStart).toLocaleString()}
              </p>
              <p className="text-gray-500">
                End: {new Date(item.eventEnd).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/" className="underline cursor-pointer text-indigo">
        Add Events
      </Link>
    </div>
  );
};

export default EventList;
