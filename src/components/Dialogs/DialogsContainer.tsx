import React from 'react';
import {DialogsPageType, StateType} from "../redux/store";
import {sendMessageAC, updateNewMessageBodytAC} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from 'react-redux';


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
 type MapToPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {////////Уточнить крейтеры - нужно ли менять местами
            dispatch(updateNewMessageBodytAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);