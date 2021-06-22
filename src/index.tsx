import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./components/redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { StoreContext } from './StoreContext';


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree()
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
