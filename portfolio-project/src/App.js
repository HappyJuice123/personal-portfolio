import "./App.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
