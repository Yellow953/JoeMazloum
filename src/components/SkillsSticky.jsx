import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function SkillsSticky() {
  const skills = [
    {
      name: "PHP & Laravel",
      description:
        "Expert in architecting and developing scalable SaaS platforms, backend systems, and full-stack web applications using Laravel. Delivered multi-currency and multi-language CRMs and ERPs, optimized for high-traffic environments with API integrations. Designed modular architectures to support rapid feature expansion, improving maintainability and scalability. Implemented secure authentication, role-based access, and third-party service integrations, ensuring enterprise-grade performance and reliability.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/laravel/laravel.png",
    },
    {
      name: "JavaScript & React",
      description:
        "Proficient in building dynamic Single Page Applications (SPAs) and interactive, user-friendly interfaces using React. Experienced in implementing offline synchronization, responsive design, and state management. Skilled in modern frontend workflows, smooth animations and transitions with Framer Motion, enhancing overall user experience. Focused on delivering optimized, modern and scalable UI solutions that enhance user engagement.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png",
    },
    {
      name: "Ruby on Rails",
      description:
        "Designed and implemented robust backend features with Ruby on Rails, enabling scalable and maintainable applications. Improved user engagement by optimizing APIs, database queries, and background jobs. Collaborated across multiple teams to ensure seamless integration and on-time project delivery, while maintaining high code quality through testing, version control, and CI/CD workflows.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/rails/rails.png",
    },
    {
      name: "Python",
      description:
        "Developed advanced automation bots using Python and Selenium, reducing manual testing time by 70% and improving bug detection accuracy. Built a wide range of applications with Python, including web backends with Django, interactive applications and games with Pygame, and automation scripts for general-purpose tasks. Delivered clean, modular, and scalable code.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png",
    },
    {
      name: "Database",
      description:
        "Skilled in designing and managing databases with MySQL, PostgreSQL, and SQLite. Experienced in Laravel migrations, seeders, factories, and data import/export, with a focus on performance, scalability, and maintainable schema design for web and mobile applications.",
      image:
        "https://raw.githubusercontent.com/github/explore/main/topics/mysql/mysql.png",
    },
    {
      name: "Flutter",
      description:
        "Built cross-platform mobile applications with Flutter, delivering smooth, native-like user experiences. Applied MVC architecture for maintainable code structure and GetX for state management, routing, and dependency injection. Integrated apps with backend systems for real-time updates and Firebase services, ensuring responsive, scalable, and efficient mobile solutions.",
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
        "Proficient in deploying and managing applications across AWS cloud infrastructure and traditional shared hosting providers. Skilled with AWS EC2, S3, Route53, VPS, Load Balancers, and Auto Scaling groups, ensuring high availability, security, and cost optimization. Configured and maintained Linux servers using Git, Apache, and Nginx, with automated CI/CD pipelines. Experienced in setting up shared hosting environments on platforms like InMotion Hosting, Bluehost, Hostinger, and GoDaddy...",
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
      <div className="d-flex justify-content-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "900",
            letterSpacing: "0.05em",
            position: "relative",
            display: "inline-block",
            margin: "2rem auto",
          }}>
          SKILLS
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: "absolute",
              bottom: -8,
              left: 0,
              height: "4px",
              backgroundColor: "#ffffff",
              borderRadius: "2px",
            }}
          />
        </motion.h2>
      </div>
      <div className="skills-container">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <section
              key={skill.name}
              ref={(el) => (refs.current[index] = el)}
              data-index={index}
              className="skill-item"
              style={index === 0 && !isMobile ? { marginTop: "25vh" } : {}}>
              {!isMobile && (
                <div>
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ amount: 0.5 }}
                    style={{
                      marginBottom: "1rem",
                      fontSize: "2rem",
                      fontWeight: "700",
                    }}>
                    {skill.name}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    viewport={{ amount: 0.5 }}
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: "1.6",
                      color: "#ccc",
                    }}>
                    {skill.description}
                  </motion.p>
                </div>
              )}

              {isMobile && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ amount: 0.4 }}
                  style={{
                    margin: "1.5rem auto",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    background: "linear-gradient(145deg, #111, #1a1a1a)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                    maxWidth: "90%",
                    textAlign: "center",
                  }}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    draggable={false}
                    style={{
                      margin: "0 auto 1rem",
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    {skill.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.5",
                      color: "#ccc",
                    }}>
                    {skill.description}
                  </p>
                </motion.div>
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

export default SkillsSticky;
