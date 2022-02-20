import React from "react";
import "./button.css";
import Mail from "./Outlook.jpg";

function Outlook() {
  return (
    <div className="IconDiv">
      <a href="https://outlook.office.com/mail/" target={"_blank"}>
        <img src={Mail} alt="Outlook" className="Icon"></img>
      </a>
    </div>
  );
}

export default Outlook;
