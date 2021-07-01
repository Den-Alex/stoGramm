import {ActionsType} from "./store";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    follwed: boolean
    name: string
    status: string
    location: LocationType
    photos: any///////////
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
let initialState: InitialStateType = {
    users: [
        // {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TYrQcRfQft6dHNf34RsvzWQn4qG-zb0-XA&usqp=CAU',
        //     follwed: true, fullName: "Den", status: "Vip", location: {city: "Vena", country: "Ausria"}},
        // {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TYrQcRfQft6dHNf34RsvzWQn4qG-zb0-XA&usqp=CAU',
        //     follwed: true, fullName: "Marina", status: "Super", location: {city: "Minsk", country: "Belarus"}},
        // {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TYrQcRfQft6dHNf34RsvzWQn4qG-zb0-XA&usqp=CAU',
        //     follwed: false, fullName: "Lena", status: "Norm", location: {city: "Mogilev", country: "Belarus"}},
        // {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TYrQcRfQft6dHNf34RsvzWQn4qG-zb0-XA&usqp=CAU',
        //     follwed: false, fullName: "Vika", status: "Norm", location: {city: "Mogilev", country: "Belarus"}}
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follwed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follwed: false};
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        default:
            return state;
    }
}
export type FollowType = ReturnType<typeof followAC>
export type UnFollowType = ReturnType<typeof unfollowAC>
export type setUsersType = ReturnType<typeof setUsersAC>
export type setCurrentPagetype = ReturnType<typeof setCurrentPageAC>
export type UsersTotalCount = ReturnType<typeof setUsersTotalCountAC>

export let followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export let unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export let setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export let setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export let setUsersTotalCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUsersCount
    } as const
}



