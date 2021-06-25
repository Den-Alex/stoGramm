import {ActionsType, DialogsPageType} from "./store";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
export const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Denis"},
        {id: 2, name: "Marina"},
        {id: 3, name: "Elena"},
        {id: 4, name: "Natascha"}
    ],
    messages: [
        {id: 1, message: "Ibuhv ygh"},
        {id: 2, message: "Prdvtr"},
        {id: 3, message: "Srbl l"},
        {id: 4, message: "M[ok ss"},
    ],
    newMessageBody: "Den"
}
export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}
export let updateNewMessageBodytAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export let sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}