import "./App.scss";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Trial from "./components/Trial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Benefits />
      <Collaboration />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
