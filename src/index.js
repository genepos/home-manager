import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/dashBoard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();