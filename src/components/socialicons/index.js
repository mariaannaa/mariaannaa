import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiStrava } from "react-icons/si";
import { socialprofils } from "../../data/site";

const ICON_MAPPING = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedin,
  strava: SiStrava,
  
};

const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofils).map(([platform, value]) => {
          const IconComponent = ICON_MAPPING[platform];
          if (!IconComponent || !value) return null;

          const href =
            platform === "email" ? `mailto:${value}` : value;

          return (
            <li key={platform}>
              <a href={href} target={platform === "email" ? undefined : "_blank"} rel={platform === "email" ? undefined : "noopener noreferrer"}>
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p></p>
    </div>
  );
};

export default Socialicons;