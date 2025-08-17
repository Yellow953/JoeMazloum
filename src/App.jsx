import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function FloatingIcons({ mouseX, mouseY }) {
  const icons = [
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
    "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg",
  ];

  const positions = [
    { top: "10%", left: "15%" },
    { top: "10%", left: "70%" },
    { top: "35%", left: "90%" },
    { top: "40%", left: "25%" },
    { top: "65%", left: "50%" },
    { top: "70%", left: "5%" },
    { top: "75%", left: "80%" },
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
              opacity: 0.25,
              filter: "invert(1) drop-shadow(0 0 6px rgba(255,255,255,0.15))",
              pointerEvents: "none",
              zIndex: 0,
            }}
            animate={{
              x: mouseX / (20 * depth),
              y: mouseY / (20 * depth),
              rotate: 360,
            }}
            transition={{
              duration: 20 + depth * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </>
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
      className={`left-right-section${reverse ? " reverse" : ""}`}>
      <motion.div
        className="lr-text"
        initial="hidden"
        animate={controlsText}
        variants={variantsText}>
        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>{title}</h2>

        <p className="lr-p">
          I’m <strong>Joe Mazloum</strong>, a passionate software engineer
          specializing in building scalable SaaS platforms, CRMs, ERPs and
          mobile apps. My expertise spans <strong>Laravel</strong>,{" "}
          <strong>Flutter</strong>, and full-stack development, with a proven
          track record in high-performance, user-friendly apps and systems.
        </p>
        <p className="lr-p">
          I’ve delivered solutions across Europe and the Middle East—modernizing
          legacy systems, improving performance, and shipping polished products.
          Expect clean code, efficient systems, and a collaborative partner.
        </p>
      </motion.div>

      <motion.div
        className="lr-image"
        initial="hidden"
        animate={controlsImage}
        variants={variantsImage}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            borderRadius: 15,
            boxShadow: "0 0 15px #fff",
          }}
        />
      </motion.div>
    </section>
  );
}

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
    {
      name: "Flutter",
      description:
        "Built mobile applications with Flutter, ensuring smooth cross-platform performance and native-like user experiences. Delivered apps that integrated with backend systems for real-time updates or with firebase.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/flutter/flutter.png",
    },
    {
      name: "Shopify",
      description:
        "Customized Shopify stores and themes, optimized product pages, and integrated upselling strategies. Improved performance and conversions with tailored e-commerce solutions.",
      image:
        "https://cdn.freebiesupply.com/logos/large/2x/shopify-logo-png-transparent.png",
    },
    {
      name: "Server Deployments (Git, AWS, Linux)",
      description:
        "Proficient in deploying and managing applications on Linux servers using Git, AWS, Apache, and Nginx. Automated deployments and monitoring, reducing downtime and ensuring secure, optimized hosting environments.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/linux/linux.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newIndex = Number(entry.target.dataset.index);
            if (newIndex !== activeIndex) {
              setActiveIndex(newIndex);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeIndex]);

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
        }}>
        Skills
      </h2>
      <div className="skills-container">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <section
              key={skill.name}
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
              className="skill-item"
              style={index === 0 && !isMobile ? { marginTop: "25vh" } : {}}>
              <h2>{skill.name}</h2>
              <p>{skill.description}</p>

              {isMobile && (
                <img
                  src={skill.image}
                  alt={skill.name}
                  draggable={false}
                  style={{
                    margin: "2rem auto",
                    width: "100px",
                    height: "100px",
                    display: "block",
                  }}
                />
              )}
            </section>
          ))}
        </div>

        {!isMobile && (
          <div className="skills-image">
            <img
              src={skills[activeIndex].image}
              alt={skills[activeIndex].name}
              draggable={false}
              style={{
                width: "300px",
                height: "300px",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function About() {
  return (
    <LeftRightSection
      id="about"
      title="About Joe Mazloum"
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
        background: "linear-gradient(180deg, #000, #111)",
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
            viewport={{ once: false, amount: 0.3 }}
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
                left: "8px",
                top: "50px",
                width: "25px",
                height: "25px",
                background: "#fff",
                borderRadius: "50%",
                border: "3px solid #555",
              }}></div>

            {/* Card */}
            <div
              className="experience-card"
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
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          marginBottom: "0.5rem",
          letterSpacing: "0.05em",
        }}>
        Connect with Joe Mazloum
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          fontSize: "1.2rem",
          color: "#aaa",
          marginBottom: "2rem",
          maxWidth: "700px",
        }}>
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Whether you’re looking for a
        <strong> Laravel expert</strong>, <strong>Mobile developer</strong>, or
        a skilled full-stack engineer, I’d love to hear from you.
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ display: "flex", gap: "2rem" }}>
        <a
          href="https://github.com/Yellow953"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "2rem" }}>
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joe-mazloum-ba3604239/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "2rem" }}>
          <FaLinkedin />
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
