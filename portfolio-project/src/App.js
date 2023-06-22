import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";

import { useState, useEffect } from "react";
import { getAbout } from "./backend/api";

function App() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    getAbout().then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <div className="App">
      <Navbar about={about} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About about={about} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact about={about} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
