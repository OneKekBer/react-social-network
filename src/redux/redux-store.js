import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogReducer,
    SideBar: sidebarReducer,
    UsersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))//middleware нужен чтобы диспатчить thunk

window.store = store;
export default store