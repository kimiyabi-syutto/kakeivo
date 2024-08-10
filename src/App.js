import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { CameraAlt,AppRegistration, CalendarMonth, Equalizer, Settings } from '@mui/icons-material';

import { Home } from "./components/home";
import { CalendarPage } from "./components/calendar";
import { Graph } from "./components/graph";
import { Camera } from "./components/camera";
import { Scribe } from "./components/scribe";
import { Setting } from "./components/setting";

function App({ signOut }) {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/scribe" element={<Scribe />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/setting" element={<Setting signOut />} />
        </Routes>
        <br/><br/>
      </header>
    </div>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction component={Link} to="/camera" icon={<CameraAlt />} />
        <BottomNavigationAction component={Link} to="/scribe" icon={<AppRegistration />} />
        <BottomNavigationAction component={Link} to="/calendar" icon={<CalendarMonth />} />
        <BottomNavigationAction component={Link} to="/graph" icon={<Equalizer />} />
        <BottomNavigationAction component={Link} to="/setting" icon={<Settings />} />
      </BottomNavigation>
    </Paper>
    </BrowserRouter>
  );
}

//export default App;
export default withAuthenticator(App);
