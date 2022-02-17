import React from "react";
import cssStyle from "./BurgerNav.module.scss"
import Link from "react-scroll/modules/components/Link";


export const BurgerNav = () => {

    return (
        <nav className={cssStyle.burgerNav}>

            <div className={cssStyle.burgerNavItems}>
                <ul>
                    <li><Link
                        activeClass={cssStyle.active}
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-7}
                        duration={500}>Main</Link></li>
                    <li><Link
                        activeClass={cssStyle.active}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>Skills</Link></li>
                    <li><Link
                        activeClass={cssStyle.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-7}
                        duration={500}>Projects</Link></li>
                </ul>
            </div>
        <button className={cssStyle.burgerBtn} style={{color: "white"}}>...</button>
        </nav>
    )
}