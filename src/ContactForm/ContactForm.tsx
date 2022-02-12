import React from "react";
import style from "./ContactForm.module.css"
import {Heading} from "../common/Heading/Heading"
import {Fade} from "react-awesome-reveal";


export const ContactForm = () => {
    return (
        <section className={style.formBlock}>

                <div className={style.formContainer}>
                    <Fade>
                    <Heading heading={"Contacts"}/>

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
                    </Fade>

                </div>
        </section>
    )
}
