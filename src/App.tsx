import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from "./components/Profile/Profile";

import {StoreType} from "./components/redux/state";

type AppType = {
    store: StoreType
}
export const App = (props: AppType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route path='/profile'
                   render={() => <Profile posts={props.store._state.profilePage.posts}
                                          newPostText={props.store._state.profilePage.newPostText}
                                          dispatch={props.store.dispatch.bind(props.store)}
                                          // addPost={props.store.addPost.bind(props.store)}
                                          // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                   />}/>
            <Route path='/dialogs'
                   render={() => <Dialogs dialogs={props.store._state.dialogsPage.dialogs}
                                                          messages={props.store._state.dialogsPage.messages}/>}/>
        </div>

    );
}


