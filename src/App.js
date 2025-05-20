import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LessonIntro from './pages/LessonIntro';
import LessonCRR from './pages/LessonCRR';
import Mindmap from './pages/Mindmap';

import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson-intro" element={<LessonIntro />} />
        <Route path="/lesson-crr" element={<LessonCRR />} />
        <Route path="/mindmaps" element={<Mindmap />} />
      </Routes>
    </Router>
  );
}

export default App;