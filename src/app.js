import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import Pricing from "./components/pricing/pricing";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Skills />
        <About />
        <Pricing />
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
