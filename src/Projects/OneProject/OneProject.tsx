import React from "react";
import style from "./OneProject.module.css"

type OneProjectPropsType = {
    icon?: string
    title: string
    description: string
}

export const OneProject = (props: OneProjectPropsType) => {
    return (
        <div className={style.oneProject}>
            {/* <div className={style.oneProjectContainer}> */}
                <div className={style.icon}>
                    <a className={style.watch} href="">Watch</a>
                </div>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            {/* </div> */}


        </div>
    )
}