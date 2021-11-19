import React, { useState } from "react";
import style from "./Main.module.css"
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
        <div className={style.mainBlock}>

            <div className={style.mainHeader}>
                <h1>About me</h1>
                <p>Frontend-<span className={style.spanDeveloper}>developer</span></p>
            </div>

            <div className={style.mainContainer}>

                <div className={style.photo}>
                    {/* some photo */}
                </div>

                <div className={style.text}>

                    <Heading
                        heading={"Фамилия Имя"}
                        descriptionHeading={"I like programming to ReactJS CSS etc"}
                    />
                  
                    <p>
                        Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата
                        Марка Туллия Цицерона «О пределах добра и зла»,
                        написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается
                        Ричарду МакКлинтоку.
                    </p>
                    <div className={style.meInfo}>

                        <AboutMe />

                    </div>
                </div>
            </div>


        </div>
    )
}