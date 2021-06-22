import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from './Message/Message';
import {StoreType} from "../redux/store";
import {sendMessageAC, updateNewMessageBodytAC} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export type DialogsContainerType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerType) => {

    // let dialogsElements = props.store.getState().dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    // let messagesElements = props.store.getState().dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);
    // let newMessageBody = props.store.getState().dialogsPage.newMessageBody


    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodytAC(body))
    }
    let sendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    return (
        <div>
       <Dialogs dialogsPage={props.store.getState().dialogsPage} sendMessage={sendMessageClick} updateNewMessageBody={onNewMessageChange}/>
        </div>
    )
}