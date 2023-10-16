import React from "react";
import "../Service/AllsvenskanAPI.js";
import "./Allsvenskan.css";
import MatchBox from "../MatchBox.js";
import useFetch from "../Service/AllsvenskanAPI.js";
import { Link } from "react-router-dom";

function Allsvenskan() {
  const [logos] = useFetch("teams", "");
  const [events] = useFetch("events", "&limit=10");

  return (
    <>
      <div>
        <h1>Allsvenskan Teams</h1>
      </div>
      <div className="container-fluid">
        <div className="image-container border border-primary border-3">
          {logos.map((team, index) => (
            <div key={team.id} className="logo-list text-center">
              <Link to={`/team/${team.id}`}>
                <img
                  src={team.logos.small}
                  alt={team.name}
                  id={`team-logo-${team.id}`}
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="row event-container border border-warning border-3 p-0 m-0">
          {events.map((event) => (
            <MatchBox key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Allsvenskan;
