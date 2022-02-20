import React from "react";
import "./button.css";
import Satchel from "./SatchelOne.jpg";

function SatchelOne() {
  return (
    <div>
      <a href="https://www.satchelone.com/" target={"_blank"}>
        <img src={Satchel} alt="SatchelOne" className="Icon"></img>
      </a>
    </div>
  );
}

export default SatchelOne;
