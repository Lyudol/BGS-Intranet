import React from "react";
import "./button.css";

function link() {
  window.open("https://www.satchelone.com/", "_blank");
}

function SatchelOne() {
  return (
    <div>
      <button className="Button" onClick={link}>
        Satchel:One
      </button>
    </div>
  );
}

export default SatchelOne;
