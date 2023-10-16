import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Service/AllsvenskanAPI.js";
import "./Allsvenskan.css";
import MatchBox from "../MatchBox.js";
import useFetch from "../Service/AllsvenskanAPI.js";

function Allsvenskan() {
  const [logos] = useFetch("teams", "");
  const [events] = useFetch("events", "&limit=100");
  const [selectedTeamId, setSelectedTeamId] = useState(null); // State to store selected team ID

  // Function to handle the image click and update the selected team
  const handleImageClick = (teamId) => {
    setSelectedTeamId(teamId);
  };

  // Filter events based on the selected team ID
  const filteredEvents = selectedTeamId
    ? events.filter(
        (event) =>
          event.homeTeam.id === selectedTeamId ||
          event.visitingTeam.id === selectedTeamId
      )
    : events;

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="image-container">
            {logos.map((team, index) => (
              <div key={team.id} className="logo-list text-center">
                <img
                  src={team.logos.small}
                  alt={team.name}
                  onClick={() => handleImageClick(team.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-10 text-center">
          <h1>Allsvenskan Teams</h1>
          <div className="row event-container">
            {filteredEvents.map((event) => (
              <MatchBox key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allsvenskan;
