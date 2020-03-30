import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import App from './App';

// import i18n (needs to be bundled ;))
import './i18n';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
