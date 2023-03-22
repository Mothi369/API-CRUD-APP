import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './CRUD/StateProvider';
import reducer, { initialState } from './CRUD/reducer';
//import { BrowserRouter } from 'react-router-dom';
//import "antd/dist/antd.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateProvider initialState={initialState} reducer={reducer}>

      <App />
    </StateProvider>
    
    
  </>
);


