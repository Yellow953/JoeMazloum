import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const parallaxStrength = 0.3;

function useParallax() {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffsetY(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return offsetY;
}

function ParallaxBackground({ image, strength = parallaxStrength }) {
  const offsetY = useParallax();
  return (
    <div
      className="parallax-bg"
      style={{
        backgroundImage: `url(${image})`,
        transform: `translateY(${offsetY * strength}px)`,
      }}
    />
  );
}

function LeftRightSection({ id, title, text, image, reverse = false }) {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controlsText.start("visible");
      controlsImage.start("visible");
    } else {
      controlsText.start("hidden");
      controlsImage.start("hidden");
    }
  }, [controlsText, controlsImage, inView]);

  const variantsText = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const variantsImage = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id={id}
      ref={ref}
      style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        gap: "3rem",
        padding: "6rem 2rem",
        maxWidth: 900,
        margin: "0 auto",
      }}>
      <motion.div
        style={{ flex: 1 }}
        initial="hidden"
        animate={controlsText}
        variants={variantsText}>
        <h2 style={{ marginBottom: "1rem" }}>{title}</h2>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>{text}</p>
      </motion.div>
      <motion.div
        style={{ flex: 1 }}
        initial="hidden"
        animate={controlsImage}
        variants={variantsImage}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 0 15px #fff",
          }}
        />
      </motion.div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 2rem",
      }}>
      <ParallaxBackground image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80" />
      <h1
        style={{
          fontWeight: "900",
          fontSize: "4rem",
          letterSpacing: "0.15em",
        }}>
        Joe Mazloum
      </h1>
      <div
        className="typewriter"
        style={{ maxWidth: "90vw", marginTop: "1rem" }}>
        <Typewriter
          words={[
            "Software Engineer.",
            "Problem Solver.",
            "Tech Enthusiast.",
            "Lifelong Learner.",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>
    </section>
  );
}

function SkillsSticky() {
  const skills = [
    {
      name: "JavaScript",
      description:
        "JavaScript is a versatile scripting language primarily used for client-side web development.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png",
    },
    {
      name: "React",
      description:
        "React is a popular JavaScript library for building user interfaces using components.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
    },
    {
      name: "Node.js",
      description:
        "Node.js allows running JavaScript on the server, enabling full-stack JS development.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png",
    },
    {
      name: "C++",
      description:
        "C++ is a powerful, high-performance language commonly used for systems programming.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/cpp/cpp.png",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        maxWidth: 1200,
        margin: "0 auto",
        color: "#eee",
        minHeight: "100vh",
        position: "relative",
        padding: "2rem",
        gap: "3rem",
      }}>
      <div style={{ flex: 1 }}>
        {skills.map((skill, index) => {
          const [ref, inView] = useInView({
            threshold: 0.6,
          });

          if (inView && activeIndex !== index) {
            setActiveIndex(index);
          }

          return (
            <section
              key={skill.name}
              ref={ref}
              style={{
                marginBottom: "50vh",
                paddingBottom: "2rem",
              }}>
              <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {skill.name}
              </h2>
              <p style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
                {skill.description}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                volutpat dolor vel mauris tempus, vitae luctus metus pulvinar.
                Praesent varius, lacus ut ultricies malesuada, risus elit
                pellentesque urna, vitae feugiat libero elit nec nulla.
              </p>
            </section>
          );
        })}
      </div>

      <div
        style={{
          flexBasis: "40%",
          position: "sticky",
          top: "2rem",
          height: "calc(100vh - 4rem)",
          alignSelf: "start",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#111",
          borderRadius: "15px",
          padding: "1rem",
          boxShadow: "0 0 30px rgba(255,255,255,0.1)",
        }}>
        <img
          src={skills[activeIndex].image}
          alt={skills[activeIndex].name}
          style={{
            maxHeight: "80vh",
            maxWidth: "100%",
            objectFit: "contain",
            borderRadius: "15px",
            userSelect: "none",
            pointerEvents: "none",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <LeftRightSection
      id="about"
      title="About Me"
      text="Passionate software engineer with experience in full-stack development, problem-solving, and delivering scalable solutions."
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
      reverse={false}
    />
  );
}

function Experience() {
  return (
    <>
      <LeftRightSection
        id="exp1"
        title="Software Engineer @ Awesome Tech Co"
        text="Building scalable web applications with React and Node.js."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
        reverse={true}
      />
      <LeftRightSection
        id="exp2"
        title="Junior Developer @ Innovate Solutions"
        text="Worked on frontend features and bug fixes using JavaScript."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
        reverse={false}
      />
    </>
  );
}

function LanguagesMarquee() {
  const languages = ["English", "Arabic", "German", "French"];

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "#111",
        padding: "1rem 0",
        margin: "100px 0 50px 0 ",
        color: "#eee",
        fontWeight: "600",
        fontSize: "1.5rem",
        userSelect: "none",
      }}>
      <div
        style={{
          display: "inline-block",
          paddingLeft: "100%",
          animation: "marquee 15s linear infinite",
        }}>
        {languages.map((lang, i) => (
          <span
            key={i}
            style={{ marginRight: "100px", display: "inline-block" }}>
            {lang}
          </span>
        ))}
        {languages.map((lang, i) => (
          <span
            key={"repeat-" + i}
            style={{ marginRight: "100px", display: "inline-block" }}>
            {lang}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <SkillsSticky />
      <LanguagesMarquee />
      <Experience />
    </>
  );
}
