import React, { useState } from "react";
import style from "./Projects.module.css"
import { OneProject } from "./OneProject/OneProject";
import { Heading } from "../common/Heading/Heading"

type OneProjectType = {
    icon: string
    title: string
    description: string
}


export const Projects = () => {

    const [project, setproject] = useState<OneProjectType[]>([
        { icon: "", title: "Todolist", description: "Todolist Todolist Todolist Todolist Todolist Todolist Todolist" },
        { icon: "", title: "Todolist TS", description: "Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS Todolist TS" },
        { icon: "", title: "Social network", description: "Social networkSocial networkSocial networkSocial networkSocial networkSocial networkSocial networkSocial network" },
        { icon: "", title: "Counter", description: "Counter CounterCounter Counter Counter CounterCounter CounterCounter Counter Counter Counter" },
        { icon: "", title: "Components", description: "ComponentsComponents Components Components Components ComponentsComponents Components Components Components Components ComponentsComponents" },
        { icon: "", title: "SOME PROJECT", description: "SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT SOME PROJECT" },
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
                            icon={el.icon}
                        />
                    })}

                </div>

            </div>

        </div>
    )
}