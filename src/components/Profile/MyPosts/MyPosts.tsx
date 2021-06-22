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

    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    let onAddPost = () => {
        props.addPost()
        // props.addPost(props.newPostText);////до урока 38
        // props.dispatch({type: 'ADD-POST'});//////урок 38
        // props.dispatch(addPostAC());//////урок 39 Прокидываем экшен крейторы
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);////до урока 38
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value});/////урок 38
        // props.dispatch(updateNewPostTextAC(e.currentTarget.value));/////урок 39
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