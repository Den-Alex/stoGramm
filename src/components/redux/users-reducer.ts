import {ActionsType} from "./store";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
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
    isFetching: boolean
}
let initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 1500,
    currentPage: 1,
    isFetching: true
}

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {


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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}
export type FollowType = ReturnType<typeof follow>
export type UnFollowType = ReturnType<typeof unfollow>
export type setUsersType = ReturnType<typeof setUsers>
export type setCurrentPagetype = ReturnType<typeof setCurrentPage>
export type UsersTotalCount = ReturnType<typeof setUsersTotalCount>
export type toggleIsFetchingType = ReturnType<typeof setIsFetching>

export let follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export let unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export let setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export let setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export let setUsersTotalCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        totalUsersCount
    } as const
}
export let setIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}



