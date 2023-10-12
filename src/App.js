import "./App.css";
import Navigation from "./Navigation";
import HomePage from "./Home/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Allsvenskan from "./Pages/Allsvenskan";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "26192887ec48f76ab54167238ae16688";
    const apiUrl =
      "https://api.everysport.com/v1/sports?offset=0&limit=50&apikey=";

    fetch(apiUrl + apiKey)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/allsvenskan" element={<Allsvenskan />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
