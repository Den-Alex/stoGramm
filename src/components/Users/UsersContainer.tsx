import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../redux/users-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";

export type MapStateToPropsType = {
    users: Array<UserType>
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch):  MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);