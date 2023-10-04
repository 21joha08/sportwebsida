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
      <h3>Sportfusion</h3>
      <nav ref={navRef}>
        <a href="/#">Fotboll</a>
        <a href="/#">Innebandy</a>
        <a href="/#">Ishockey</a>
        <a href="/#">About us</a>
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
