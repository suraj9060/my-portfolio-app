import React from "react"
import "./Skills.css"
import Separator from "../../Common/Separator"

import SkillCard from "./SkillCard"
import SkillsData from "./SkillsData"


function Skills() {
    const data = SkillsData;
    return (
        <div>
            <Separator />
            <label htmlFor="" className="section-title">Skills</label>
            <div className="skills-container">
                {
                    data.map((item) => {
                        return <div className="skills-section">
                            <div><label htmlFor="" className="skills-section-title">{item.type}</label></div>
                            <div className="skills-list">
                                {item.list.map((skill) => {
                                    return <SkillCard skill={ skill}/>
                                        
                                    
                                })}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Skills
