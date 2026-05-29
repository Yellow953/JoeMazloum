import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiLaravel, SiReact, SiFlutter,
  SiPython, SiPhp, SiGit, SiJavascript,
  SiMysql, SiDocker, SiAngular, SiShopify, SiRubyonrails,
} from "react-icons/si";

/* ─────────────────────────────
   Orbit config
───────────────────────────── */
const RINGS = [
  {
    radius: 90, duration: 14, reverse: false,
    icons: [
      { Icon: SiLaravel,    color: "#FF2D20" },
      { Icon: SiReact,      color: "#61DAFB" },
      { Icon: SiFlutter,    color: "#54C5F8" },
    ],
  },
  {
    radius: 162, duration: 24, reverse: true,
    icons: [
      { Icon: SiPython,     color: "#3776AB" },
      { Icon: SiPhp,        color: "#8892BF" },
      { Icon: SiGit,        color: "#F05032" },
      { Icon: SiJavascript, color: "#c9a800" },
    ],
  },
  {
    radius: 232, duration: 38, reverse: false,
    icons: [
      { Icon: SiMysql,        color: "#4479A1" },
      { Icon: SiDocker,       color: "#2496ED" },
      { Icon: SiAngular,      color: "#DD0031" },
      { Icon: SiShopify,      color: "#96BF48" },
      { Icon: SiRubyonrails,  color: "#CC0000" },
    ],
  },
];

