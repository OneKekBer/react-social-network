import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) =>{

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
