import "./button.css";
import React from "react";
import { useState } from "react";

function RS() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        RS {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://my.dynamic-learning.co.uk/Default.aspx"
            target="_blank"
          >
            Dynamic learning
          </a>
        </div>
      )}
    </div>
  );
}

export default RS;
