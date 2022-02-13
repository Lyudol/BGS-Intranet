import React from "react";
import "./button.css";

function link() {
  window.open("https://drive.google.com/", "_blank");
}

function GoogleDrive() {
  return (
    <div>
      <button className="Button" onClick={link}>
        Google Drive
      </button>
    </div>
  );
}

export default GoogleDrive;
