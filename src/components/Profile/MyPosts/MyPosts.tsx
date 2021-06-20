import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Posts, PostsType} from "./Post/Posts";
import {ActionsType, addPostAC, updateNewPostTextAC} from "../../redux/state";

export type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
    // addPost: (nexPostText: string) => void
    // updateNewPostText: (newText: string) => void
}



export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} id={p.id}
                                                    key={p.id}/>);

    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        // props.addPost(props.newPostText);////до урока 38
        // props.dispatch({type: 'ADD-POST'});//////урок 38
        props.dispatch(addPostAC());//////урок 39 Прокидываем экшен крейторы
    }
    let onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateNewPostText(e.currentTarget.value);////до урока 38
        // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value});/////урок 38
        props.dispatch(updateNewPostTextAC(e.currentTarget.value));/////урок 39
    }
    return (
        <div className={s.content}>
            <div>
                My post
                <div>
                    <textarea onChange={onChange} value={props.newPostText}/>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}