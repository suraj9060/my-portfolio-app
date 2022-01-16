import React from "react"
import "./AboutText.css"
import Separator from "../../Common/Separator"

const AboutText = () => {
    return (
        <div className="aboutText">
            <Separator />
            <h1>About Me</h1>
            <div className="main-about">
                 <div className="aboutText-left"> <p className="aboutText-desc">
         I am Enthusiastic, team- oriented and fast learning
software engineer with a proficiency in HTML, CSS,
JavaScript, React and Bootstrap seeking employment in
an organization to provide valuable support.
                <br />  I have built a number of web applications and 4
          major projects.I am a team player and I have a good leadership skills and I am passionate about new things. 
        </p></div>
            <div className="aboutText-right">
                <img src={require("../../../image/gif-4mb.gif")} alt="" />
            </div>
           </div>
        </div>
    )
}

export default AboutText
