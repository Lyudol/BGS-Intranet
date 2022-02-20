import "./button.css";
import React from "react";
import { useState } from "react";

function PE() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        PE {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://www.aqa.org.uk/subjects/physical-education/gcse/physical-education-8582"
            target="_blank"
          >
            AQA GCSE PE
          </a>
          <div></div>
          <a
            className="link"
            href="https://www.aqa.org.uk/subjects/physical-education/a-level/physical-education-7582"
            target="_blank"
          >
            AQA A LEVEL PE
            <div></div>
          </a>
          <a
            className="link"
            href="https://senecalearning.com/en-GB/"
            target="_blank"
          >
            Seneca
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default PE;
