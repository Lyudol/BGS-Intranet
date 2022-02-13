import React from "react";

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

function ButtonsDiv() {
  return (
    <div id="ButtonsDiv">
      <SatchelOne />
      <Classroom />
      <GoogleDrive />
      <Outlook />
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
      <Links />
    </div>
  );
}

export default ButtonsDiv;
