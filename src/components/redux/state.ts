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
export type MessagesType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesType
    sidebar: Object
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType
export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Rnknb", likesCount: 7},
                {id: 2, message: "Lrc i", likesCount: 8},
                {id: 3, message: "Dpkv", likesCount: 1},
                {id: 4, message: "Npoev", likesCount: 12},
            ],
            newPostText: "Deniska"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Denis"},
                {id: 2, name: "Marina"},
                {id: 3, name: "Elena"},
                {id: 4, name: "Natascha"}
            ],
            messages: [
                {id: 1, message: "Ibuhv ygh"},
                {id: 2, message: "Prdvtr"},
                {id: 3, message: "Srbl l"},
                {id: 4, message: "M[ok ss"},
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    // addPost() {
    //     let newPost: PostsType = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 3
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber();///////Уточнить
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber();
    // },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 3
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}
export let addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export let updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}


// export let state: StateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: "Rnknb", likesCount: 7},
//             {id: 2, message: "Lrc i", likesCount: 8},
//             {id: 3, message: "Dpkv", likesCount: 1},
//             {id: 4, message: "Npoev", likesCount: 12},
//         ],
//         newPostText: "Denisks"
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
//         ]
//     },
//     sidebar: {}
// }
// export let addPost = () => {
//     let newPost: PostsType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 3
//     }
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     onChangeRender();
// }
// export let updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     onChangeRender();
// }
// export let subscribe = (observer: () => void) => {
//     onChangeRender = observer;
// }