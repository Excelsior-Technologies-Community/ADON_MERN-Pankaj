import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import ProjectDetail from "./Pages/ProjectDetail";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;
