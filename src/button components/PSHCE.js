import "./button.css";
import React from "react";
import { useState } from "react";

function PSHCE() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        PSHCE {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://familyinfo.buckinghamshire.gov.uk/"
            target="_blank"
          >
            BucksFamilyInfo
          </a>
        </div>
      )}
    </div>
  );
}

export default PSHCE;
