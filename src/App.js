import React from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/headerContainer";
import LoginContainer from "./components/login/loginContainer";
import {connect} from "react-redux";
import {getMyProfileThunkCreator} from "./redux/profile-reducer";
import {authMeThunkCreator} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Preloader from "./components/common/preloader/preloader";


// export function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{location, navigate, params}}
//             />
//         );
//     }
//     return ComponentWithRouterProp;
// }

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <HeaderContainer/>
                    <Nav

                    />

                    <div className='wrapper-content'>
                        <Routes>
                            <Route path="/profile/:profileId?" element={<ProfileContainer

                            />}/>

                            <Route path="/dialogs/*" element={<DialogsContainer

                            />}/>
                            <Route path="/users/" element={
                                <UsersContainer/>
                            }/>

                            <Route path="/login/" element={
                                <LoginContainer s/>

                            }/>

                        </Routes>


                    </div>
                </div>
            </BrowserRouter>

        );




    }
}

let mapDispatchToProps = (state) => ({
    initialized: state.app.initialized,

})


export default compose(
    // withRouter,
    connect(mapDispatchToProps, {
        getMyProfile: getMyProfileThunkCreator,
        authMe: authMeThunkCreator,
        initializeApp,

    }),



)(App)
