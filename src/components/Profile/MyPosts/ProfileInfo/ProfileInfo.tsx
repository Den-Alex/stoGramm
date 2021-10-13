import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../Preloader/Preloader";


type ProfileInfoType = {
    profile: any // пофиксить

}
export function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div className={s.item}>
                <img src="https://legko.com/disk/2/blogHQ/3c/3c108a4722d5526974d6b14bc7382543.jpg"/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                ava 
            </div>
        </div>
    )
}