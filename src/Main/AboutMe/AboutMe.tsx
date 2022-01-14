import React, { useState } from "react";
import style from "./AboutMe.module.scss";


type AboutMeRowsObjType = {
    title: string
    value: string
}

export const AboutMe = () => {

    const [aboutMeRows, setAboutMeRows] = useState<AboutMeRowsObjType[]>([
        { title: "Birthday", value: "10.20.2021" },
        { title: "Residence", value: "Russia" },
        { title: "Address", value: "Moscow" },
        { title: "E-mail", value: "blablabla@gmail.com" },
        { title: "Phone", value: "8(800)555-55-55" },
        { title: "Telegram", value: "@name" },
    ])


    return (

        <div className={style.aboutMeContainer}>
            <ul>
            {aboutMeRows.map(el =>
                <li><strong>{el.title}</strong>{el.value}</li>
            )}
            </ul>
        </div>
    )
}