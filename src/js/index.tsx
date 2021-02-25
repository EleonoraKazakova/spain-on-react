import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../styles/styles.scss';
import '../styles/flipcard.scss';
import '../styles/menu.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
)