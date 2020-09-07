import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'
import './scss/app.scss';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <Route path='/' component={App} />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
