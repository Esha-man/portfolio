import React, { useState } from "react";
import styles from "./NavMin.module.css"


export const NavMin = () => {

  const [toggleOn, setToggleOn] = useState<boolean>(false)

  const toggleMenu = () => {
    setToggleOn(!toggleOn)
  }
  // const menuDiv = { height: "100vh", width: "100vh"}


  return (
    <div className={styles.navMin} >
      {!toggleOn
        ?
        <button className={styles.toggleButtonMenu} onClick={toggleMenu}>MENU</button>
        :
        <nav>
          <button className={styles.toggleButtonX} onClick={toggleMenu}>X</button>
          <ul>
            <li><a href="">Main</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contacts</a></li>
          </ul>
        </nav>
      }
    </div>
  )
}