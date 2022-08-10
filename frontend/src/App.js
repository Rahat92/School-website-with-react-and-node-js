import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import Home from './components/Home';
import AboutSchool from './components/AboutSchool/AboutSchool';
import SlideShow from './components/SlideShow/SlideShow';
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
  return (
    <Router>
      <div className="App">
          <SlideShow />
          <NavigationBar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/about-school" element = {<AboutSchool />} />
            <Route path = "/adminpanel" element = {<AdminPanel />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
