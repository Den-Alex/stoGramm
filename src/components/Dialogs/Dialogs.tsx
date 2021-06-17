import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Denis
                </div >
                <div className={s.dialog}>
                    Denis
                </div>
                <div className={s.dialog}>
                    Denis
                </div>
                <div className={s.dialog}>
                    Denis
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    YYYYYY
                </div>
                <div className={s.message}>
                    uuuuuu
                </div>
                <div className={s.message}>
                    rrrrrr
                </div>
                <div className={s.message}>
                    KKKKKK
                </div>
            </div>
        </div>
    )
}