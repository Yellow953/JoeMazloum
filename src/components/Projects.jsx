import React from "react";
import { motion } from "framer-motion";

const ACCENT = "#111";

const projects = [
  {
    title: "DoorEast",
    subtitle: "Real Estate Marketplace",
    description:
      "A large-scale real estate platform with advanced property search, listings, and transactions. Built with a Laravel backend, Angular web app, and Flutter mobile app — deployed on AWS with auto-scaling and load balancing.",
    tags: ["Laravel", "Angular", "Flutter", "AWS", "MySQL"],
    image: "/JoeMazloum/projects/dooreast.png",
    link: "#",
  },
  {
    title: "ERP & CRM Suite",
    subtitle: "Enterprise Resource Planning",
    description:
      "Multi-currency, multi-language CRM and ERP web solutions built with Laravel and Bootstrap. Includes inventory management, POS, accounting modules, and role-based access control for enterprise clients.",
    tags: ["Laravel", "Bootstrap", "MySQL", "REST API"],
    image: "/JoeMazloum/projects/erp.png",
    link: "#",
  },
  {
    title: "QA Automation Bot",
    subtitle: "Python Selenium Testing Framework",
    description:
      "Automated testing suite built with Python and Selenium that reduced manual QA time by 70%. Includes a full reporting dashboard, test-case manager, and detailed bug-detection logging.",
    tags: ["Python", "Selenium", "Automation", "Django"],
    image: "/JoeMazloum/projects/qa-bot.png",
    link: "#",
  },
  {
    title: "Shopware E-commerce",
    subtitle: "High-conversion Online Store",
    description:
      "Custom Shopware 6 store migration and theme overhaul. Integrated upsell popups, performance optimisations, and tailored product-page designs that boosted sales by 25%.",
    tags: ["Shopware 6", "PHP", "Twig", "JavaScript"],
    image: "/JoeMazloum/projects/shopware.png",
    link: "#",
  },
];

function Tag({ label }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        background: "#f0f0f0",
        color: "#333",
        border: "1px solid #ccc",
        padding: "3px 10px",
        borderRadius: "20px",
      }}>
      {label}
    </span>
  );
}

function ProjectRow({ project, index }) {
  const isEven = index % 2 === 0;

  const imgVariant = {
    hidden: { opacity: 0, x: isEven ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const textVariant = {
    hidden: { opacity: 0, x: isEven ? 60 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.12 } },
  };

  const ImagePane = (
    <motion.div
      variants={imgVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      style={{ flex: "0 0 75%", position: "relative", overflow: "hidden", borderRadius: "12px" }}>
      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          display: "block",
          borderRadius: "12px",
        }}
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
      {/* Fallback placeholder shown if image missing */}
      <div
        style={{
          display: "none",
          width: "100%",
          height: "420px",
          borderRadius: "12px",
          background: `linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)`,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "0.5rem",
          color: "#444",
          fontSize: "0.9rem",
          border: "1px dashed #333",
        }}>
        <span style={{ fontSize: "2rem" }}>🖼️</span>
        <span>Screenshot coming soon</span>
        <span style={{ fontSize: "0.75rem" }}>{project.image}</span>
      </div>
      {/* Yellow overlay shine on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          background: "linear-gradient(135deg, rgba(0,0,0,0.08), transparent 60%)",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );

  const TextPane = (
    <motion.div
      variants={textVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      style={{
        flex: "0 0 25%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: isEven ? "0 0 0 2.5rem" : "0 2.5rem 0 0",
        gap: "1rem",
      }}>
      <div>
        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.35rem" }}>
          {project.subtitle}
        </p>
        <h3 style={{ fontSize: "1.9rem", fontWeight: 900, lineHeight: 1.1, color: "#111", margin: 0 }}>
          {project.title}
        </h3>
      </div>

      <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#555", margin: 0 }}>
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tags.map((t) => <Tag key={t} label={t} />)}
      </div>

      {project.link && project.link !== "#" && (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.85rem",
            fontWeight: 700,
            color: ACCENT,
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}>
          View Project →
        </motion.a>
      )}
    </motion.div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isEven ? "row" : "row-reverse",
        alignItems: "center",
        marginBottom: "6rem",
      }}>
      {ImagePane}
      {TextPane}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ background: "#fff", padding: "5rem 3rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}>
        <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT, marginBottom: "0.5rem" }}>
          Selected Work
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#111", margin: 0 }}>
          Projects
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ height: "4px", background: ACCENT, borderRadius: "2px", margin: "1rem auto 0" }}
        />
      </motion.div>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
