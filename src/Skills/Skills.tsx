import { type } from "os";
import React, { useState } from "react";
import { Heading } from "../common/Heading/Heading";
import { OneSkill } from "./OneSkill/OneSkill";
import style from "./Skills.module.css"

type SkillItemType = {
    icon: string
    description: string
    title: string
}

export const Skills = () => {

    const [skillItem, setSkillIItem] = useState<SkillItemType[]>([
        { icon: "", title: "HTML/CSS",
            description: "Lorem ipsum — классический текст-«рыба». уллия Цицерона «О пределах н. э. на латинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку." },
        { icon: "string", title: "JS/TS",
            description: "Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактатинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку. " },
        { icon: "string", title: "React/React Hooks",
            description: "Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку. " },
        { icon: "string", title: "Redux/Redux Thunk",
            description: "Lorem ipsum — классический текст-«рыба». Является искажённым отрывком из философского трактатинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку" },
        { icon: "string", title: "TDD(JEST)",
            description: ". Является искажённым отрывком из философского трактата Маркактата Марка Ту Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э.ктата Марка Ту " },
        { icon: "string", title: "Storybook",
            description: "Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э." },
        { icon: "string", title: "GIT/GITHUB",
            description: " из философского трактата Маркактата Марка Ту Туллия Цицерона «О пределах добра и зла», написанного в 45 году до " },
        { icon: "string", title: "AJAX",
            description: " из философского трактата Маркактата Марка Ту Туллия Цицерона «О пределах добра и зла», написанного в 45 году до  из философского трактата Маркактата Марка Ту Туллия Цицерона «О пределах добра и зла», написанного в 45 году до " },
    ])


    return (
        <section className={style.skillsBlock}>

            <div className={style.skillsContainer}>

                <Heading heading={"My skills"} />

                <div className={style.skills}>
                    {skillItem.map(el => {
                        return <OneSkill
                            icon={el.icon}
                            description={el.description}
                            title={el.title}
                        />
                    })}

                </div>
            </div>

        </section>
    )
}