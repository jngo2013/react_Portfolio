import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import About from "./component/About";
import Portfolio from "./container/PortfolioContainer";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio}/>
      </Router>
    </div>
  );
}

export default App;