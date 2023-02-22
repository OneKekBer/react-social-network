import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from "./redux/redux-store";
import storeContext from "./storeContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <storeContext.Provider value={store}>
                <App
            />
            </storeContext.Provider>

        </React.StrictMode>
    );
}
renderEntireTree(store.getState());


store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

