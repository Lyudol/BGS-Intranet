import "./button.css";
import React from "react";
import { useState } from "react";

function Music() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        Music {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://sites.google.com/burnhamgrammar.org.uk/musicdepartment/home"
            target="_blank"
          >
            Music Department Site
          </a>
          <div></div>
          <a
            className="link"
            href="https://www.focusonsound.com/"
            target="_blank"
          >
            Focus on Sound
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Music;
