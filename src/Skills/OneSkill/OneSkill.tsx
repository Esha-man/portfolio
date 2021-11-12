import React from "react";
import styleContainer from "../common/styles/Container.module.css"
import style from "./Skills.module.css"

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>

                </div>
            </div>

        </div>
    )
}