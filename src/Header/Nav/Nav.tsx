import React from "react";
import style from "./Nav.module.scss"

export const Nav = () => {


    return (
    <nav className={style.nav}>
        <ul>
            <li ><a href="main">Main</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="projects">Projects</a></li>
            {/*<li><a href="#contacts">Contacts</a></li>*/}
        </ul>
    </nav>
  )

}

