import React from "react";
import "./Header.css";
import logo from "./Logo.jpg";
import { useNavigate } from "react-router-dom";

function link() {
  window.open(
    "https://docs.google.com/forms/d/1LMjWaeihbMAdrGdoG96Db7kFg9WhR620m2dA0QHQ75U/edit",
    "_blank"
  );
}

function Header() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="Header">
        <a href="https://www.burnhamgrammar.org.uk/" target={"_blank"}>
          <img src={logo} alt="Burnham Grammar Logo"></img>
        </a>
        <button
          className="aboutIntranet"
          onClick={() => {
            navigate("/About");
          }}
        >
          About Intranet
        </button>
        <button className="councilButton" onClick={link}>
          School Council
        </button>
      </div>
      <div className="Chin"></div>
    </div>
  );
}

export default Header;
