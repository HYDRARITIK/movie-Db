import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import SingleMoviePage from './SingleMoviePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
     
        <App />
    </AppProvider>
  </React.StrictMode>
);
