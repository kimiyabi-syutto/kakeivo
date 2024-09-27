import React from 'react';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home, CameraAlt,AppRegistration, CalendarMonth, Equalizer, Settings } from '@mui/icons-material';

import { HomePage } from "./components/home";
import { CalendarPage } from "./components/data_calendar";
import { Graph } from "./components/graph";
import { Camera } from "./components/camera_shot";
import { Scribe } from "./components/input_set";
import { Setting } from "./components/setting";

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// 画面が小さいとボトムバーからアイコンがはみ出るので、min-widthを上書き
const bnaSx = {
  minWidth: "0",
  padding: "6px 0"
};
function App({ signOut }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#009688',
//        contrastText: '#795548',
      },
      background: {
        default: '#0098ff',
      },
//      text: { primary: '#ff9800' },
    },
  });
  var link = [
    ["/", "", <HomePage />],
    ["/camera/*", "", <Camera />],
    ["/scribe/*", "", <Scribe />],
    ["/calendar/*", "", <CalendarPage />],
    ["/graph/*", "", <Graph />],
    ["/setting/*", "", <Setting signOut={signOut} />],
  ];
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
        <Routes>
          { link.map((v)=>{
            return <Route
            key={v[0]}
             path={v[0]} element={
            <div className="App">
              <header className="App-header">
                {v[2]}
              </header>
            </div>
            } />
          })}
        </Routes>
        <br/><br/>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation showLabels>
            <BottomNavigationAction component={Link} sx={bnaSx} to="/" icon={<Home />} />
            {/*<BottomNavigationAction component={Link} sx={bnaSx} to="/camera" icon={<CameraAlt />} />*/}
            <BottomNavigationAction component={Link} sx={bnaSx} to="/scribe" icon={<AppRegistration />} />
            <BottomNavigationAction component={Link} sx={bnaSx} to="/calendar" icon={<CalendarMonth />} />
            <BottomNavigationAction component={Link} sx={bnaSx} to="/graph" icon={<Equalizer />} />
            <BottomNavigationAction component={Link} sx={bnaSx} to="/setting" icon={<Settings />} />
          </BottomNavigation>
        </Paper>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}

//export default App;
export default withAuthenticator(App);
