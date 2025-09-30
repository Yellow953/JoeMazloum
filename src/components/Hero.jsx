import React from "react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import FloatingIcons from "./FloatingIcons";

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      id="hero"
      className="hero-section"
      onMouseMove={(e) =>
        setMouse({
          x: e.clientX - window.innerWidth / 2,
          y: e.clientY - window.innerHeight / 2,
        })
      }>
      <FloatingIcons
        mouseX={mouse.x}
        mouseY={mouse.y}
      />

      <h1 className="hero-title">Joe Mazloum</h1>

      <div className="typewriter hero-typewriter">
        <Typewriter
          words={[
            "Hi, I’m Joe Mazloum.",
            "I build scalable SaaS platforms.",
            "Full-Stack Developer with Laravel.",
            "Problem Solver & Tech Enthusiast.",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </section>
  );
}

export default Hero;
