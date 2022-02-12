import React, { useState } from "react";
import styles from "./BurgerNav.module.scss"


export const BurgerNav = () => {

  const [toggleOn, setToggleOn] = useState<boolean>(false)

  const toggleMenu = () => {
    setToggleOn(!toggleOn)
  }
  // const menuDiv = { height: "100vh", width: "100vh"}


  return (
    <div className={styles.navB} >
      {!toggleOn
        ?
        <button className={styles.menuIsOff} onClick={toggleMenu}>MENU</button>
        :
        <nav>
          <button className={styles.menuIsOn} onClick={toggleMenu}>X</button>
          <ul>
            <li><a href="#main">Main</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            {/*<li><a href="#contacts">Contacts</a></li>*/}
          </ul>
        </nav>
      }
    </div>
  )
}