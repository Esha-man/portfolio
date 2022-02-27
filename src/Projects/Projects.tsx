import React from "react";
import style from "./Projects.module.css"
import {OneProject} from "./OneProject/OneProject";
import {Heading} from "../common/Heading/Heading"
import socialNetwork from "../assets/images/social-media-g62ea17012_640.png";
import counter from "../assets/images/counter.png";
import todolistTS from "../assets/images/calendar-g15cab6b1f_640.png";
import todolistJS from "../assets/images/todolist-js-2.png";
import components from "../assets/images/react-components.jpg";
import {Fade} from "react-awesome-reveal";


type OneProjectType = {
    icon: any
    title: string
    description: string
    ghPages: string
    ghCode: string
}


export const Projects = () => {

    const project: OneProjectType[] = ([
        {
            icon: {backgroundImage: `url(${todolistTS})`},
            title: "Todolist TS",
            description: "Трекер задач, написанный на React и Typescript. Для управления состоянием используется Redux." +
                " Также применяется Redux-Thunk, Axios и MaterialUi.",
            ghPages: "https://esha-man.github.io/Todolist_TS/",
            ghCode: "https://github.com/Esha-man/Todolist_TS",
        },
        {
            icon: {backgroundImage: `url(${socialNetwork})`},
            title: "Social network",
            description: "Проект на React, Redux, TS, RestAPI, Redux-Thunk, MaterialUI," +
                " используются как хуки так и классовые компоненты.",
            ghPages: "https://esha-man.github.io/social_network/#/",
            ghCode: "https://github.com/Esha-man/social_network",
        },
        {
            icon: {backgroundImage: `url(${counter})`},
            title: "Counter",
            description: "Простой счетчик c использованием Rect. Состояние хранится в LocalStorage.",
            ghPages: "https://esha-man.github.io/Counter/",
            ghCode: "https://github.com/Esha-man/Counter",
        },
        {
            icon: {backgroundImage: `url(${components})`},
            title: "Clock",
            description: "Аналоговые и цифровые часы на React с применением хуков.",
            ghPages: "https://esha-man.github.io/Clock/",
            ghCode: "https://github.com/Esha-man/Clock",

        },
        {
            icon: {backgroundImage: `url(${todolistJS})`},
            title: "TodolistJS",
            description: "Пробный трекер задач на Javascript и CSS",
            ghPages: "https://esha-man.github.io/Todolist_short/",
            ghCode: "https://github.com/Esha-man/Todolist_short",
        },
    ])

    return (
        <Fade>
        <section id={"projects"} className={style.projectsBlock}>

                <div className={style.projectsContainer}>

                    <Heading heading={"My projects"}/>

                    <div className={style.allProjects}>
                        {project.map(el => {
                            return <OneProject
                                key={el.title}
                                title={el.title}
                                description={el.description}
                                style={el.icon}
                                ghPages={el.ghPages}
                                ghCode={el.ghCode}
                            />
                        })}

                    </div>

                </div>

        </section>
        </Fade>
    )
}