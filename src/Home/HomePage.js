import { useRef } from "react";
import sportbg from "./sportbg.png";
import MatchBox from "../MatchBox";

function HomePage() {
  return (
    <>
      <div
        id="bild"
        className="container-fluid text-center d-flex align-items-center justify-content-center"
      >
        <img
          src={sportbg}
          className="img-fluid centered-image"
          alt="Sport Background"
        />
      </div>
    </>
  );
}

export default HomePage;