/* Single orbiting icon */
function OrbitIcon({ Icon, color, initialAngle, radius, duration, reverse }) {
  const sign = reverse ? -1 : 1;
  return (
    /* Rotates around center */
    <motion.div
      style={{
        position: "absolute", top: "50%", left: "50%",
        width: 0, height: 0,
        rotate: initialAngle,
      }}
      animate={{ rotate: initialAngle + sign * 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}>

      {/* Pushed outward */}
      <div style={{
        position: "absolute",
        top: 0, left: radius,
        transform: "translate(-50%, -50%)",
      }}>
        {/* Counter-rotates so the icon stays upright */}
        <motion.div
          style={{ rotate: -initialAngle }}
          animate={{ rotate: -initialAngle - sign * 360 }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}>
          <motion.div
            whileHover={{ scale: 1.25 }}
            style={{
              width: 44, height: 44,
              background: "#fff",
              borderRadius: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 18px rgba(0,0,0,0.11)",
              border: "1px solid rgba(0,0,0,0.06)",
              cursor: "default",
            }}>
            <Icon size={20} color={color} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* Full orbit system */
function OrbitSystem() {
  return (
    <div style={{ position: "relative", width: 500, height: 500, flexShrink: 0 }}>

      {/* Dashed orbit rings */}
      {RINGS.map((ring, i) => (
        <div key={i} style={{
          position: "absolute",
          top: "50%", left: "50%",
          width: ring.radius * 2, height: ring.radius * 2,
          borderRadius: "50%",
          border: "1px dashed rgba(0,0,0,0.1)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }} />
      ))}

      {/* Center badge */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 60, height: 60,
        background: "#111",
        borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}>
        <span style={{ color: "#fff", fontSize: "0.75rem", fontWeight: 900, letterSpacing: "0.02em" }}>
          JM
        </span>
      </div>

      {/* Icons */}
      {RINGS.map((ring, ri) =>
        ring.icons.map((icon, ii) => {
          const initialAngle = (ii / ring.icons.length) * 360;
          return (
            <OrbitIcon
              key={`${ri}-${ii}`}
              {...icon}
              initialAngle={initialAngle}
              radius={ring.radius}
              duration={ring.duration}
              reverse={ring.reverse}
            />
          );
        })
      )}
    </div>
  );
}

/* ─────────────────────────────
   Hero
───────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const rise = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const scrollTo = (href) =>
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "5rem 1.5rem 6rem" : "0 5rem",
        position: "relative",
        overflow: "hidden",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "0" : "2rem",
      }}>

      {/* Faint dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, #ccc 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: 0.45,
        zIndex: 0, pointerEvents: "none",
      }} />

      {/* ── Text ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: isMobile ? "none" : "1 1 0",
          width: isMobile ? "100%" : undefined,
          position: "relative", zIndex: 1,
          maxWidth: isMobile ? "100%" : 520,
          textAlign: isMobile ? "center" : "left",
        }}>

        {/* Badge */}
        <motion.div variants={rise} style={{
          display: "inline-flex", alignItems: "center",
          gap: "0.6rem", marginBottom: "1.4rem",
        }}>
          <motion.div
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#22c55e", boxShadow: "0 0 7px #22c55e99", flexShrink: 0,
            }}
          />
          <span style={{
            fontSize: "0.74rem", fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase", color: "#666",
          }}>
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 variants={rise} style={{
          fontSize: isMobile ? "clamp(3.4rem, 16vw, 5rem)" : "clamp(4rem, 5.5vw, 6rem)",
          fontWeight: 900, lineHeight: 0.92,
          letterSpacing: "-0.03em", color: "#111",
          margin: "0 0 1.4rem",
        }}>
          Joe<br />Mazloum.
        </motion.h1>

        {/* Description */}
        <motion.p variants={rise} style={{
          fontSize: isMobile ? "0.95rem" : "1.08rem",
          lineHeight: 1.75, color: "#555",
          maxWidth: isMobile ? "100%" : 440,
          margin: isMobile ? "0 auto 2rem" : "0 0 2.4rem",
        }}>
          I build scalable SaaS platforms, real-estate marketplaces, and
          AI-powered products — with{" "}
          <strong style={{ color: "#111" }}>Laravel</strong>,{" "}
          <strong style={{ color: "#111" }}>React</strong>, and{" "}
          <strong style={{ color: "#111" }}>Flutter</strong>.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={rise} style={{
          display: "flex", gap: "0.8rem", flexWrap: "wrap",
          marginBottom: "2.5rem",
          justifyContent: isMobile ? "center" : "flex-start",
        }}>
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollTo("#projects"); }}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: "#111", color: "#fff", fontWeight: 700,
              fontSize: "0.88rem", padding: "0.88rem 1.9rem",
              borderRadius: "50px", textDecoration: "none", letterSpacing: "0.02em",
            }}>
            View Work ↓
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            whileHover={{ scale: 1.04, background: "#111", color: "#fff" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              background: "transparent", color: "#111", fontWeight: 700,
              fontSize: "0.88rem", padding: "0.88rem 1.9rem",
              borderRadius: "50px", textDecoration: "none", letterSpacing: "0.02em",
              border: "2px solid #111", transition: "background 0.2s, color 0.2s",
            }}>
            Let's Talk →
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={rise} style={{
          display: "flex",
          gap: isMobile ? "0" : "3rem",
          justifyContent: isMobile ? "space-around" : "flex-start",
          paddingTop: "2rem",
          borderTop: "1px solid #ddd",
          maxWidth: isMobile ? 320 : "none",
          margin: isMobile ? "0 auto" : undefined,
        }}>
          {[
            { value: "5+",  label: "Years Exp." },
            { value: "20+", label: "Projects" },
            { value: "4",   label: "Languages" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontSize: isMobile ? "1.8rem" : "2.1rem",
                fontWeight: 900, color: "#111", lineHeight: 1,
              }}>{value}</div>
              <div style={{
                fontSize: "0.68rem", color: "#888",
                marginTop: "0.35rem", letterSpacing: "0.06em", textTransform: "uppercase",
              }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Orbit: desktop full-size, mobile scaled down ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          flex: isMobile ? "none" : "0 0 auto",
          position: "relative", zIndex: 1,
          display: "flex", alignItems: "center", justifyContent: "center",
          // On mobile: reserve just enough space for the scaled orbit
          width:  isMobile ? 300 : "auto",
          height: isMobile ? 300 : "auto",
          marginTop: isMobile ? "2.5rem" : 0,
          overflow: "visible",
        }}>
        <div style={isMobile ? {
          transform: "scale(0.6)",
          transformOrigin: "center center",
        } : {}}>
          <OrbitSystem />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
