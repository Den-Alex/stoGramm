import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from "./components/Profile/Profile";

import {StoreType} from "./components/redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppType = {
    store: StoreType
}
export const App = (props: AppType) => {

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
        </div>

    );
}


