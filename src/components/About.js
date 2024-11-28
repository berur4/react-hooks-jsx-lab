// src/components/About.js

import React from "react";
import { image } from "../data/data.js"; // Correct path to your user.js file

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this portfolio to showcase my skills and projects.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
