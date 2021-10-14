import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from "./components/Profile/Profile";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

// type AppType = {
//     store: StoreType
// }
export const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path='/profile/:userId?' //:userId
                   render={() => <ProfileContainer/>}/>
            <Route path='/dialogs'
                   render={() => <DialogsContainer/>}/>
            <Route path='/users'
                   render={() => <UsersContainer />}/>
        </div>

    );
}


