import preloader from "../../images/preloader.gif";
import s from "../Users/Users.module.css";
import React from "react";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} className={s.preloader}/>
        </div>
    )
}