import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

// type Reducers1Type = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: Object
// }
export type ReducersType = typeof reducer
export type AppStateType = ReturnType<ReducersType>
let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(reducer)
// export type StoreType = typeof store;