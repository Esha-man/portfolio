import React from "react";
import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>


                <div className={style.pages}>
                    <div className={style.item}>GH</div>
                    <div className={style.item}>FB</div>
                    <div className={style.item}>LIn</div>
                </div>

                <div className={style.name}>Ⓚ 2021 All rights reversed</div>
            </div>
        </div>
    )
}