import React, {useState} from "react";
import style from "./OneSkill.module.css"

type PropsType = {
    icon?: string
    title: string
    description: string
}

export const OneSkill = (props: PropsType) => {
    const [changeColor, setChangeColor] = useState(false)
    
    const startColorEvent = () => {
            setChangeColor(true)    
    }
    const stopColorEvent = () => {
        setChangeColor(false)
    }

    const styled = () => {
       return changeColor ? {borderTop: "5px solid #037fff"} :  {borderTop: "5px solid #2e344e"} 
    }
    return (
        <div onMouseOver={startColorEvent} onMouseOut={stopColorEvent} style={styled()} className={style.one_skill}>
            <div className={style.icon}></div>
            <h4>{props.title}</h4>
            <span className={style.description}>{props.description}</span>

        </div>
    )
}