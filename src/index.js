import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CountReducer from './store/reducers/count.reducer';
import { createStore } from 'redux';
import './style.css';
import App from './App';
const store = createStore(CountReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
