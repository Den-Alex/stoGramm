import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Posts, PostsType} from "./Post/Posts";
import {ActionsType, StoreType} from "../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {store} from "../../redux/redux-store";

export type MyPostsContainerType = {
    // posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ActionsType) => void
    store: StoreType
    children: React.ReactNode
}


export const MyPostsContainer = (props: MyPostsContainerType) => {


    return (
        <StoreContext.Consumer value={props.store}> {
            (store) => {
                let addPost = () => {
                    // props.addPost(props.newPostText);////до урока 38
                    // props.dispatch({type: 'ADD-POST'});//////урок 38
                    props.store.dispatch(addPostAC());//////урок 39 Прокидываем экшен крейторы
                }
                let onChange = (newText: string) => {
                    // props.updateNewPostText(e.currentTarget.value);////до урока 38
                    // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value});/////урок 38
                    // props.dispatch(updateNewPostTextAC(e.currentTarget.value));/////урок 39
                    props.store.dispatch(updateNewPostTextAC(newText));/////урок 43
                }
                return (
                    <MyPosts posts={props.store.getState().profilePage.posts}
                             updateNewPostText={onChange}
                             addPost={addPost}
                             newPostText={props.store.getState().profilePage.newPostText}/>)
            }
        }
        </StoreContext.Consumer>
    )
}