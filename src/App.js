import React from 'react';
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import RouterComponent from './routes';
import AppWrapper from './components/AppWrapper'
import Dashboard from './routes/Dashboard';

const App = () => (
  <AppWrapper>
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  </AppWrapper>
);

export default App;

