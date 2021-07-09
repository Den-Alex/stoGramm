import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {
    follow,
    setCurrentPage, setIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow,
    UserType
} from '../redux/users-reducer';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import preloader from '../../images/preloader.gif'
import s from "./Users.module.css";
import {Preloader} from '../Preloader/Preloader';

export type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalUsersCount: number) => void
    setIsFetchin: (isFetching: boolean) => void
}
type UsersAPIContainerType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (totalUsersCount: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
}

export class UsersAPIContainer extends React.Component<UsersAPIContainerType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count = 
        ${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }

    onPageChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setUsersTotalCount: (totalCount: number) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         setIsFetchin: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }
export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    setIsFetching
})(UsersAPIContainer);
















