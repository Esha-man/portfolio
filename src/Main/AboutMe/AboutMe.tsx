import React from "react";
import style from "./AboutMe.module.scss";


type AboutMeRowsObjType = {
    title: string
    value: string
}

export const AboutMe = () => {

    const aboutMeRows: AboutMeRowsObjType[] = ([
        {title: "Дата", value: "30.11.1991"},
        {title: "Страна", value: "Россия"},
        {title: "Город", value: "Москва"},
        {title: "E-mail", value: "esh8284@gmail.com"},
        {title: "Телефон", value: "+7(910)340-68-09"},
        {title: "Telegram", value: "@hdmihead"},
    ])


    return (

        <div className={style.aboutMeContainer}>
            <ul>
                {aboutMeRows.map(el =>
                    <li key={el.title}><strong>{el.title}</strong>{el.value}</li>
                )}
            </ul>
        </div>
    )
}