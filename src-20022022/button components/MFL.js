import "./button.css";
import React from "react";
import { useState } from "react";

function MFL() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        MFL {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://www.linguascope.com/"
            target="_blank"
          >
            Linguascope
          </a>
        </div>
      )}
    </div>
  );
}

export default MFL;
