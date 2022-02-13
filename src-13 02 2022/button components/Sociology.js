import "./button.css";
import React from "react";
import { useState } from "react";

function Sociology() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        Sociology {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://sites.google.com/burnhamgrammar.org.uk/sociologybgs/home"
            target="_blank"
          >
            Sociology Site
          </a>
        </div>
      )}
    </div>
  );
}

export default Sociology;
