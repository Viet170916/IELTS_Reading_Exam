import React from 'react';
import ReactDOM from 'react-dom/client';
import './Layouts/css/index.css';
import App from './Layouts/App';
import reportWebVitals from './reportWebVitals';
import './Layouts/Header/Header'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <App/>
    </>
);
reportWebVitals();
