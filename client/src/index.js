import React from 'react'
import ReactDom from "react-dom"
import App from './App'
// import {Provider} from "react-redux"
// import store from './toolkit/store';
import "core-js/stable";
import "regenerator-runtime/runtime"; 


ReactDom.render(
    // <Provider store = {store}>
    <App />,
    // </Provider>,
document.getElementById('root'))