import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from "./components/Profile/Profile";

import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

// type AppType = {
//     store: StoreType
// }
export const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path='/profile'
                   render={() => <Profile
                       // posts={props.store.getState().profilePage.posts}
                       //                    newPostText={props.store.getState().profilePage.newPostText}
                       //                    dispatch={props.store.dispatch.bind(props.store)}
                   />}/>
            <Route path='/dialogs'
                   render={() => <DialogsContainer
                       // store={props.store}
                   />}/>
            <Route path='/users'
                   render={() => <UsersContainer />}/>
        </div>

    );
}


