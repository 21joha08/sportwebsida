import React, { useState, useEffect } from "react";
import "../Service/LeagueAPI.js";
import "./League.css";
import MatchBox from "../MatchBox.js";
import useFetch from "../Service/LeagueAPI.js";

function League({ leagueName }) {
  const leagueIds = {
    Allsvenskan: "124439",
    Superettan: "119513",
    Damallsvenskan: "123935",
    Superligan: "121413",
    SHL: "108487",
  };

  const leagueId = leagueIds[leagueName];
  console.log(leagueId);

  const [logos] = useFetch(leagueId + "/", "teams", "");
  const [events] = useFetch(leagueId + "/", "events", "&limit=100");
  const [selectedTeamId, setSelectedTeamId] = useState(null); // State to store selected team ID

  // Function to handle the image click and update the selected team
  const handleImageClick = (teamId) => {
    // If the selected team is the same as the one clicked, reset it
    if (selectedTeamId === teamId) {
      setSelectedTeamId(null);
    } else {
      // Otherwise, select the clicked team
      setSelectedTeamId(teamId);
    }
  };

  // Filter events based on the selected team ID
  const filteredEvents = selectedTeamId
    ? events.filter(
        (event) =>
          event.homeTeam.id === selectedTeamId ||
          event.visitingTeam.id === selectedTeamId
      )
    : events;

  // Use useEffect to reset selectedTeamId when leagueId changes or component mounts
  useEffect(() => {
    setSelectedTeamId(null);
  }, [leagueId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="image-container">
            {logos.map((team, index) => (
              <div key={team.id} className="logo-list text-center">
                <img
                  id="logga"
                  src={team.logo}
                  alt={team.name}
                  onClick={() => handleImageClick(team.id)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-10 text-center">
          <h1>{leagueName} Teams</h1>
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

export default League;
