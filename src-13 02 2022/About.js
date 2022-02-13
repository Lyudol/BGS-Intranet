import react from "react";
import Rayan from "./Rayan.jpg";
import reactDom from "react-dom";
import "./About.css";
import Christian from "./Christian.jpg";
import Alek from "./AlekPic.jpg";
import Umar from "./Umar.jpg";
import Default from "./Default.png";
import { useState } from "react";
function link() {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeX92ihHDJx28oRxnQRfyiSEzIslB8IVRd9zflMg2rl-BAPwg/viewform?usp=pp_url&entry.496144241=Yes",
    "_blank"
  );
}

function About() {
  const [isHTML, setisHTML] = useState(true);
  function hideOrShowH() {
    setisHTML(!isHTML);
  }
  const [isCSS, setisCSS] = useState(true);
  function hideOrShowC() {
    setisCSS(!isCSS);
  }
  const [isJavaScript, setisJavaScript] = useState(true);
  function hideOrShowJ() {
    setisJavaScript(!isJavaScript);
  }
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <img src={Umar} alt="Umar Sahabudeen" className="img"></img>
          <div className="container">
            <h2>Umar Sahabudeen</h2>
            <p className="title">Student</p>
            <p>Develops software, often within a team...</p>
            <p>6sahabuds@burnhamgrammar.org.uk</p>
            <p>
              <button className="button" onClick={link}>
                Feedback
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={Alek} alt="Alek Petseski" className="img"></img>
          <div className="container">
            <h2>Alek Petseski</h2>
            <p className="title">Student</p>
            <p>Manages GitHub versions...</p>
            <p>6apatseski@burnhamgrammar.org.uk</p>
            <p>
              <button className="button" onClick={link}>
                Feedback
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src={Default} alt="Jasjot Saggu" className="img"></img>
          <div className="container">
            <h2>Jasjyot Saggu</h2>
            <p className="title">Student</p>
            <p>Designs webpages using React...</p>
            <p>6jsaggu@burnhamgrammar.org.uk</p>
            <p>
              <button className="button" onClick={link}>
                Feedback
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src={Christian} alt="Christian Yuen" className="img"></img>
          <div className="container">
            <h2>Christian Yuen</h2>
            <p className="title">Student</p>
            <p>Programs in Python, JSX...</p>
            <p>6cyuen@burnhamgrammar.org.uk</p>
            <p>
              <button className="button" onClick={link}>
                Feedback
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src={Rayan} alt="Rayan Norval" className="img2"></img>
          <div className="container">
            <h2>Rayan Norval</h2>
            <p className="title">Student</p>
            <p>The Engineer Who Dropped Physics...</p>
            <p>6rnorval@burnhamgrammar.org.uk</p>
            <p>
              <button className="button" onClick={link}>
                Feedback
              </button>
            </p>
          </div>
        </div>
      </div>
      <button className="Button" onClick={hideOrShowH}>
        HTML {isHTML ? "-" : "+"}
      </button>
      <button className="Button" onClick={hideOrShowC}>
        CSS {isCSS ? "-" : "+"}
      </button>
      <button className="Button" onClick={hideOrShowJ}>
        JavaScript {isJavaScript ? "-" : "+"}
      </button>
      {isHTML && (
        <div className="HTMLdiv">
          <p>Hyper Text Markup Language forms the body of webpages....</p>
        </div>
      )}
      {isCSS && (
        <div className="CSSdiv">
          <p>CSS adds the color and styles of a webpage....</p>
        </div>
      )}
      {isJavaScript && (
        <div className="JavaScriptdiv">
          <p>JavaScript adds functionality to webpages....</p>
        </div>
      )}
    </div>
  );
}

export default About;
