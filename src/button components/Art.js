import "./button.css";
import React from "react";
import { useState } from "react";

function Art() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        Art {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://qualifications.pearson.com/en/qualifications/edexcel-gcses/art-and-design-2016.html"
            target="_blank"
          >
            GCSE Course
          </a>
          <div></div>
          <a className="link" href="https://www.tate.org.uk/" target="_blank">
            Tate
            <div></div>
          </a>
          <a
            className="link"
            href="https://www.studentartguide.com/"
            target="_blank"
          >
            Student Art Guide
            <div></div>
          </a>
          <a
            className="link"
            href="https://www.theartstory.org/"
            target="_blank"
          >
            The Art Story
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Art;
