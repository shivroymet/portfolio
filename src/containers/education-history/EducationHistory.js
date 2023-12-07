import React  from 'react';
import { Info } from "../../components/education/Info";
import { BACHELORS as bachelors, MASTERS as masters } from "../../constants/Constant";
import "./EducationHistory.css"

export function EducationHistory() {
  return <div className="container education">
    <hr />

    
    <div className="row education-container">
      <div className="col-md-7 order-md-2">
        <Info info={masters}></Info>
      </div>
      <div className="col-md-5 order-md-1">
        <div className="bu-image"></div>
      </div>
    </div>
    <hr/>
    <div className="row">
      <div className="col-md-7">
        <Info info={bachelors}></Info>
      </div>
      <div className="col-md-5">
        <div className="ncu-image"></div>
      </div>
    </div>
    <hr />

  </div>
}