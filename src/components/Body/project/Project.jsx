import React from "react"
import "./Project.css"
import ProjectCart from "./ProjectCart"
import { ProjectData } from "./ProjectData"
import Separator from "../../Common/Separator"


const Project = () => {
    const data = ProjectData
    return (
        <div className="projects">
            <Separator />
            <h1>Things I Have Developed</h1>
            <label htmlFor="" className="section-title"></label>
            <div>
                {data.map((project) => {
                   return <ProjectCart project={project} />
                })}
            </div>
        </div>
    )
}

export default Project
