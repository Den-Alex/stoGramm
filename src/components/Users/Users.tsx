import s from './Users.module.css'
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
//     users: Array<UserType>
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: Array<UserType>) => void
// }
export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TYrQcRfQft6dHNf34RsvzWQn4qG-zb0-XA&usqp=CAU',
                follwed: true,
                fullName: "Den",
                status: "Vip",
                location: {city: "Vena", country: "Ausria"}
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TYrQcRfQft6dHNf34RsvzWQn4qG-zb0-XA&usqp=CAU',
                follwed: true,
                fullName: "Marina",
                status: "Super",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TYrQcRfQft6dHNf34RsvzWQn4qG-zb0-XA&usqp=CAU',
                follwed: false,
                fullName: "Lena",
                status: "Norm",
                location: {city: "Mogilev", country: "Belarus"}
            },
            {
                id: 4,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1TYrQcRfQft6dHNf34RsvzWQn4qG-zb0-XA&usqp=CAU',
                follwed: false,
                fullName: "Vika",
                status: "Norm",
                location: {city: "Mogilev", country: "Belarus"}
            }
        ]);
    }
    return (
        <div className={s.users}>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.photo}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}