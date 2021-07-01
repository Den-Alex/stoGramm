import s from "./Users.module.css";
import userPhoto from "../../images/images.png";
import React from "react";
import {UserType} from "../redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    // setCurrentPage: (currentPage: number) => void
    // setUsersTotalCount: (totalUsersCount: number) => void
    // setUsers: (users: Array<UserType>) => void
}
export const Users = (props: UsersPropsType ) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.users}>
            <div>
                {
                    pages.map(p => {
                        // @ts-ignore/////////////////////////////
                        return <span className={props.currentPage === p && s.usersPage}
                                     onClick={(e) => {
                                         props.onPageChanged(p)
                                     }
                                     }
                        >{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                        </div>
                        <div>
                            {u.follwed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}