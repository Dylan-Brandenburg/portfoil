import React from "react";
import skills from "./Skill_util";
import "./Skills.css";
const Skills = () => {
  const skillsDisplay = skills.map(({ skill, img, url }) => (
    <div className="Skill" key={skill}>
      <p className="Skill__title">{skill}</p>
      <a className="Skill__link" href={url} target="_blank">
        <img className="Skill__img" src={img} alt={skill} />
      </a>
    </div>
  ));

  return (
    <div className="Skills_container">
      <div className="Skills">{skillsDisplay}</div>
    </div>
  );
};

export default Skills;
