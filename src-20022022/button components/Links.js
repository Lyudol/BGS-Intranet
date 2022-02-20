import "./button.css";
import React from "react";
import { useState } from "react";
import link from "./Links.jpg";
import { render } from "@testing-library/react";
function Links() {
  const [isActive, setIsActive] = useState(false);
  function hideOrShow() {
    setIsActive(!isActive);
  }
  render();
  {
    return (
      <div className="IconDiv">
        <a onClick={hideOrShow}>
          <img className="Icon" src={link} alt="Links"></img>
        </a>
        {isActive && (
          <div className="panel">
            <a
              className="link"
              href="https://burnhamgrammar.cpoms.net/auth/identity?origin=https://burnhamgrammar.cpoms.net/"
              target="_blank"
            >
              BGS CPOMS
            </a>
            <div></div>
            <a
              className="link"
              href="https://www.ceop.police.uk/safety-centre/"
              target="_blank"
            >
              CEOP Safety Concerns
            </a>
            <div></div>
            <a
              className="link"
              href="http://bgs-print:9191/app"
              target="_blank"
            >
              Follow Me Print
              <div></div>
            </a>
            <div></div>
            <a
              className="link"
              href="https://edukeyapp.com/account/login"
              target="_blank"
            >
              EduKey
              <div></div>
            </a>
            <div></div>
            <a
              className="link"
              href="https://portal.turniton.co.uk/raise/issue/a6f96cd2"
              target="_blank"
            >
              Helpdesk Support
              <div></div>
            </a>
          </div>
        )}
      </div>
    );
  }
}
//This type of dropdown is called an Accordian. It works by not rendering a panel of whatever you want until
//a button is clicked and a variable is changed to false
export default Links;
