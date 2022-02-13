import React from "react";
import cssStyle from "./OneSkill.module.scss"

type PropsType = {
    icon?: string
    title: string
    description: string
}

export const OneSkill = (props: PropsType) => {
    // const [changeColor, setChangeColor] = useState(false)
    //
    // const startColorEvent = () => {
    //         setChangeColor(true)
    // }
    // const stopColorEvent = () => {
    //     setChangeColor(false)
    // }
    //
    // const styled = () => {
    //    return changeColor
    //        ? {borderTop: "5px solid #037fff", borderBottom: "1px solid #037fff"}
    //        :  {borderTop: "5px solid #2e344e", borderBottom: "1px solid #2e344e"}
    // }

    return (
        <div className={cssStyle.one_skill}>

            {/*<div onMouseOver={startColorEvent}*/}
            {/* onMouseOut={stopColorEvent}*/}
            {/* style={styled()}*/}
            {/* className={cssStyle.one_skill}>*/}

            <img src={props.icon} className={cssStyle.icons} alt={props.title}></img>
            <h3 className={cssStyle.skillTitle}>{props.title}</h3>
            <span className={cssStyle.description}>{props.description}</span>

        </div>
    )
}