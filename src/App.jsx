import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

    document.body.classList.add("custom_scroller");
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

const floatingIcons = [
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
    size: 50,
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
    size: 60,
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
    size: 60,
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg",
    size: 55,
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
    size: 50,
  },
  {
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg",
    size: 50,
  },
];

function FloatingIcons({ mouseX, mouseY }) {
  const icons = [
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg",
  ];

  const positions = [
    { top: "15%", left: "20%" },
    { top: "30%", left: "75%" },
    { top: "60%", left: "15%" },
    { top: "80%", left: "50%" },
    { top: "40%", left: "40%" },
    { top: "70%", left: "75%" },
  ];

  return (
    <>
      {icons.map((src, index) => {
        const pos = positions[index % positions.length];
        const depth = (index % 3) + 1;
        const size = 50 + depth * 10;

        return (
          <motion.img
            key={index}
            src={src}
            alt=""
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              width: `${size}px`,
              opacity: 0.08, // soft ghost effect
              filter: "invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.15))",
              pointerEvents: "none",
              zIndex: 0,
            }}
            animate={{
              x: mouseX / (20 * depth),
              y: mouseY / (20 * depth),
              rotate: [0, 3, -3, 0], // very subtle tilt
            }}
            transition={{
              duration: 8 + depth * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <section
      id="hero"
      onMouseMove={(e) =>
        setMouse({
          x: e.clientX - window.innerWidth / 2,
          y: e.clientY - window.innerHeight / 2,
        })
      }
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 2rem",
        color: "#fff",
        maxWidth: "2160px",
      }}>
      <FloatingIcons
        mouseX={mouse.x}
        mouseY={mouse.y}
      />

      <h1
        style={{
          fontWeight: "900",
          fontSize: "4rem",
          letterSpacing: "0.15em",
          zIndex: 1,
        }}>
        Joe Mazloum
      </h1>
      <div
        className="typewriter"
        style={{ maxWidth: "90vw", marginTop: "1rem", zIndex: 1 }}>
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
          delaySpeed={1000}
        />
      </div>
    </section>
  );
}

function SkillsSticky() {
  const skills = [
    {
      name: "PHP & Laravel",
      description:
        "Expert in developing scalable SaaS platforms, CRMs, and ERPs using Laravel. Delivered multi-currency, multi-language systems and optimized performance for high-traffic applications.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/laravel/laravel.png",
    },
    {
      name: "JavaScript & React",
      description:
        "Proficient in building dynamic SPAs and interactive UIs using React. Experience with offline synchronization, responsive design, and modern frontend workflows.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
    },
    {
      name: "Ruby on Rails",
      description:
        "Designed and implemented robust backend features with Ruby on Rails, improving user engagement and ensuring seamless multi-team project delivery.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/rails/rails.png",
    },
    {
      name: "Python & Automation",
      description:
        "Developed advanced automation bots using Python Selenium, reducing manual testing time by 70% and improving bug detection accuracy.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
    },
    {
      name: "Databases & Server Management",
      description:
        "Experienced with MySQL, PostgreSQL, and SQLite. Skilled in Linux server deployments, AWS, Apache, and Nginx for secure and optimized hosting.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/mysql/mysql.png",
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
      text="I’m a passionate software engineer with expertise in building scalable SaaS platforms, CRMs, and ERPs. Skilled in Laravel, React, and full-stack development, I thrive on solving complex problems and delivering polished, high-performance applications. My experience spans from backend architecture and automation to sleek, responsive frontends — always with a focus on usability, efficiency, and quality."
      image="https://media.licdn.com/dms/image/v2/D4D03AQGWGKVIuh_WuA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707509135939?e=1757548800&v=beta&t=H6h0U9V7NxPENlt62EGIGF9Xi0uifgmX9vFjK-Qw-Uk"
      reverse={false}
    />
  );
}

function Experience() {
  const experiences = [
    {
      role: "PHP Software Developer",
      company: "Göckler GMBH",
      date: "Nov 2023 – Oct 2024",
      description:
        "Modernized legacy PHP websites and CMS, upgrading from Xtcommerce 5 to 6.5 and Shopware 6, improving platform stability. Optimized performance, reducing load times and boosting sales by 25% through design enhancements, popups, and upsell strategies. Delivered backend and frontend features ahead of schedule, enhancing client satisfaction.",
    },
    {
      role: "Quality Assurance Developer",
      company: "INTALIO",
      date: "May 2023 – Oct 2023",
      description:
        "Developed a Python Selenium automation bot, reducing manual testing time by 70% and improving bug detection accuracy. Created comprehensive User/Admin guides, reducing support requests by 30%. Enhanced software quality via rigorous testing and detailed test cases.",
    },
    {
      role: "Ruby on Rails Developer",
      company: "IStay",
      date: "Oct 2022 – Apr 2023",
      description:
        "Built responsive, user-focused front-end websites, increasing engagement by 15%. Designed and implemented robust backend functionalities with Ruby on Rails, ensuring smooth cross-team delivery. Improved workflow integration using Git/GitHub.",
    },
    {
      role: "Laravel Full Stack Developer",
      company: "Eddy’s Group",
      date: "2020 – 2021",
      description:
        "Architected and deployed CRM and ERP web solutions with Laravel and Bootstrap, improving efficiency by 20%. Developed mobile apps integrated with backend systems, increasing client accessibility. Managed Linux server deployments, decreasing downtime by 15%.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#000",
        padding: "4rem 2rem",
        color: "#fff",
      }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "3rem",
        }}>
        Experience
      </h2>
      <div
        style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        {/* Timeline line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "20px",
            width: "2px",
            height: "100%",
            background: "linear-gradient(to bottom, #888, transparent)",
          }}></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }} // 👈 will trigger every time in view
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              marginBottom: "3rem",
              position: "relative",
            }}>
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "11px",
                top: "10px",
                width: "18px",
                height: "18px",
                background: "#fff",
                borderRadius: "50%",
                border: "3px solid #555",
              }}></div>

            {/* Card */}
            <div
              style={{
                background: "#111",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(255,255,255,0.05)",
                marginLeft: "50px",
                flex: 1,
              }}>
              <h3 style={{ margin: 0, fontSize: "1.5rem" }}>
                {exp.role} @ {exp.company}
              </h3>
              <span style={{ fontSize: "0.9rem", color: "#aaa" }}>
                {exp.date}
              </span>
              <p style={{ marginTop: "0.8rem", lineHeight: 1.6 }}>
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
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

function Footer() {
  return (
    <footer
      style={{
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}>
      {/* Name & Tagline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          marginBottom: "0.5rem",
          letterSpacing: "0.05em",
        }}>
        Joe Mazloum
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false }}
        style={{
          fontSize: "1.2rem",
          color: "#aaa",
          marginBottom: "2rem",
        }}>
        Software Engineer • Problem Solver • Tech Enthusiast
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
        style={{ display: "flex", gap: "2rem" }}>
        <a
          href="https://github.com/Yellow953"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "2rem" }}>
          <FaGithub
            style={{
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
              e.currentTarget.style.color = "#888";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "#fff";
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/joe-mazloum-ba3604239/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "2rem" }}>
          <FaLinkedin
            style={{
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
              e.currentTarget.style.color = "#0A66C2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "#fff";
            }}
          />
        </a>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false }}
        style={{ marginTop: "3rem", fontSize: "1rem", color: "#aaa" }}>
        📧{" "}
        <a
          href="mailto:joemazloum95@gmail.com"
          style={{ color: "#fff" }}>
          joemazloum95@gmail.com
        </a>
      </motion.div>
    </footer>
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
      <Footer />
    </>
  );
}
