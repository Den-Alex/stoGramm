import {ActionsType, AddPostActionType, PostsType, ProfilePageType} from "./store";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Rnknb", likesCount: 7},
        {id: 2, message: "Lrc i", likesCount: 8},
        {id: 3, message: "Dpkv", likesCount: 1},
        {id: 4, message: "Npoev", likesCount: 12},
    ],
    newPostText: "Deniska"
}

export const profileReducer = (state = initialState , action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 3
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export let addPostAC = ()   => {
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


