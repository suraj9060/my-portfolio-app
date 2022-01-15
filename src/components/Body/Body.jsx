import React from "react"
import "./Body.css"
import About from "./about/About"
import Contact from "./contact/Contact"
import Project from "./project/Project"
import Skills from "./skills/Skills"
import Work from "./work/Work"
import AboutText from "./aboutText/AboutText"


function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
        </section>
         <section id="aboutText">
                <AboutText />
            </section>
              <section id="project">
                <Project />
            </section>
              <section id="skills">
                <Skills />
            </section>
              <section id="work">
                <Work />
        </section>
           <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
