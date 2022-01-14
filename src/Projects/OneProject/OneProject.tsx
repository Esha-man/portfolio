import React, {useState} from "react";
import cssStyles from "./OneProject.module.scss"


type OneProjectPropsType = {
    // icon?: any
    style: any
    title: string
    description: string
}


export const OneProject = (props: OneProjectPropsType) => {
    const [changeColor, setChangeColor] = useState(false)

    const startColorEvent = () => {
        setChangeColor(true)
    }
    const stopColorEvent = () => {
        setChangeColor(false)
    }

    const styled = () => {
        return changeColor ?
            cssStyles.oneProjectChange
            :
            cssStyles.oneProject
    }


    return (
        <div onMouseOver={startColorEvent}
             onMouseOut={stopColorEvent}
             className={styled()}

        >


            <div className={cssStyles.icon}
                 style={props.style}>
                <div className={cssStyles.watchWrapper}>
                    <a className={cssStyles.watch} href="">watch code</a>
                    <a className={cssStyles.watch} href="">demo</a>
                </div>
            </div>
            <h3 className={cssStyles.projectTitle}>{props.title}</h3>
            <span className={cssStyles.description}>{props.description}</span>

        </div>
    )
}