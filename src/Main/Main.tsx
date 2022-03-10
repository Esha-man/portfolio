import React from "react";
import styles from "./Main.module.scss"
import { AboutMe } from "./AboutMe/AboutMe";
import { Fade } from "react-awesome-reveal";
import photo from "../assets/images/main/photo_portfolio3.jpg"


export const Main = () => {


    return (
        <Fade>
            <section id={"main"} className={styles.mainBlock}>
                <div className={styles.mainHeaderWrapper}>
                    <h1>About me</h1>
                    <div className={styles.line}><span></span></div>
                    <span className={styles.ghostSpan}>About me</span>
                </div>


                <div className={styles.mainContainer}>

                    <div className={styles.photoWrapper}>
                        <div className={styles.photo}>

                        </div>
                    </div>

                    <div className={styles.text}>
                        <h2 className={styles.aboutName}>Меня зовут <span>Егор Шабанов</span></h2>

                        <p className={styles.textBody}>
                            Я – frontend-разработчик, увлеченный программированием. Занимаюсь созданием SPA на
                            TypeScript, React, Redux. Сейчас совершенствую свои навыки в этом направлении, изучая новые
                            технологии и библиотеки.
                            Интересуюсь мобильной разработкой приложений на ReactNative, решением задач на <a
                                href="https://www.codewars.com/users/Esha-man" style={{ color: "white" }}>Codewars</a>,
                            чтением книг по программированию и computer science.
                            Я хотел бы трудоустроиться на полный рабочий день в компанию с современным подходом и
                            дружным коллективом, которая поможет мне расти и развиваться как профессионалу.
                        </p>
                        <div className={styles.meInfo}>

                            <AboutMe />

                        </div>
                    </div>

                </div>
            </section>
        </Fade>
    )
}