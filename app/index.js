import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';


require('./index.css');


ReactDom.render(
    <App text="testing Reactjs with jsx configuration" />,
    document.getElementById('app')
)