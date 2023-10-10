import { useRef } from "react";
import sportbg from "./sportbg.png";
import MatchBox from "../MatchBox";

function HomePage(){
    return (
        <>
        <div id="bild" className="container-fluid text-center">
            <img src={sportbg} className="img-fluid"></img>
            
        </div>
        <MatchBox />
        </>
    )
}

export default HomePage;