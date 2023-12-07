import React  from 'react';
import { Skill } from "../../components/skill/Skill";
import "./Skills.css"
export function Skills() {

  const skills = ["Design", "Deploy", "Code", "Manage", "Maintain"];

  let skillsList = [];

  skills.forEach((skill) => {
    const class_name = "skill-item " + skill.toLowerCase()
    skillsList.push(<li key={skill} className={class_name}>
      <Skill name={skill}></Skill>
    </li>);
  });
  return <>
    <blockquote className="display-6 text-center mb-0 my-5">What I Do</blockquote>
    <div className="skill-wrapper">
      <ul className="skill-items">
        {skillsList}
      </ul>
    </div>
  </>

}