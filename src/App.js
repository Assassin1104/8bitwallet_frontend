import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mobile from './scenes/Mobile';
import About from './scenes/About';
import Contact from './scenes/Contact';
import Prices from './scenes/Prices';
import Status from './scenes/Status';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Mobile />} />
            <Route path="/home" element={<Mobile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
