import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

type ProfileType = {
    profile: null
}
export function Profile(props: ProfileType) {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}