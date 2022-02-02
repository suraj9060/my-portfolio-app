import React from "react"
import "./Contact.css"
import Separator from "../../Common/Separator"
import SocialMedia from "../../Common/SocialMedia"


const Contact = () => {
    return (
        <div className="contact">
            <Separator />
            <label  className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>want to get in touch? contact me on any of the platform</p>
                    <SocialMedia />
                </div>
                {/* <div className="download">
                    <a  href={require("../../../image/Suraj-Kumar.pdf")} target="_blank">
                        <i class="fi fi-rr-cloud-download download-icon"></i>Download Resume
                    </a>
                </div> */}
                
            </div>
              <div className="info-details">
                    <div className="social-icon-div"><img src={require("../../../image/calling-app.png")} className="social-icon" alt="" /> <p>9060488004</p></div>
                    <div className="social-icon-div"><img src={require("../../../image/gmail.png")} className="social-icon" alt="" /> <p>surajpandit831996@gmail.com</p></div>
                    
                    
                </div>
        </div>
    )
}

export default Contact
