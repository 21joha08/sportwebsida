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
import TeamEvents from "./Pages/TeamEvents.js";

function App() {
  
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/allsvenskan" element={<Allsvenskan />} />
          <Route path="/team/:id" component={TeamEvents} />
        </Routes>
      </Router>
    </>
  );
}

export default App;