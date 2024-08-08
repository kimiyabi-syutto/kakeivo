import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { CameraAlt, CalendarMonth, Equalizer, Settings } from '@mui/icons-material';

import { Home } from "./components/home";
import { CalendarPage } from "./components/calendar";
import { Graph } from "./components/graph";
import { Camera } from "./components/camera";
import { Setting } from "./components/setting";

function App({ signOut }) {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <BottomNavigation showLabels>
          <BottomNavigationAction component={Link} to="/camera" icon={<CameraAlt />} />
          <BottomNavigationAction component={Link} to="/calendar" icon={<CalendarMonth />} />
          <BottomNavigationAction component={Link} to="/graph" icon={<Equalizer />} />
          <BottomNavigationAction component={Link} to="/setting" icon={<Settings />} />
        </BottomNavigation>
      </header>
    </div>
    </BrowserRouter>
  );
}

//export default App;
export default withAuthenticator(App);
