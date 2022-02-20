import "./button.css";
import React from "react";
import { useState } from "react";

function Economics() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        Economics {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://www.ezyeducation.co.uk/user-profile/edit-profile.html?view=login"
            target="_blank"
          >
            EzyEconomics
          </a>
          <div></div>
          <a className="link" href="https://iea.org.uk/" target="_blank">
            Institute of Economic Affairs
            <div></div>
          </a>
          <a className="link" href="https://www.weforum.org/" target="_blank">
            The World Economic Forum
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Economics;
