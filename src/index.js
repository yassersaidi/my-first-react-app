import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import "reactstrap/dist/reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./css/main.css"
import "./css/menu-card.css"
import "./css/header.css"
import Main from './components/Main';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ChakraProvider>    
    <Router>
      <Main />
    </Router>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
