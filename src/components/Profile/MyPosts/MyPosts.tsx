import React from 'react';
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    <Posts message="DEnnn" likesCount={5}/>
                    <Posts message="YYYY" likesCount={10}/>
                </div>
            </div>
        </div>
    )
}