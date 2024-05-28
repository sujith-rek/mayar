import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jokes from './components/Jokes';
import Games from './components/Games';
import Idle from './components/Idle';
import Cat from './components/Cat';
import Nav from "./components/Default";
import Landscape from "./components/Landscape";
import './App.css';

function App() {
  return (
    <Router>
      <div className="nav">
        <Nav />
      </div>
      <div className="main">
        <Routes>
          <Route path="/joke" element={<Jokes />} />
          <Route path="/game" element={<Games />} />
          <Route path="/idle" element={<Idle />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/" element={<Landscape />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;