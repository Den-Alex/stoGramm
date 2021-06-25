import React from 'react';
import s from './Profile.module.css'
import {MyPosts, MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {PostsType} from "./MyPosts/Post/Posts";
import {ActionsType} from "../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

type ProfileType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType ) => void
}
export function Profile() {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
                // posts={props.posts}
                //      newPostText={props.newPostText}
                //      dispatch={props.dispatch}
                     // addPost={props.addPost}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}