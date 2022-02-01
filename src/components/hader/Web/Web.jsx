import React from "react";
import "./Web.css"

function Web() {
    return (
        <div className="web">
            <div className="wev-option">
                <a href="#aboutText"><i className="fi fi-rr-edit-alt option-icon"></i>About</a>
            </div>
            <div className="wev-option">
                <a href="#project"><i className="fi fi-rr-edit-alt option-icon"></i>Projects</a>
            </div>
            <div className="wev-option">
                <a href="#skills">
                    <i className="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className="wev-option">
                <a href="#work"><i className="fi fi-rr-briefcase option-icon"></i>Experience</a>
            </div>
            <div className="wev-option">
                <a href="#contact"><i className="fi fi-rr-user option-icon"></i>Contact</a>
           </div>
        </div>
    )
}

export default Web
