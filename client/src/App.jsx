import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/views/Home";
import CardHomeDetil from "./components/views/CardHomeDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/api/digimons" element={<Home />} />
        <Route path="/api/digimons/digimon" element={<CardHomeDetil/>}/>
        <Route path="/api/*" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

