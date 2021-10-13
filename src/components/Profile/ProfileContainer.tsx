import React from 'react';
import s from './Profile.module.css'
import {PostsType} from "./MyPosts/Post/Posts";
import {ActionsType} from "../redux/store";
import {Profile} from './Profile';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {setUserProfile} from "../redux/profile-reducer";
import {withRouter} from "react-router-dom";


type ProfileType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        // let userId = this.props.match.params.userId
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type MapStateToPropsType = {
    profile: null
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
