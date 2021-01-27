import 'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import {loadProduct} from './actions/productActions';

const store = configureStore();

store.dispatch(loadProduct());

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
