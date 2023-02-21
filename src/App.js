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
                                                                 dispatch = {props.dispatch}


                        />}/>



                        <Route path="/dialogs/*" element={<Dialogs state = {props.appState.DialogsPage}

                                                                   dispatch = {props.dispatch}
                                                                   newMessageText = {props.appState.DialogsPage.newMessageText}
                        />} />

                    </Routes>


                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;

