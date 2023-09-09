import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/views/Home";
import CardHomeDetil from "./components/views/CardHomeDetail";
import Mesage from "./components/views/Mesage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/api/message" element={<Mesage/>} />
        <Route path="/api/digimons" element={<Home />} />
        <Route path="/api/digimons/digimon" element={<CardHomeDetil/>}/>
        <Route path="/api/*" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

