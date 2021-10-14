import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Posts, PostsType} from "./Post/Posts";
import {ActionsType} from "../../redux/store";

export type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    // dispatch: (action: ActionsType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id}
                                                    key={p.id}/>);


    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }
    return (
        <div className={s.content}>
            <div>
                My post
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}