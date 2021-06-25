

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
type LocationType = {
    city: string
    country: string
}
type UsersType = {
    id: number
    follwed: boolean
    fullName: string
    status: string
    location: LocationType
}
type InitialStateType = {
    users: Array<UsersType>
}
let initialState: InitialStateType = {
    users : [
        {id: 1, follwed: true, fullName: "Den", status: "Vip", location: {city: "Vena", country: "Ausria"}},
        {id: 2, follwed: true, fullName: "Marina", status: "Super", location: {city: "Minsk", country: "Belarus"}},
        {id: 3, follwed: false, fullName: "Lena", status: "Norm", location: {city: "Mogilev", country: "Belarus"}},
        {id: 4, follwed: false,fullName: "Vika", status: "Norm", location: {city: "Mogilev", country: "Belarus"}}
    ]
}

export const profileReducer = (state = initialState, action: any): InitialStateType => {


    switch (action.type) {
        case FOLLOW:
           return {
               ...state,
               users: state.users.map( u => {
                   if (u.id === action.userId) {
                       return {...u, follwed: true};
                   }
                   return u;
               })
           }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, follwed: false};
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}
export type FollowType = ReturnType<typeof followAC>
export type UnFollowType = ReturnType<typeof unfollowAC>
export type setUsersType = ReturnType<typeof setUsersAC>

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
export let setUsersAC = (users: any) => {
    return {
        type: SET_USERS,
        users
    } as const
}



