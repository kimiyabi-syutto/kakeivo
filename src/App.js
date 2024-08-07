import React from 'react';
import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home } from "./components/home";
import { Camera } from "./components/camera";

function App({ signOut }) {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Authenticated!! from V3</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={signOut}>Sign Out</Button>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/camera">カメラ起動</Link>
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camera" element={<Camera />} />
        </Routes>

      </header>
    </div>
    </BrowserRouter>
  );
}

//export default App;
export default withAuthenticator(App);
