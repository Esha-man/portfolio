import React from "react";
import style from "./Header.module.css"
import {Nav} from "./Nav/Nav";
import {NavMin} from "./NavMin/NavMin";


export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerContainer}>
                <Nav/>
                <NavMin/>
            </div>
        </header>
    )
}