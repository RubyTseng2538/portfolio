import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navigation from './Navigation';
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import About from './pages/about';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/project1' element={<Project1 />} />
          <Route path='/project2' element={<Project2 />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
