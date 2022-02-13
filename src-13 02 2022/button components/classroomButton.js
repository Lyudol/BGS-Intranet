import React from "react";
import "./button.css";

function link() {
  window.open("https://classroom.google.com/", "_blank");
}

function Classroom() {
  return (
    <div>
      <button className="Button" onClick={link}>
        Classroom
      </button>
    </div>
  );
}

export default Classroom;
