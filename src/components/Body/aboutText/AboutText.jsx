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
          My interest in web development started when I was
                trying to edit things on the web - I was Amazed that How things are working On click On scroll How my Photos Are stored file shearing and payment done
                <br /> <br /> <br />I want to create it by my own — I taught me a lot about HTML & CSS!.
          Fast Forwarding to today, I built a number of web applications and 4
          major projects. Learned a great deal about teamwork, leadership, and
          communication. After months of rigorous training, here I am looking
          for an opportunity as a full stack web developer.
        </p></div>
            <div className="aboutText-right">
                <img src={require("../../../image/gif-4mb.gif")} alt="" />
            </div>
           </div>
        </div>
    )
}

export default AboutText
