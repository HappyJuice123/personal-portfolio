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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAbout()
      .then((data) => {
        setAbout(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(true);
      });
  }, []);

  return (
    <div className="App">
      <Navbar about={about} />

      <Routes>
        <Route
          path="/"
          element={<Home about={about} isLoading={isLoading} />}
        />
        <Route
          path="/about"
          element={<About about={about} isLoading={isLoading} />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact about={about} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
