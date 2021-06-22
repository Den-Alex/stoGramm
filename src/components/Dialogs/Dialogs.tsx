import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from './Message/Message';
import {DialogsPageType} from "../redux/store";

export type DialogsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageBody = props.dialogsPage.newMessageBody


    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value);
    }
    let sendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea onChange={onNewMessageChange}
                               value={newMessageBody}
                               placeholder='Den'></textarea></div>
                <div>
                    <button onClick={sendMessageClick}>Add</button>
                </div>
            </div>
        </div>
    )
}