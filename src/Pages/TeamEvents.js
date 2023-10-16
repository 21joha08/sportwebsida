import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Service/AllsvenskanAPI.js";

function TeamEvents() {
  const { id } = useParams(); // Get the team ID from the URL
  const [events] = useFetch("events?team" + id);
  return (
    <div>
      <h1>Events for Team ID {id}</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeamEvents;