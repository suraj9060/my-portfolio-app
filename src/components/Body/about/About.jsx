import React from "react"
import "./About.css"
import SocialMedia from "../../Common/SocialMedia"




const About = () => {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                  Hello! My name is <br /><span className="info-name">suraj kumar</span><br /> and I enjoy creating things that live on the
          internet. 
                </div>
                <div className="about-photo">
                    <img src={require("./../../../image/me.png")} className="picture" alt="" />
                </div>
            </div>
            <div className="about-bottom">
                <SocialMedia />
             </div>
        </div>
    )
}

export default About
