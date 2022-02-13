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
            description: "Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS Todolist " +
                "TS Todolist TS Todolist TS Todolist TS",
            ghPages: "https://esha-man.github.io/Todolist_TS/",
            ghCode: "https://github.com/Esha-man/Todolist_TS",
        },
        {
            icon: {backgroundImage: `url(${socialNetwork})`},
            title: "Social network",
            description: "Social networkSocial networkSocial networkSocial networkSocial" +
                " networkSocial networkSocial networkSocial network",
            ghPages: "https://esha-man.github.io/social_network/#/",
            ghCode: "https://github.com/Esha-man/social_network",
        },
        {
            icon: {backgroundImage: `url(${counter})`},
            title: "Counter",
            description: "Counter Counter Counter Counter Counter CounterCounter" +
                " CounterCounter Counter Counter Counter",
            ghPages: "https://esha-man.github.io/Counter/",
            ghCode: "https://github.com/Esha-man/Counter",
        },
        {
            icon: {backgroundImage: `url(${components})`},
            title: "Simple components",
            description: "Components Components Components Components Components " +
                "Components Components Components Components Components " +
                "Components Components Components",
            ghPages: "",
            ghCode: "https://github.com/Esha-man/react__components",

        },
        {
            icon: {backgroundImage: `url(${todolistJS})`},
            title: "Todolist",
            description: "Todolist Todolist Todolist Todolist Todolist Todolist Todolist",
            ghPages: "",
            ghCode: "https://github.com/Esha-man/Todolist_short",
        },
        // {
        //     icon: {background: "red"},
        //     title: "Some project",
        //     description: "SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME " +
        //         "PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT",
        //     ghPages: "",
        //     ghCode: "",
        // },
    ])

    return (
        <section id={"projects"} className={style.projectsBlock}>
            <Fade>
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
            </Fade>
        </section>
    )
}