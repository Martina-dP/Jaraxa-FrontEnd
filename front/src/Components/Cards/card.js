import React from "react";
import style from "./card.module.css"

function Card({name}){

    return(
        <div className={style.all}>
            <h2 className={style.title}>{name}</h2>
        </div>
    )} 

export default Card;