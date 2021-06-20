import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemType} from "./DialogItem/DialogItem";
import {Message, MessageType } from './Message/Message';

export type DialogsType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
}

export const Dialogs = (props: DialogsType) => {

    // let dialogs: Array<DialogsItemType> = [
    //     { id: "1", name: "Denis" },
    //     { id: "2", name: "Marina" },
    //     { id: "3", name: "Elena" },
    //     { id: "4", name: "Natascha" }
    // ]
    // let messages: Array<MessageType> = [
    //     { id: "1", message: "Ibuhv ygh" },
    //     { id: "2", message: "Prdvtr" },
    //     { id: "3", message: "Srbl l" },
    //     { id: "4", message: "M[ok ss" },
    // ]

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}