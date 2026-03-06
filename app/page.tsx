"use client";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about/page';
import Main from './main/Main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}