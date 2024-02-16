
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Easy from '../Componets/EasyGame/Easy';
import Normal from '../Componets/NormalGame/Normal';
import Home from '../Componets/Homepage/Home';
import Start from '../Componets/StartGame/Start';

function App() {
  return (
    <BrowserRouter basename={'/Games.React'}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Navigate to="/start" replace />} />
          <Route exact path="/easy" element={<Easy/>} />
          <Route exact path="/normal" element={<Normal />} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/start" element={<Start />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
