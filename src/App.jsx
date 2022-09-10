import React from "react";
import Projects from "./components/Projects";
import Banner from "./components/Banner";
import PFImage from "./assets/image.png";
import StateExample from "./components/StateExample";
import "./App.css";
import EffectExample from "./components/EffectExample";

function App() {
  return (
    <div className="App">
      <Banner
        fullName="Carlos Chavez"
        desc="I am a software developer with a passion for web development. I enjoy building personal projects, learning and using new technologies, and tackling new areas of development whenever possible. Feel free to contact me below!"
        image={PFImage}
        github="www.github.com/carlosenrique7"
        linkedin="https://www.linkedin.com/in/carlos-chavez-4714b3201/"
      />
      <Projects />
    </div>
  );
}

export default App;
