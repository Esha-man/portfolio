import React from "react";
import style from "./Footer.module.scss"
import github from "../assets/images/footer/icons8-github-community-for-software-building-and-testing-online-96.png"
// import facebook from "../assets/images/footer/icons8-facebook (2).svg"
import linkedin from "../assets/images/footer/linkedin2.svg"
import codewars from "../assets/images/footer/codewars6.svg"
import {Fade} from "react-awesome-reveal";


export const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={style.footerContainer}>
            <Fade>

                <div className={style.pages}>
                    {/*<a href={"https://www.facebook.com/profile.php?id=100070040834964"}>*/}
                    {/*    <img src={facebook} className={style.item} alt=""/>*/}
                    {/*</a>*/}
                    <a href={"https://www.linkedin.com/in/egor-shabanov-11486a224/"} target="_blank">
                        <img src={linkedin} className={style.item} alt="linkedin"/>
                    </a>

                    <a href={"https://github.com/Esha-man?tab=overview&from=2022-01-01&to=2022-01-14"} target="_blank">
                        <img src={github} className={style.item} alt="github"/>
                    </a>

                    <a href={"https://www.codewars.com/users/Esha-man"} target="_blank">
                        <img src={codewars} className={style.item} alt="codewars"/>
                    </a>
                </div>

                <small className={""}>&copy; 2021 All rights reserved</small>
            </Fade>
            </div>
        </footer>
    )
}