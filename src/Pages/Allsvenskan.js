import React from "react";
import "../Service/AllsvenskanAPI.js";
import "./Allsvenskan.css";
import MatchBox from "../MatchBox.js";
import useFetch from "../Service/AllsvenskanAPI.js";

function Allsvenskan() {
  const [logos] = useFetch("teams", "");
  const [events] = useFetch("events", "&limit=10");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <div className="image-container border border-primary border-3">
            {logos.map((team, index) => (
              <div key={team.id} className="logo-list text-center">
                <img src={team.logos.small} alt={team.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-10">
          <h1>Allsvenskan Teams</h1>
          <div className="row event-container border border-warning border-3">
            {events.map((event) => (
              <MatchBox key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allsvenskan;
