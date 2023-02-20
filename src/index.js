import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) =>{

    root.render(
        <React.StrictMode>
            <App appState={state}

                 addPost = {addPost}
                 updateNewPostText={updateNewPostText}

                 updateNewMessageText = {updateNewMessageText}
                 addMessage ={addMessage}

            />

        </React.StrictMode>
    );
}
renderEntireTree(state);
subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

