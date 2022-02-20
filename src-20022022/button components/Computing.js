import "./button.css";
import React from "react";
import { useState } from "react";

function Computing() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        Computing {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://b.socrative.com/login/student/"
            target="_blank"
          >
            Socrative
          </a>
          <div></div>
          <a className="link" href="https://replit.com/" target="_blank">
            Repl.it
            <div></div>
          </a>
          <a className="link" href="https://www.teach-ict.com/" target="_blank">
            Teach ICT
            <div></div>
          </a>
          <a className="link" href="https://kahoot.it/" target="_blank">
            Kahoot
            <div></div>
          </a>
          <a
            className="link"
            href="https://challenge.bebras.uk/"
            target="_blank"
          >
            Bebras Challenge
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Computing;
