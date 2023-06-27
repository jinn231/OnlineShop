import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ContextProvider } from './component/reducer/ContextProvider';
import reducer,{initialState} from './component/reducer/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider initialState={initialState} reducer={reducer} >
        <App />    
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
