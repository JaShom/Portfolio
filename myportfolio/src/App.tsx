import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.page'
import Contact from './pages/Contact.page'
import AboutMe from './pages/AboutMe.page'
import Projects from './pages/Projects.page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/aboutme" element={<AboutMe />}/>
      <Route path="/projects" element={<Projects />}/>
    </Routes>
  );
}

export default App;
