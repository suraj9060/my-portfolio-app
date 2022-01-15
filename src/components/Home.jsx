import React from "react"
import Heder from "./hader/Heder"
import Body from "./Body/Body"
import Footer from "./footer/Footer"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div><Heder /> </div>
            <div><Body /></div>
            <div>  <Footer /></div>
            
          
        </div>
    )
}

export default Home
