import React from "react"
import "./Mobile.css"
function Mobile({isOpen,setIsopen}) {

    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsopen(!isOpen)}>
                <i class="fi fi-rr-cross-circle"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                <a href="#project"><i className="fi fi-rr-edit-alt option-icon"></i>Projects</a>
                </div>
                  <div className="mobile-option">
                <a href="#skill">
                    <i className="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work"><i className="fi fi-rr-briefcase option-icon"></i>Work</a>
            </div>
            <div className="mobile-option">
                <a href="#user"><i class="fi fi-rr-user option-icon"></i>User</a>
           </div>
            </div>
        </div>
    )
}

export default Mobile
