import React from 'react';
import ReactDOM from 'react-dom';
import "reactstrap/dist/reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/menu-card.css"
import Main from './Components/MainComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
