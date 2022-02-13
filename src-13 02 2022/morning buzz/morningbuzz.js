import React from "react";
import "./morningbuzz.css";
window.addEventListener("dblclick", () => {
  document
    .getElementById("buzz")
    .requestFullscreen()
    .catch((e) => {
      console.log(e);
    });
});

function MorningBuzz() {
  return (
    <div>
      <iframe
        id="buzz"
        className="MorningBuzz"
        src="https://docs.google.com/document/d/e/2PACX-1vSxM8FUb2pp3kT35SNVzgmFF5U-QYRJaiQnbheAtStPG15YdVhRp3SByb_d_K4jeZ48LZOyXl6jDHzr/pub?embedded=true"
      ></iframe>

      <iframe
        className="Frame"
        src="https://www.feedgrabbr.com/inframe/?widgetid=73fa06a51d3287c45c2a69c37"
        allowtransparency="true"
      ></iframe>
    </div>
  );
}

export default MorningBuzz;
