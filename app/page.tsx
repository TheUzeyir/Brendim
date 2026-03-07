"use client";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about/page';
import Main from './main/Main';
import Login from './registration/page';
import SignUp from './registration/signIn';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}