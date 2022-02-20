import "./App.css";
import Header from "./Header";
import ButtonsDiv from "./button components/buttonsDiv";
import MorningBuzz from "./morning buzz/morningbuzz";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import About from "./About";
import Quotes from "./Quotes/Quotes";
//Any additional footers and headers go into the Home component bellow
function Home() {
  return (
    <div>
      <Header />
      <div className="App">
        <ButtonsDiv />
        <Quotes />
        <MorningBuzz />
      </div>
      <div></div>
    </div>
  );
}

//this router component is what allows us to switch between the react components Home and About
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
