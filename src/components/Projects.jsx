import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// YellowPOS
import yellowPosLogin    from "../assets/projects/yellow-pos/yellow-pos-login.png";
import yellowPosDash     from "../assets/projects/yellow-pos/yellow-pos-dashboard.png";
import yellowPosPOS      from "../assets/projects/yellow-pos/yellow-pos-pos.png";
import yellowPosBuilder  from "../assets/projects/yellow-pos/yellow-pos-website-builder.png";
import yellowPos1        from "../assets/projects/yellow-pos/yellow-pos-1.png";
import yellowPos2        from "../assets/projects/yellow-pos/yellow-pos-2.png";
import yellowPos3        from "../assets/projects/yellow-pos/yellow-pos-3.png";

// Nehme Radiators
import nehmeHome  from "../assets/projects/nehme-radiators/nehme-radiators.png";
import nehmeShop  from "../assets/projects/nehme-radiators/nehme-radiators-1.png";
import nehmeCRM   from "../assets/projects/nehme-radiators/nehme-radiators-crm.png";

// Watania
import wataniaHome  from "../assets/projects/watania/watania-1.png";
import wataniaShop  from "../assets/projects/watania/watania-2.png";
import wataniaLogin from "../assets/projects/watania/watania-login.png";

// ESIB
import esibHome   from "../assets/projects/esib/esib.png";
import esibLogin  from "../assets/projects/esib/esib-login.png";
import esibDash   from "../assets/projects/esib/esib-dashboard.png";
import esibCalc   from "../assets/projects/esib/esib-calculactor.png";
import esibMgmt   from "../assets/projects/esib/esib-management.png";

// Calories
import cal1       from "../assets/projects/calories/calories-1.png";
import cal2       from "../assets/projects/calories/calories-2.png";
import cal3       from "../assets/projects/calories/calories-3.png";
import calLogin   from "../assets/projects/calories/calories-login.png";

const ACCENT = "#111";

const projects = [
  {
    title: "YellowPOS",
    subtitle: "SaaS Point of Sale Platform",
    description:
      "A full SaaS POS + e-commerce platform. Merchants get a built-in POS terminal, a drag-and-drop website builder, real-time analytics dashboard, product & inventory management, discount engine, and multi-payment support — all under one login.",
    tags: ["Laravel", "PHP", "MySQL", "SaaS", "E-commerce"],
    images: [yellowPos1, yellowPos2, yellowPos3, yellowPosLogin, yellowPosDash, yellowPosPOS, yellowPosBuilder],
    link: "https://yellow-pos.com",
  },
  {
    title: "Nehme Radiators",
    subtitle: "Corporate Site & Admin CRM",
    description:
      "A React-powered public storefront for a 55-year-old radiator manufacturer, paired with a Firebase-backed admin CRM. Staff manage the full product catalogue, track orders, control stock visibility, and handle inventory — all in real time.",
    tags: ["React", "Firebase", "Firestore", "CRM", "JavaScript"],
    images: [nehmeHome, nehmeShop, nehmeCRM],
    link: "https://www.nehmeradiators.com/",
  },
  {
    title: "Watania Library",
    subtitle: "Book Shop & POS Backend",
    description:
      "A dual-purpose Laravel platform: a public-facing shop for books, stationery, and school supplies across Lebanon, paired with a dedicated POS backend for in-store staff to handle walk-in sales, receipts, and stock in one system.",
    tags: ["Laravel", "PHP", "MySQL", "POS", "E-commerce"],
    images: [wataniaHome, wataniaShop, wataniaLogin],
    link: "https://watanialibrary.com/",
  },
  {
    title: "ESIB Social",
    subtitle: "Engineering Student Learning Platform",
    description:
      "A comprehensive learning hub built for ESIB engineering students. Features course management, study materials, a built-in academic calculator, subscription tiers, and a full admin dashboard tracking 747 users, 354 courses, and 979 sessions.",
    tags: ["Laravel", "PHP", "MySQL", "E-learning", "SaaS"],
    images: [esibHome, esibLogin, esibDash, esibMgmt, esibCalc],
    link: "https://esibsocial.com/",
  },
  {
    title: "Calories",
    subtitle: "Nutrition & Calorie Tracker",
    description:
      "A clean calorie and nutrition tracking app. Users log daily meals, track macros, and monitor progress over time. Features a searchable food database, daily summaries, and goal-setting tools to support healthier eating habits.",
    tags: ["Laravel", "PHP", "MySQL", "Health", "Mobile-ready"],
    images: [cal1, cal2, cal3, calLogin],
    link: "http://calories-shop.com/",
  },
];

/* ── Tag pill ── */
function Tag({ label }) {
  return (
    <span style={{
      display: "inline-block",
      fontSize: "0.72rem", fontWeight: 700,
      letterSpacing: "0.08em", textTransform: "uppercase",
      background: "#f0f0f0", color: "#333",
      border: "1px solid #ccc", padding: "3px 10px", borderRadius: "20px",
    }}>
      {label}
    </span>
  );
}

