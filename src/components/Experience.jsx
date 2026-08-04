import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import dooreastLogo from "../assets/logos/dooreast.jpg";
import gocklerLogo  from "../assets/logos/gockler.png";
import intalioLogo  from "../assets/logos/intalio.jpeg";
import istayLogo    from "../assets/logos/istay.png";

const cardVariants = {
  hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay },
  }),
};

function TimelineDot() {
  return (
    <div style={{ position: "absolute", left: "8px", top: "50px" }}>
      <motion.div
        animate={{ scale: [1, 1.9, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "#111",
          width: "25px",
          height: "25px",
        }}
      />
      <div
        style={{
          position: "relative",
          width: "25px",
          height: "25px",
          background: "#111",
          borderRadius: "50%",
          border: "3px solid #555",
          zIndex: 1,
        }}
      />
    </div>
  );
}

/* ── Company logo (omitted entirely for companies without one) ── */
function CompanyLogo({ exp }) {
  return (
    <div style={{
      width: 96,
      height: 96,
      flexShrink: 0,
      borderRadius: "14px",
      border: "1px solid #e6e6e6",
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <img
        src={exp.logo}
        alt={`${exp.company} logo`}
        loading="lazy"
        decoding="async"
        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
      />
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.14)" }}
      style={{
        background: "#ffffff",
        padding: "1.5rem 1.5rem 1.5rem 1.8rem",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        marginLeft: "50px",
        flex: 1,
        borderLeft: "4px solid #111",
        cursor: "default",
        transition: "box-shadow 0.3s ease",
      }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
        {exp.logo && (
          <motion.div
            custom={0.05}
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}>
            <CompanyLogo exp={exp} />
          </motion.div>
        )}

        <div style={{ minWidth: 0 }}>
          <motion.h3
            custom={0.05}
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            style={{ margin: 0, fontSize: "1.5rem" }}>
            {exp.role}{" "}
            <span style={{ color: "#555" }}>@ {exp.company}</span>
          </motion.h3>

          <motion.span
            custom={0.15}
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            style={{
              fontSize: "0.85rem",
              color: "#555",
              display: "inline-block",
              marginTop: "0.3rem",
              background: "#f0f0f0",
              padding: "2px 10px",
              borderRadius: "20px",
            }}>
            {exp.date}
          </motion.span>
        </div>
      </div>

      <motion.p
        custom={0.28}
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        style={{ marginTop: "0.8rem", lineHeight: 1.6, color: "#333" }}>
        {exp.description}
      </motion.p>
    </motion.div>
  );
}

function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      role: "Lead Software Engineer",
      company: "DoorEast",
      logo: dooreastLogo,
      date: "Jan 2025 – now",
      description:
        "Led development of a large-scale real estate marketplace, delivering a seamless user experience across Angular web and Flutter mobile applications. Built and maintained a Laravel backend powering advanced property search, listings, and transactions. Deployed and scaled infrastructure on AWS (Route53, S3, EC2, VPS) with load balancing and auto-scaling, ensuring high availability and performance. Improved deployment pipelines and system reliability, supporting thousands of active users.",
    },
    {
      role: "PHP Software Developer",
      company: "Göckler GMBH",
      logo: gocklerLogo,
      date: "Nov 2023 – Oct 2024",
      description:
        "Modernized legacy PHP websites and CMS, upgrading from Xtcommerce 5 to 6.5 and Shopware 6, improving platform stability. Optimized performance, reducing load times and boosting sales by 25% through design enhancements, popups, and upsell strategies. Delivered backend and frontend features ahead of schedule, enhancing client satisfaction.",
    },
    {
      role: "Quality Assurance Developer",
      company: "INTALIO",
      logo: intalioLogo,
      date: "May 2023 – Oct 2023",
      description:
        "Developed a Python Selenium automation bot, reducing manual testing time by 70% and improving bug detection accuracy. Created comprehensive User/Admin guides, reducing support requests by 30%. Enhanced software quality via rigorous testing and detailed test cases.",
    },
    {
      role: "Ruby on Rails Developer",
      company: "IStay",
      logo: istayLogo,
      date: "Oct 2022 – Apr 2023",
      description:
        "Built responsive, user-focused front-end websites, increasing engagement by 15%. Designed and implemented robust backend functionalities with Ruby on Rails, ensuring smooth cross-team delivery. Improved workflow integration using Git/GitHub.",
    },
    {
      role: "Laravel Full Stack Developer",
      company: "Eddy's Group",
      date: "2020 – 2021",
      description:
        "Architected and deployed CRM and ERP web solutions with Laravel and Bootstrap, improving efficiency by 20%. Developed mobile apps integrated with backend systems, increasing client accessibility. Managed Linux server deployments, decreasing downtime by 15%.",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        background: "linear-gradient(180deg, #f5f5f5, #eeeeee)",
        padding: "4rem 2rem",
        color: "#111",
      }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "3rem" }}>
        Experience
      </motion.h2>

      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "20px",
            width: "2px",
            height: "100%",
            background: "#e0e0e0",
          }}>
          <motion.div
            style={{
              height: lineHeight,
              width: "100%",
              background: "linear-gradient(to bottom, #111, #555)",
              originY: 0,
            }}
          />
        </div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{ display: "flex", marginBottom: "3rem", position: "relative" }}>
            <TimelineDot />
            <ExperienceCard exp={exp} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
