import React from "react";
import "./button.css";
import Drive from "./Drive.jpg";

function GoogleDrive() {
  return (
    <div>
      <a href="https://drive.google.com/" target={"_blank"}>
        <img src={Drive} alt="Google Drive" className="Icon"></img>
      </a>
    </div>
  );
}

export default GoogleDrive;
