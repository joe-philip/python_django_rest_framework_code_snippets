import React from 'react';
import ReactDOM from 'react-dom/client';
import Description from './components/description/component';
import Features from './components/features/component';
import Installation from './components/installation/component';
import MainHeading from './components/main_heading/component';
import Requirements from './components/requirements/component';
import Usage from './components/usage/component';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainHeading />
    <Description />
    <Features />
    <Requirements />
    <Installation />
    <Usage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
