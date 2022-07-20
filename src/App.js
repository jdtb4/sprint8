import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Starships from "./components/Starships/Starships";
import Welcome from "./components/Welcome/Welcome";
import Vehicles from "./components/Vehicles/Vehicles";
//import Layout from "./components/Layout/Layout";
import Planets from "./components/Planets/Planets";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/starships" element={<Starships />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
        <Route exact path="/planets" element={<Planets />} />
      </Routes>
    </Router>
  );
}

export default App;
