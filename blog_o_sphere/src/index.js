import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import '@quasar/extras/ionicons-v4/ionicons-v4.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// reportWebVitals();

serviceWorker.unregister();