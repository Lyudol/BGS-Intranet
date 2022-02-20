import "./button.css";
import React from "react";
import { useState } from "react";

function English() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        English {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a className="link" href="https://new.edmodo.com/" target="_blank">
            Edmodo
          </a>
          <div></div>
          <a
            className="link"
            href="https://schoolreadinglist.co.uk/"
            target="_blank"
          >
            School Reading List
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default English;
