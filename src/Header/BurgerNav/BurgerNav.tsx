import React, {useState} from "react";
import cssStyle from "./BurgerNav.module.scss"
import Link from "react-scroll/modules/components/Link";


export const BurgerNav = () => {
    let [buttonOn, setButtonOn] = useState(false)
    const toggleNav = () => {
        setButtonOn(!buttonOn)
    }
    const s1 = 1
    const s2 = 2
    const s3 = 3
    const s4 = 4
    const st1 = () => {
        return {transform: `rotateY(calc(90deg) * ${s1})) translateZ: 15px`,}
    }
    const st2 = () => {
        return {transform: `rotateY(calc(90deg) * ${s2})) translateZ: 15px`,}
    }
    const st3 = () => {
        return {transform: `rotateY(calc(90deg) * ${s3})) translateZ: 15px`,}
    }
    const st4 = () => {
        return {transform: `rotateY(calc(90deg) * ${s4})) translateZ: 15px`,}
    }

    //     const st1 = () => {
    //   return {transform: `rotateY(calc(90deg) * var(${s1}))) translateZ: 15px`,}
    // }
    //  const st2 = () => {
    //   return {transform: `rotateY(calc(90deg) * var(${s2}))) translateZ: 15px`,}
    // }
    //  const st3 = () => {
    //   return {transform: `rotateY(calc(90deg) * var(${s3}))) translateZ: 15px`,}
    // }
    //  const st4 = () => {
    //   return {transform: `rotateY(calc(90deg) * var(${s4}))) translateZ: 15px`,}
    // }
    //
    //


    return (
        <nav className={cssStyle.burgerNav}>

            <ul className={buttonOn ? `${cssStyle.showNav} ${cssStyle.burgerNavItems}` : cssStyle.burgerNavItems}>
                <li><Link
                    activeClass={cssStyle.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>Main</Link></li>
                <li><Link
                    activeClass={cssStyle.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}>Skills</Link></li>
                <li><Link
                    activeClass={cssStyle.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={500}>Projects</Link></li>
            </ul>

            <div onClick={toggleNav} className={cssStyle.burgerBtn}>
                <div className={cssStyle.btnDots}></div>
            </div>
            {/*<div className={cssStyle.cube}>*/}
            {/*    <div>*/}
            {/*        <span style={st1()}></span>*/}
            {/*        <span style={st2()}></span>*/}
            {/*        <span style={st3()}></span>*/}
            {/*        <span style={st4()}></span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </nav>
    )
}