import "./button.css";
import React from "react";
import { useState } from "react";

function DT() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        DT {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://technologystudent.com/"
            target="_blank"
          >
            Technology Student
          </a>
          <div></div>
          <a
            className="link"
            href="http://wiki.dtonline.org/index.php/Main_Page"
            target="_blank"
          >
            DT Online Wiki
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default DT;
