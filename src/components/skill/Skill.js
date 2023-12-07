import React  from 'react';
import "./Skill.css"

export function Skill({name}){
    return <span className="skill-link">
              <figure className="skill-icon"></figure>
              <span className="skill-label">{name}</span>
            </span>
}