import React from "react";
import style from "./Footer.module.scss"

import github from "../assets/images/footer/icons8-github-community-for-software-building-and-testing-online-96.png"
import facebook from "../assets/images/footer/icons8-facebook (2).svg"
import codewars from "../assets/images/footer/codewars6.svg"

export const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={style.footerContainer}>

                <div className={style.pages}>
                    <a href={"https://www.facebook.com/profile.php?id=100070040834964"}>
                        <img src={facebook} className={style.item} alt=""/>
                    </a>

                    <a href={"https://github.com/Esha-man?tab=overview&from=2022-01-01&to=2022-01-14"}>
                        <img src={github} className={style.item} alt=""/>
                    </a>

                    <a href={"https://www.codewars.com/users/Esha-man"}>
                        <img src={codewars} className={style.item} alt=""/>
                    </a>
                </div>

                {/*<ul className={style.pages}>*/}
                {/*    <li className={style.item}><img src={github} alt=""/></li>*/}
                {/*    <li className={style.item}><img src={facebook} alt=""/></li>*/}
                {/*    <li className={style.item}><img src={codewars} alt=""/></li>*/}
                {/*</ul>*/}

                <small className={style.name}>&copy; 2021 All rights reserved</small>
            </div>
        </footer>
    )
}