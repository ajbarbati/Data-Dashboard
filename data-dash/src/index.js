import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/fart.scss";

const AppWithRouter = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>   
)

ReactDOM.render(<AppWithRouter/>, document.getElementById('root'))
serviceWorker.unregister();
