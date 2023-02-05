import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import  store  from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {  HashRouter } from 'react-router-dom';
import './lib/index'
import './i18n/index'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <HashRouter hastype='hasbang' >
    <Provider store={store}>


      <App  />

 
    </Provider>
    </HashRouter>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
