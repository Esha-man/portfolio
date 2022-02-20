import React, {useState} from "react";
import cssStyle from "./BurgerNav.module.scss"
import Link from "react-scroll/modules/components/Link";


export const BurgerNav = () => {
    let [buttonOn, setButtonOn] = useState(false)
    const toggleNav = () => {
        setButtonOn(!buttonOn)
    }

    return (
        <nav className={cssStyle.burgerNav}>

            <div className={buttonOn ? `${cssStyle.showNav} ${cssStyle.burgerNavItems}` : cssStyle.burgerNavItems}>
                <Link
                    activeClass={cssStyle.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>Main</Link>
                <Link
                    activeClass={cssStyle.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}>Skills</Link>
                <Link
                    activeClass={cssStyle.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}>Projects</Link>
            </div>

            <div onClick={toggleNav} className={cssStyle.burgerBtn}>
                <div className={cssStyle.btnLines}></div>
            </div>
        </nav>
    )
}