import React from "react";
import style from "./OneSkill.module.css"

type PropsType = {
    icon?: string
    title: string
    description: string
}

export const OneSkill = (props: PropsType) => {
    return (
        <div className={style.one_skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>

        </div>
    )
}