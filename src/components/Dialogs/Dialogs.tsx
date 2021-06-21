import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from './Message/Message';
import {sendMessageAC, StoreType, updateNewMessageBodytAC} from "../redux/state";

export type DialogsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.store.getState().dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.store.getState().dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageBody = props.store.getState().dialogsPage.newMessageBody
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodytAC(e.currentTarget.value))
    }
    let sendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
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