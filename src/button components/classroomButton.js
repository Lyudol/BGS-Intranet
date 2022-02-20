import React from "react";
import "./button.css";
import Class from "./Classroom.jpg";
function Classroom() {
  return (
    <div>
      <a href="https://classroom.google.com/" target={"_blank"}>
        <img src={Class} alt="Classroom" className="Icon"></img>
      </a>
    </div>
  );
}

export default Classroom;
