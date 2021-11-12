import React from "react";
import style from "./ContactForm.module.css"
import { Heading } from "../common/Heading/Heading"



export const ContactForm = () => {
    return (
        <div className={style.formBlock}>
            <div className={style.formContainer}>
                
            <Heading heading={"Contacts"} />
                {/* <h2 className={style.contacts}>Contacts</h2> */}

                <form className={style.form}>
                    <input className={style.item}
                           placeholder={"Name"}
                           type="text"/>
                    <input className={style.item}
                           placeholder={"E-mail"}
                           type="text"/>
                    <textarea className={style.messageTextarea}
                              placeholder={"Message"}/>
                    <button type="submit" className={style.submitButton}>submit</button>
                </form>

            </div>
        </div>
    )
}
