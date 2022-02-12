import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Footer} from "./Footer/Footer";
import {ContactForm} from "./ContactForm/ContactForm";


function App() {

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            {/*<ContactForm/>*/}
            <Footer/>
        </div>
    );
}

export default App;
