import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {PostsType} from "./Post/Posts";
import { Dispatch } from 'redux';


type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export type MapToPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType=> {
    return {
        addPost: () => {////////Уточнить крейтеры - нужно ли менять местами
            dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);