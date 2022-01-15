import React, { useState } from "react"
import Mobile from "./Mobile/Mobile";
import Web from "./Web/Web";
import "./Heder.css"

function Heder() {
    const [isOpen, setIsopen] = useState(false);

    return (
        <div className="header">
            <div className="logo">Suraj</div>
            <div className="menu">
                <div className="web-menu">< Web/></div>
                <div className="mobile-menu">
                    
                    <div onClick={()=>setIsopen(!isOpen)}><i class="fi fi-rr-apps menu-icon"></i></div>
                    { isOpen && < Mobile isOpen={isOpen} setIsopen={setIsopen} />}
                </div>
            </div>
        </div>
    )
}

export default Heder
