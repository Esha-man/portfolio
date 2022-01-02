import React, {useState} from "react";
import styles from "./OneProject.module.css"


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
            styles.oneProjectChange
            :
            styles.oneProject
    }
    // const styled = () => {
    //     return changeColor ?
    //         {borderTop: "5px solid #037fff", borderBottom: "1px solid #037fff"}
    //         :
    //         {borderTop: "5px solid #2e344e", borderBottom: "1px solid #2e344e"}
    //  }


    return (
        <div onMouseOver={startColorEvent}
             onMouseOut={stopColorEvent}
             className={styled()}
            // style={props.style}
        >


            <div className={styles.icon}
                 style={props.style}>
                <div className={styles.watchWrapper}>
                    <a className={styles.watch} href="">watch code</a>
                    <a className={styles.watch} href="">demo</a>

                    {/*    <div><a className={styles.watch} href="">watch code</a></div>*/}
                    {/*<div><a className={styles.watch} href="">demo</a></div>*/}
                </div>

            </div>
            <h4>{props.title}</h4>
            <span className={styles.description}>{props.description}</span>

        </div>
    )
}