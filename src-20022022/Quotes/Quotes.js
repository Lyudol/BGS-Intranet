import "./Quotes.css";
import React from "react";
import Typed from "typed.js";
import testUtils from "react-dom/test-utils";

function Quotes() {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "<h1>'Our lives begin to end the day \n we become silent about things that matter.'</h1>",
        "<h1>'Float like a butterfly, sting like a bee.'</h1>",
        "<h1>'It is better to light a candle \n than curse the darkness.'</h1>",
        "<h1>'I work on the motto that \n if something's not impossible,\n there must be a way to do it.'</h1>",

        "<h1>'Faith is taking the first step \n even when you don't see the whole staircase.'</h1>",
        "<h1>'Don't count the days. Make the days count.'</h1>",
        "<h1>'You can often change your circumstances \n by changing your attitude.'</h1>",
        "<h1>'Some people revel in taking risks,\n and some go through life \n taking no risks at all.'</h1>",

        "<h1>'Injustice anywhere is a threat to \n justice everywhere.'</h1>",
        "<h1>'It isn't the mountains ahead to climb \n that wear you out;\n it's the pebble in your shoe.'</h1>",
        "<h1>'I am who I am today\n because of the choices I made yesterday.'</h1>",
        "<h1>'It gets a bit boring\n talking about the same thing\n for a hundred years.'</h1>",

        "<h1>'The time is always right to do what is right.'</h1>",
        "<h1>'He who is not courageous enough to take risks\n will accomplish nothing in life.'</h1>",
        "<h1>'No one can make you feel inferior \n without your consent.'</h1>",
        "<h1>'I've always enjoyed doing work\n that intrudes, or helps people.'</h1>",

        "<h1>'Darkness cannot drive out darkness;\n only light can do that.'</h1>",
        "<h1>'If my mind can conceive it, \n if my heart can believe it--\n then I can achieve it.'</h1>",
        "<h1>'Do what you feel in your heart to be right \n- for you'll be criticized anyway.'</h1>",
        "<h1>'One's life is a matter of chance. \n Nothing that you've arranged for yourself \n works out.'</h1>",
      ],
      typeSpeed: 50,
      backspeed: 50,
      shuffle: true,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="Panel">
      <div className="QuoteBlock">
        <h1>
          <u>House Quotes:</u>
        </h1>
        <span style={{ whiteSpace: "pre" }} ref={el} />
        <div></div>

        <button className="QuoteButton" onClick={() => typed.current.reset()}>
          New Quote!
        </button>

        <button className="FreezeButton" onClick={() => typed.current.toggle()}>
          Freeze Quote!
        </button>
      </div>
    </div>
  );
}

export default Quotes;
