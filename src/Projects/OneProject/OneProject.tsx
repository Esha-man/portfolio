import React, {useState} from "react";
import styles from "./OneProject.module.css"

type OneProjectPropsType = {
    icon?: string
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
       return changeColor ? {borderTop: "5px solid #037fff"} :  {borderTop: "5px solid #2e344e"} 
    }
    
    return (
        <div onMouseOver={startColorEvent} onMouseOut={stopColorEvent} style={styled()}  className={styles.oneProject}>
            
                <div className={styles.icon}>
                    <a className={styles.watch} href="">Watch</a>
                </div>
                <h4>{props.title}</h4>
                <span className={styles.description}>{props.description}</span>
       
        </div>
    )
}