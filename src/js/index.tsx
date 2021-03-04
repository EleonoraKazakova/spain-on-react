import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import '../styles/styles.scss';
import '../styles/flipcard.scss';
import '../styles/menu.scss';
import '../styles/slider.scss';
import '../styles/photoblock.scss';
import '../styles/form.scss';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
)