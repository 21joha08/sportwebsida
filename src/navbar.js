import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      {/* <img id="logo" src={sportfusionImage} alt="SportFusion Logo" /> */}
      <button id="home-logo" onClick={ () => { 
        window.location.reload();
      }}><h3 a href="./App.js">Sportfusion</h3></button>
      <nav ref={navRef}>
        <a href="/#" className="sport">Fotboll</a>
        <a href="/#" className="sport">Innebandy</a>
        <a href="/#" className="sport">Ishockey</a>
        <a href="/#" className="sport">About us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}



export default Navbar;
