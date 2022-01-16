import React from "react";
import "./SocialMedia.css";
import { SocialData } from "./SocialData";

function SocialMedia() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map((item) => {
        return (
          <a href={item.link} target="_blank">
                <div className="social-icon-div">
                    <img src={item.icon}
                       className="social-icon" alt="" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia;
