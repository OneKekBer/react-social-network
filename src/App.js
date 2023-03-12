import React from "react";

import "./App.css";
import Nav from "./components/nav/nav";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/headerContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer />
                <Nav

                />

                <div className='wrapper-content'>
                    <Routes>
                        <Route path="/profile/:profileId?" element={<ProfileContainer

                        />}/>

                        <Route path="/dialogs/*" element={<DialogsContainer


                        />} />
                        <Route path="/users/" element={
                            <UsersContainer />
                        } />

                    </Routes>


                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;

