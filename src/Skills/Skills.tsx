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

    const ts = "Знаю и использую синтаксис ES6, во всех " +
        "проектах применяю Typescript для упрощения поиска" +
        " ошибок и ускорения разработки."
    const react = "В разработке использую как классовые компоненты, так и хуки," +
        " как наиболее современный подход в React." +
        " При необходимости использую локальный стейт."
    const redux = "Для более крупных приложений, или требующих масштабирования использую Redux, Redux-Thunk" +
        " который помогает вынести бизнес-логику за пределы реакт-компонентов."
    const css = "Использую Flexbox, препроцессоры (SCSS), принципы адаптивной и кроссбраузерной верстки. " +
        "Также применяю сторонние библиотеки, MaterialUi."
    const tdd = "При работе с Redux пишу unit-тесты, что позволяет вовремя находить ошибки и быстро тестировать " +
        "отдельные участки приложения."
    const git = "Есть опыт работы c распределенной системой контроля версиями, как самостоятельно, так и в команде."
    const ajax = "Имеется опыт работы с асинхронным Javascript. В разработке применяю библиотеку AXIOS."
    const storybook = "Могу использовать Storybook для создания наглядного стенда" +
        " UI-компонентов и тестирования их работы."

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