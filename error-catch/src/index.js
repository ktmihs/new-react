import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/browser"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: "https://f8732f934e834b1e8115789b43b16e19@o941304.ingest.sentry.io/5890212",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
