import React from "react";
import LeftRightSection from "./LeftRightSection";

function About() {
  return (
    <LeftRightSection
      id="about"
      title="About Joe Mazloum"
      image="profile.jpeg"
      reverse={false}
    />
  );
}

export default About;
