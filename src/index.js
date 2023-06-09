import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import {BrowserRouter as  Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Components/ReduxStore/store';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);