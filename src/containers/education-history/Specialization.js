import React  from 'react';
import { Card } from "../../components/education/Card";
import "./Specialization.css"

export function Specialization() {
  return <div className="areas-of-special">

    <div className="areas-of-special-info">
      <h3 className="areas-of-special-title">
        Areas of Specialization
      </h3>
      <div>My expertise spans across three distinct
        fields, encompassing a diverse range of knowledge and skills
      </div>
    </div>
    <div className="container-div">
      <ul id="cards-div">
        <Card number={[1,"first"]}></Card>
        <Card number={[2,"second"]}></Card>
        <Card number={[3,"third"]}></Card>
      </ul>
    </div>


  </div>
}