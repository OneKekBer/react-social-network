import React from "react";
import Header from "./components/header/header";
import "./App.css";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Nav

                />

                <div className='wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile

                        />}/>

                        <Route path="/dialogs/*" element={<DialogsContainer


                        />} />

                    </Routes>


                </div>
            </div>
        </BrowserRouter>

    );
};

export default App;

