import React from "react";
import "./button.css";

function link() {
  window.open("https://outlook.office.com/mail/", "_blank");
}

function Outlook() {
  return (
    <div>
      <button className="Button" onClick={link}>
        Outlook
      </button>
    </div>
  );
}

export default Outlook;
