import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

// type Reducers1Type = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: Object
// }
export type ReducerType = typeof reducer
export type AppStateType = ReturnType<ReducerType>
let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export let store = createStore(reducer)
// export type StoreType = typeof store;