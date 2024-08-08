import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
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
          <Route path="/setting" element={<Setting signOut />} />
        </Routes>
        <br/><br/>
      </header>
    </div>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ margin:'auto' }}>
        <IconButton color="inherit" component={Link} to="/camera"> <CameraAlt /></IconButton>
        <IconButton color="inherit" component={Link} to="/calendar"> <CalendarMonth /></IconButton>
        <IconButton color="inherit" component={Link} to="/graph"> <Equalizer /></IconButton>
        <IconButton color="inherit" component={Link} to="/setting"> <Settings /></IconButton>
        </Toolbar>
      </AppBar>
    </BrowserRouter>
  );
}

//export default App;
export default withAuthenticator(App);
