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
                <p>I have completed my 10th and started company called welcome Event and knew importance of good team, closed in 6 months, After that in 12th I have opened a company called Electrika PVT.  LTD with good team worked very hard for 8 months then I was removed by the Boards of Member, after that I have completed my graduation and moved to Bangalore and started my carrier in corporate event industry and There I have worked with some good company like CRED , phonePe , Huawei , vivo , Max-Life Insurance , HSBC Bank,spar mall, ETC...for 1 year after then I have worked in Yes Bank for 1 Year and got a chance to be the co-founder of company called JB SoftTech(school management app) there I have seen internal things on web or internet, I was working as part Time after 6pm and on Weekend In JB SoftTech and then my web development journey starts with MASAI School. This is all about My education journey and Experience.</p>
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