/* ── Browser frame ── */
function BrowserFrame({ children, url }) {
  const display = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
  return (
    <div style={{
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
      border: "1px solid #e0e0e0",
      background: "#fff",
    }}>
      {/* Chrome bar */}
      <div style={{
        height: "38px",
        background: "#f0f0f0",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        padding: "0 14px",
        gap: "8px",
        flexShrink: 0,
      }}>
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: "6px", marginRight: "8px" }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
            <div key={color} style={{
              width: 12, height: 12, borderRadius: "50%", background: color,
            }} />
          ))}
        </div>

        {/* Address bar */}
        <div style={{
          flex: 1,
          height: "24px",
          background: "#fff",
          borderRadius: "6px",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          gap: "6px",
          maxWidth: "340px",
          margin: "0 auto",
        }}>
          {/* Lock icon */}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2.5">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span style={{ fontSize: "0.7rem", color: "#888", letterSpacing: "0.01em", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
            {display}
          </span>
        </div>
      </div>

      {/* Screenshot */}
      {children}
    </div>
  );
}

/* ── Image carousel ── */
function ImageCarousel({ images, height }) {
  const [index, setIndex]    = useState(0);
  const [direction, setDir]  = useState(1);
  const [hovering, setHover] = useState(false);

  const go = (next) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  };
  const prev = () => go(index === 0 ? images.length - 1 : index - 1);
  const next = () => go(index === images.length - 1 ? 0 : index + 1);

  const variants = {
    enter:  (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.38, ease: [0.32, 0.72, 0, 1] } },
    exit:   (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } }),
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", overflow: "hidden", height,
        background: "#f0f0f0",
      }}>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={images[index]}
            alt={`screenshot ${index + 1}`}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <motion.button
            onClick={prev}
            animate={{ opacity: hovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
              zIndex: 2, background: "rgba(255,255,255,0.92)", border: "none",
              borderRadius: "50%", width: 36, height: 36, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}>‹</motion.button>

          <motion.button
            onClick={next}
            animate={{ opacity: hovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              zIndex: 2, background: "rgba(255,255,255,0.92)", border: "none",
              borderRadius: "50%", width: 36, height: 36, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}>›</motion.button>

          <div style={{
            position: "absolute", top: 12, right: 12, zIndex: 2,
            background: "rgba(0,0,0,0.45)", color: "#fff",
            fontSize: "0.72rem", fontWeight: 700,
            padding: "3px 10px", borderRadius: "20px",
            backdropFilter: "blur(6px)",
          }}>
            {index + 1} / {images.length}
          </div>

          <div style={{
            position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: "6px", zIndex: 2,
          }}>
            {images.map((_, i) => (
              <button key={i} onClick={() => go(i)} style={{
                width: i === index ? 20 : 6, height: 6,
                borderRadius: 3,
                background: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "width 0.25s ease, background 0.25s ease",
              }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Project row ── */
function ProjectRow({ project, index, isMobile }) {
  const isEven = index % 2 === 0;
  const imgH   = isMobile ? 260 : 420;

  const imgVariant = {
    hidden:  { opacity: 0, x: isMobile ? 0 : (isEven ? -60 : 60), y: isMobile ? 30 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const textVariant = {
    hidden:  { opacity: 0, y: isMobile ? 16 : 0, x: isMobile ? 0 : (isEven ? 60 : -60) },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: isMobile ? 0.1 : 0.12 } },
  };

  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }}
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : (isEven ? "row" : "row-reverse"),
        alignItems: isMobile ? "stretch" : "center",
        marginBottom: isMobile ? "2.5rem" : "6rem",
        ...(isMobile && {
          background: "#fafafa",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #ececec",
          boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
        }),
      }}>

      {/* Image */}
      <motion.div
        variants={imgVariant}
        style={{ flex: isMobile ? "none" : "0 0 75%", width: "100%" }}>
        <BrowserFrame url={project.link}>
          <ImageCarousel images={project.images} height={imgH} />
        </BrowserFrame>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={textVariant}
        style={{
          flex: isMobile ? "none" : "0 0 25%",
          width: isMobile ? "100%" : undefined,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: isMobile ? "1.4rem 1.2rem 1.6rem" : (isEven ? "0 0 0 2.5rem" : "0 2.5rem 0 0"),
          gap: "0.75rem",
        }}>
        <div>
          <p style={{
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "#888", marginBottom: "0.25rem",
          }}>{project.subtitle}</p>
          <h3 style={{
            fontSize: isMobile ? "1.4rem" : "1.9rem",
            fontWeight: 900, lineHeight: 1.1, color: "#111", margin: 0,
          }}>{project.title}</h3>
        </div>

        <p style={{ fontSize: isMobile ? "0.85rem" : "0.9rem", lineHeight: 1.7, color: "#555", margin: 0 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>

        {project.link && project.link !== "#" && (
          <motion.a
            href={project.link} target="_blank" rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              fontSize: "0.85rem", fontWeight: 700, color: ACCENT,
              textDecoration: "none", letterSpacing: "0.04em",
            }}>
            View Project →
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Section ── */
function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="projects" style={{ background: "#fff", padding: isMobile ? "3rem 1.25rem" : "5rem 3rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: isMobile ? "2.5rem" : "4rem" }}>
        <p style={{
          fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#888", marginBottom: "0.5rem",
        }}>Selected Work</p>
        <h2 style={{
          fontSize: isMobile ? "2rem" : "clamp(2rem, 4vw, 3rem)",
          fontWeight: 900, color: "#111", margin: 0,
        }}>Projects</h2>
        <motion.div
          initial={{ width: 0 }} whileInView={{ width: "60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ height: "4px", background: ACCENT, borderRadius: "2px", margin: "1rem auto 0" }}
        />
      </motion.div>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
