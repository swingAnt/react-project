import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from '@/store'
import { Provider } from 'react-redux'
import './index.module.scss'
console.log('process.env.REACT_APP_ENV', process.env.REACT_APP_ENV)
if (process.env.REACT_APP_ENV=== 'development') {
  require('@/mock/index')
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals(root);
