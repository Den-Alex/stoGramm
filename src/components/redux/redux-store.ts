import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {DialogsPageType, ProfilePageType, StateType, StoreType} from "./store";

// type Reducers1Type = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: Object
// }
export type ReducersType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store: ReducersType = createStore(reducers)