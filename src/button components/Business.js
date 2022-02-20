import "./button.css";
import React from "react";
import { useState } from "react";

function Business() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        Business {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a className="link" href="https://www.ft.com/" target="_blank">
            Financial Times
          </a>
          <div></div>
          <a className="link" href="https://startups.co.uk/" target="_blank">
            Startups
            <div></div>
          </a>
          <a
            className="link"
            href="https://yeonline.y-e.org.uk/"
            target="_blank"
          >
            Young Enterprise Portal
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Business;
