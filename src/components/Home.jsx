import React, { useContext } from "react"
import Heder from "./hader/Heder"
import Body from "./Body/Body"
import Footer from "./footer/Footer"
import Toggle from "./toggle/Toggle"
import { ThemeContext } from "./toggle/context"

import "./Home.css"

function Home() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="home" style={{
            backgroundColor: darkMode ? "#323232" : "#C1EBD7",
            color: darkMode ? "white" : "#111",
        }}>
             <Toggle />
            <div><Heder /> </div>
            <div><Body /></div>
            <div>  <Footer /></div>
           
           
            
          
        </div>
    )
}

export default Home
