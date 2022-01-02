import React, { useState } from "react";
import style from "./Projects.module.css"
import { OneProject } from "./OneProject/OneProject";
import { Heading } from "../common/Heading/Heading"
import socialNetwork from "../assets/images/social-media-g62ea17012_640.png";
import counter from "../assets/images/counter.png";
import todolistTS from "../assets/images/calendar-g15cab6b1f_640.png";
import todolistJS from "../assets/images/todolist-js-2.png";
import components from "../assets/images/react-components.jpg";



type OneProjectType = {
    icon: any
    title: string
    description: string
}


export const Projects = () => {


    const [project, setproject] = useState<OneProjectType[]>([
        { icon: {backgroundImage: `url(${todolistJS})`}, title: "Todolist", description: "Todolist Todolist Todolist Todolist Todolist Todolist Todolist" },
        { icon: {backgroundImage: `url(${todolistTS})`}, title: "Todolist TS", description: "Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS" },
        { icon: {backgroundImage: `url(${socialNetwork})`}, title: "Social network", description: "Social networkSocial networkSocial networkSocial networkSocial networkSocial networkSocial networkSocial network" },
        { icon: {backgroundImage: `url(${counter})`}, title: "Counter", description: "Counter Counter Counter Counter Counter CounterCounter CounterCounter Counter Counter Counter" },
        { icon: {backgroundImage: `url(${components})`}, title: "Simple components", description: "Components Components Components Components Components Components Components Components Components Components Components Components Components" },
        { icon: {background: "red"}, title: "Some project", description: "SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT" },
    ])

    return (
        <div className={style.projectsBlock}>

            <div className={style.projectsContainer}>

                <Heading heading={"My projects"} />

                <div className={style.allProjects}>
                    {project.map(el => {
                        return <OneProject
                            title={el.title}
                            description={el.description}
                            // style={socialNetworkImg}
                            style={el.icon}
                            // icon={el.icon}
                        />
                    })}

                </div>

            </div>

        </div>
    )
}