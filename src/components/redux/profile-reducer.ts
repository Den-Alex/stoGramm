import {ActionsType, PostsType, ProfilePageType} from "./store";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Rnknb", likesCount: 7},
        {id: 2, message: "Lrc i", likesCount: 8},
        {id: 3, message: "Dpkv", likesCount: 1},
        {id: 4, message: "Npoev", likesCount: 12},
    ],
    newPostText: "Deniska",
    profile: null
}

export const profileReducer = (state = initialState, action: any): ProfilePageType => {


    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 3
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
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
export let setUserProfile = (profile: string) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}


