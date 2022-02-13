import "./button.css";
import React from "react";
import { useState } from "react";

function Maths() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        Maths {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a className="link" href="https://www.mymaths.co.uk/" target="_blank">
            MyMaths
          </a>
          <div></div>
          <a
            className="link"
            href="https://www.drfrostmaths.com/"
            target="_blank"
          >
            DrFrost
            <div></div>
          </a>
          <a className="link" href="https://integralmaths.org/" target="_blank">
            Integral
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Maths;
