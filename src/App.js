import React from "react";
import Header from "./components/header/header";
import "./App.css";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";







const App = (props) => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Nav state = {props.appState.SideBar}/>
                <div className='wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile ProfilePage = {props.appState.ProfilePage}

                                                                 addPost = {props.addPost}
                                                                 updateNewPostText ={props.updateNewPostText}/>}/>



                        <Route path="/dialogs/*" element={<Dialogs state = {props.appState.DialogsPage}

                                                                   updateNewMessageText = {props.updateNewMessageText}
                                                                   addMessage = {props.addMessage}
                                                                   newMessageText = {props.appState.DialogsPage.newMessageText}
                        />} />

                    </Routes>


                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;

