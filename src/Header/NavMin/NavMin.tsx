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
        <div>
          <button className={styles.toggleButtonX} onClick={toggleMenu}>X</button>
          <div><a href="">Main</a></div>
          <div><a href="">Skills</a></div>
          <div><a href="">Projects</a></div>
          <div><a href="">Contacts</a></div>
        </div>
      }
    </div>
  )
}