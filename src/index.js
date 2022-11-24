import React from 'react';
import { Router } from './routes';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
