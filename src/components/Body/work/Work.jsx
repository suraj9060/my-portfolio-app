import React from "react"
import "./Work.css"
import { WorkData } from "./WorkData"
import WorkCard from "./WorkCard";
import Separator from "../../Common/Separator";

function Work() {
    const data = WorkData;

    return (
        <div className="work">
            <Separator />
            <div>
                <h1>Education and Experience</h1>
                <p>I have completed graduation, Worked in Two company and in between started 3 startup called welcome Event, Electrika PVT. LTD. and JB SoftTech PVT.LTD(school management app). <br /> <br />
                    I was as a co-founder and my roles and responsibility was to team handling, clint meeting, accounting, office management, hiring, sales, and more... <br /> <br />
                    I have learned management,business analysis, team work , budget , work deadline, clint expectation, communication,marketing, team planing and more...
                </p>
            </div>
            <div className="work-list">
                {
                    data.map((item) => {
                      return  <WorkCard item={item} />
                    })
                }
          </div>
            
            
        </div>
    )
}

export default Work
