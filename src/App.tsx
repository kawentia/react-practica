import React from 'react';
import './App.css';
import Desktop from "./components/Desktop";
import Desktop1 from "./components/Desktop1";
import Desktop2 from "./components/Desktop2";
import Desktop3 from "./components/Desktop3";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/Desktop" element={<Desktop />} />
        <Route path="/Desktop1" element={<Desktop1 />} />
        <Route path="/Desktop2" element={<Desktop2 />} />
        <Route path="/Desktop3" element={<Desktop3 />} />
        <Route path="/" element={<Desktop />} />
      </Routes>
    </div>

  );
};

export default App;