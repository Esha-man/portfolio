import React from "react";
import style from "./Nav.module.css"

export const Nav = () => {
  return (
    <nav className={style.nav}>
        <ul>
            <li><a href="">Main</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contacts</a></li>
        </ul>
    </nav>
  )
}

