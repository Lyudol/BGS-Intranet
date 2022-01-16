import react from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import reactDom from "react-dom";
import "./About.css";
import Avatar from "./img_avatar.png";

function About() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={Avatar} alt="Avatar" className="image"></img>
        </div>
        <div className="flip-card-back">
          <h1>Umar Sahabudeen</h1>
          <p>Programmer</p>
          <p>We love that guy</p>
        </div>
      </div>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={Avatar} alt="Avatar" className="image"></img>
        </div>
        <div className="flip-card-back">
          <h1>Umar Sahabudeen</h1>
          <p>Programmer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}
export default About;
