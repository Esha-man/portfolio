import React from "react";
import style from "./Header.module.css"
import {Nav} from "./Nav/Nav";
import {NavMin} from "./NavMin/NavMin";


export const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.headerContainer}>
                <Nav/>
                <NavMin/>
            </div>
        </div>
    )
}