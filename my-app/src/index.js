import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Home from './pages/home.js';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById("root")
);