import React from "react";
import "./button.css";
import { useState } from "react";
import Classroom from "./classroomButton";
import SatchelOne from "./satcheloneButton";
import Outlook from "./outlookButton";
import Art from "./Art";
import GoogleDrive from "./googledriveButton";
import Maths from "./Maths";
import Links from "./Links";
import English from "./English";
import Science from "./Science";
import Computing from "./Computing";
import Business from "./Business";
import Economics from "./Economics";
import History from "./History";
import MFL from "./MFL";
import Music from "./Music";
import PE from "./PE";
import RS from "./RS";
import PSHCE from "./PSHCE";
import Sociology from "./Sociology";
import DT from "./DT";
import Subject from "./Subjects.jpg";

function Subjects() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <a onClick={hideOrShow}>
        <img className="Icon" src={Subject} alt="Links"></img>
      </a>
      {isActive && (
        <div className="SubjectPanel">
          <Art />
          <Business />
          <Computing />
          <DT />
          <Economics />
          <English />
          <History />
          <Maths />
          <MFL />
          <Music />
          <PE />
          <PSHCE />
          <RS />
          <Science />
          <Sociology />
        </div>
      )}
    </div>
  );
}

function ButtonsDiv() {
  return (
    <div id="ButtonsDiv">
      <SatchelOne />
      <Classroom />
      <GoogleDrive />
      <Outlook />
      <Links />
      <Subjects />
    </div>
  );
}

export default ButtonsDiv;
