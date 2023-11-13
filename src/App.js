import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Pages
import LandingPage from "./pages/LandingPage";


// Components
import Header from "./components/header";
import Navbar from "./components/navbar";

import "./App.css";
import Profile from './pages/Profile'
import MovieDetail from "./pages/DetailMovie";


function App() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
  
  return (
    <div className="App">
      <Header />
      <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/movie-detail/:id" element={<MovieDetail/>} />
          </Routes>
      </Router>
    </div>
  );
}


export default App;