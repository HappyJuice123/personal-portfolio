import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="overflow-auto" style={{ height: "85vh" }}>
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
