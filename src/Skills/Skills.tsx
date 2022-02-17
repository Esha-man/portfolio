import React from "react";
import {Heading} from "../common/Heading/Heading";
import {OneSkill} from "./OneSkill/OneSkill";
import style from "./Skills.module.scss"

// import jsLogo from "../assets/images/skills/js_logo.svg"
import tsLogo from "../assets/images/skills/Typescript_logo_2020.svg.png"
import reactLogo from "../assets/images/skills/icons8-react.svg"
import reduxLogo from "../assets/images/skills/icons8-redux.svg"
import cssLogo from "../assets/images/skills/icons8-css3.svg"
import tddLogo
    from "../assets/images/skills/icons8-jest-can-collect-code-coverage-information-from-entire-projects-96.png"
import gitLogo from "../assets/images/skills/icons8-git.svg"
import ajaxLogo from "../assets/images/skills/ajax444.svg"
import storyLogo from "../assets/images/skills/storybook.png"
import {Fade} from "react-awesome-reveal";


type SkillItemType = {
    icon: string
    description: string
    title: string
}

export const Skills = () => {

    // const jsText = "Lorem ipsum — классический текст-«рыба». уллия Цицерона «О пределах н. э. на латинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку."
    const react = "Lorem ipsum — классический текст-«рыба». уллия Цицерона «О пределах н. э. на латинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку."
    const ts = "текст-«рыба». Туллия Цицерона «О пределах н. э. на латинском языке, обнаружение сходства приписывается Ричарду."
    const redux = "Lorem ipsum — классический текст-«рыба». уллия Цицерона «О пределах н. э. на латинском языке, обнаружение сходства."
    const css = "Lorem ipsum — классический текст-«рыба». уллия Цицерона «О пределах н. э. на латинском языке, обнаружение сход."
    const tdd = "ipsum — классический текст-«рыба». уллия Цицерона «О пределах н. э. на латинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку."
    const git = "Lorem ipsum — классический текст-«рыба». уллия Цицерона «О пределах н. э. на латинском языке, обнаружение сходства приписывается Ричарду."
    const ajax = "классический текст-«рыба». уллия Цицерона «О пужение сходства приписывается Ричарду МакКлинтоку."
    const storybook = "классический текст-«рыба». «О пужение сходства приписывается Ричарду МакКлинтоку."

    const skillItem: SkillItemType[] = ([
        // {icon: jsLogo, title: "Javascript", description: jsText},
        {icon: tsLogo, title: "Typescript", description: ts},
        {icon: reactLogo, title: "React", description: react},
        {icon: reduxLogo, title: "Redux", description: redux},
        {icon: cssLogo, title: "CSS", description: css},
        {icon: tddLogo, title: "TDD(JEST)", description: tdd},
        {icon: gitLogo, title: "GIT", description: git},
        {icon: ajaxLogo, title: "AJAX", description: ajax},
        {icon: storyLogo, title: "Storybook", description: storybook},
    ])


    return (
        <section id={"skills"} className={style.skillsBlock}>
            <Fade>
                <div className={style.skillsContainer}>

                    <Heading heading={"My skills"}/>

                    <div className={style.skills}>
                        {skillItem.map(el => {
                            return <OneSkill
                                key={el.title}
                                icon={el.icon}
                                description={el.description}
                                title={el.title}
                            />
                        })}

                    </div>
                </div>
            </Fade>
        </section>
    )
}