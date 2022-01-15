import React from "react"
import "./Work-card.css"

const WorkCard = ({item}) => {
    return (
        <div className="work-card">
            <img src={item.companeyLogo} alt="" className="work-logo" />
            <div className="work-info">
                <label htmlFor="">{item.Companey}</label>
                <div className="work-dates">
                    <label htmlFor="">{item.DateJoining}</label>-<label>{ item.DateEnd}</label>
                </div>
                <div>
                    <p>{ item.Designation}</p>
                </div>
                <div className="work-desc">
                    <p>{ item.work}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard

