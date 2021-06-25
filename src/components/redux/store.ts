import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer, updateNewMessageBodytAC, sendMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type PostsType = {
    message: string
    likesCount: number
    id: number
}
export type DialogsItemType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    id: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Object
}

export type ActionsType = AddPostActionType |
    UpdateNewPostTextActionType |
    UpdateNewMessageBodyActionType |
    SendMessageActionType

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodytAC>
export type SendMessageActionType = ReturnType<typeof sendMessageAC>

// export type StoreType = {
//     _state: StateType
//     getState: () => StateType
//     _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionsType) => void
// }


// export let store = {
    // _state: {
    //     profilePage: {
    //         posts: [
    //             {id: 1, message: "Rnknb", likesCount: 7},
    //             {id: 2, message: "Lrc i", likesCount: 8},
    //             {id: 3, message: "Dpkv", likesCount: 1},
    //             {id: 4, message: "Npoev", likesCount: 12},
    //         ],
    //         newPostText: "Deniska"
    //     },
    //     dialogsPage: {
    //         dialogs: [
    //             {id: 1, name: "Denis"},
    //             {id: 2, name: "Marina"},
    //             {id: 3, name: "Elena"},
    //             {id: 4, name: "Natascha"}
    //         ],
    //         messages: [
    //             {id: 1, message: "Ibuhv ygh"},
    //             {id: 2, message: "Prdvtr"},
    //             {id: 3, message: "Srbl l"},
    //             {id: 4, message: "M[ok ss"},
    //         ],
    //         newMessageBody: "Den"
    //     },
    //     sidebar: {}
    // },
    // getState() {
    //     return this._state;
    // },
    // _callSubscriber() {
    //
    // },
    // subscribe(observer: () => void) {
    //     this._callSubscriber = observer;
    // },
    // dispatch(action) {
    //     this._state.profilePage = profileReducer(this._state.profilePage, action);
    //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    //     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    //     this._callSubscriber()
    // }
// }



