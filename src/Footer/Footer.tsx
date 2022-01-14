import React from "react";
import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={style.footerContainer}>


                <ul className={style.pages}>
                    <li className={style.item}>GH</li>
                    <li className={style.item}>FB</li>
                    <li className={style.item}>LIn</li>
                </ul>

                <small className={style.name}>Ⓚ 2021 All rights reversed</small>
            </div>
        </footer>
    )
}