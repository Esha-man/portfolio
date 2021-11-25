import React, { useState } from "react";
import styles from "./Main.module.css"
import { AboutMe } from "./AboutMe/AboutMe";
import { Heading } from "../common/Heading/Heading"

type AboutMeRowsObjType = {
    title: string
    value: string
}
export const Main = () => {

    const [aboutMeRows, setAboutMeRows] = useState<AboutMeRowsObjType[]>([
        { title: "Birthday", value: "10.20.2021" },
        { title: "Residence", value: "Russia" },
        { title: "Address", value: "Moscow" },
        { title: "E-mail", value: "blablabla@gmail.com" },
        { title: "Phone", value: "8(800)555-55-55" },
        { title: "Telegram", value: "@name" },
    ])

    return (
        <div className={styles.mainBlock}>

            <div className={styles.mainHeaderWrapper}>
                <h1>About me</h1>
                <div className={styles.line}><span></span></div>
            </div>

            <div className={styles.mainContainer}>

                <div className={styles.photo}>
                    {/* some photo */}
                </div>

                <div className={styles.text}>

                    <h2 className={styles.aboutName}>Hi, i am <span>Egor Shabanov</span></h2>
                
                    <p>
                        Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата
                        Марка Туллия Цицерона «О пределах добра и зла»,
                        написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается
                        Ричарду МакКлинтоку.
                    </p>
                    <div className={styles.meInfo}>

                        <AboutMe />

                    </div>
                </div>
            </div>


        </div>
    )
}