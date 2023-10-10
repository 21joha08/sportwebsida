import React from "react";
import "./matchBox.css";
import gala from "./gala.png";
import united from "./united.png";
function MatchBox() {
  return (
    <div className="row m-4">
      <div
        className="container border border-success mt-4 col-6"
        id="main-container"
      >
        <div className="row">
          <div className="date col-12">12-12-2009 15.00</div>
        </div>
        <div className="row">
          <div className="team-logo col-6">
            <img className="logo-img" src={united} alt="logo"></img>
          </div>
          <div className="team-logo col-6">
            <img className="logo-img" src={united} alt="logo"></img>
          </div>
        </div>
        <div className="row">
          <div className="score col-12">
            <p>Resultat:</p>
            <h1>3 - 2</h1>
          </div>
        </div>
        <div className="row">
          <div className="arena col-12">en bra arena</div>
        </div>
      </div>

      <div
        className="container border border-success mt-4 col-6"
        id="main-container"
      >
        <div className="row">
          <div className="date col-12">12-12-2009 15.00</div>
        </div>
        <div className="row">
          <div className="team-logo col-6 ">
            <img className="logo-img" src={gala} alt="logo"></img>
          </div>
          <div className="team-logo col-6">
            <img className="logo-img" src={united} alt="logo"></img>
          </div>
        </div>
        <div className="row">
          <div className="score col-12">
            <p>Resultat:</p>
            <h1>3 - 2</h1>
          </div>
        </div>
        <div className="row">
          <div className="arena col-12">en bra arena</div>
        </div>
      </div>
      <div
        className="container border border-success mt-4 col-6"
        id="main-container"
      >
        <div className="row">
          <div className="date col-12">12-12-2009 15.00</div>
        </div>
        <div className="row">
          <div className="team-logo col-6">
            <img className="logo-img" src={gala} alt="logo"></img>
          </div>
          <div className="team-logo col-6">
            <img className="logo-img" src={united} alt="logo"></img>
          </div>
        </div>
        <div className="row">
          <div className="score col-12">
            <p>Resultat:</p>
            <h1>3 - 2</h1>
          </div>
        </div>
        <div className="row">
          <div className="arena col-12">en bra arena</div>
        </div>
      </div>
    </div>
  );
}

export default MatchBox;
