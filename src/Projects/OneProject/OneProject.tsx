import React from "react";
import cssStyles from "./OneProject.module.scss"


type OneProjectPropsType = {
    style: any
    title: string
    description: string
    ghPages: string
    ghCode: string
}


export const OneProject = (props: OneProjectPropsType) => {
    // const [changeColor, setChangeColor] = useState(false)
    //
    // const startColorEvent = () => {
    //     setChangeColor(true)
    // }
    // const stopColorEvent = () => {
    //     setChangeColor(false)
    // }
    //
    // const styled = () => {
    //     return changeColor
    //         ?
    //         cssStyles.oneProjectChange
    //         :
    //         cssStyles.oneProject
    // }


    return (
        // <div onMouseOver={startColorEvent}
        //      onMouseOut={stopColorEvent}
        //      className={styled()}
        //
        // >
           <div className={cssStyles.oneProject}>


            <div className={cssStyles.icon}
                 style={props.style}>
                <div className={cssStyles.watchWrapper}>
                    <a className={cssStyles.watch} href={props.ghCode}>watch code</a>
                    <a className={cssStyles.watch} href={props.ghPages}>demo</a>
                </div>
            </div>
            <h3 className={cssStyles.projectTitle}>{props.title}</h3>
            <span className={cssStyles.description}>{props.description}</span>

        </div>
    )
}