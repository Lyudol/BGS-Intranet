import "./button.css";
import React from "react";
import { useState } from "react";

function Science() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  return (
    <div>
      <button className="Button" onClick={hideOrShow}>
        Science {isActive ? "-" : "+"}
      </button>
      {isActive && (
        <div className="panel">
          <a
            className="link"
            href="https://b.socrative.com/login/student/"
            target="_blank"
          >
            Socrative
          </a>
          <div></div>
          <a className="link" href="https://phet.colorado.edu/" target="_blank">
            PHET Simulations
            <div></div>
          </a>
          <a
            className="link"
            href="https://www.kerboodle.com/users/login?user_return_to=%2Fapp"
            target="_blank"
          >
            Kerboodle(ke1)
            <div></div>
          </a>
          <a
            className="link"
            href="http://www.physicstube.org/"
            target="_blank"
          >
            Physics Tube
            <div></div>
          </a>
          <a
            className="link"
            href="https://earth.nullschool.net/#current/wind/surface/level/orthographic=-6.20,-310.69,556"
            target="_blank"
          >
            Earthschool
            <div></div>
          </a>

          <a
            className="link"
            href="http://www.gridwatch.templar.co.uk/"
            target="_blank"
          >
            National Grid
            <div></div>
          </a>
        </div>
      )}
    </div>
  );
}

export default Science;
