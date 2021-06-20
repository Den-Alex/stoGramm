import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css'
export type DialogsItemType = {
    name: string
    id: number
}
export const DialogItem = (props: DialogsItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div >
    )
}