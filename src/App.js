import React, { Component } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import resumeData from "./resumeData";
// import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        {/* <Testimonials /> */}
        {/* <Contact resumeData={resumeData} /> */}
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
