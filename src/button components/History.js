import "./button.css";
import React from "react";
import { useState } from "react";

function History() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        History {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://www.activehistory.co.uk/"
            target="_blank"
          >
            Active History
          </a>
          <div></div>
          <a
            className="link"
            href="https://www.nationalarchives.gov.uk/"
            target="_blank"
          >
            National Archives
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default History;
