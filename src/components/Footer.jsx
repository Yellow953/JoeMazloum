import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer
      id="contact"
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}>

      {/* Subtle white glow behind content */}
      <motion.div
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.18), transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 1, maxWidth: "720px", width: "100%" }}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#fff",
            marginBottom: "1.2rem",
          }}>
          Available for work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "2.5rem",
            color: "#fff",
          }}>
          Have an idea?<br />
          <span style={{ color: "#fff", opacity: 0.5 }}>Let's build it.</span>
        </motion.h2>

        <motion.a
          href="mailto:joemazloum953@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.22 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.25)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#111",
            fontWeight: 800,
            fontSize: "1.1rem",
            padding: "1rem 2.6rem",
            borderRadius: "50px",
            textDecoration: "none",
            letterSpacing: "0.02em",
            boxShadow: "0 0 24px rgba(255,255,255,0.12)",
            marginBottom: "3.5rem",
          }}>
          Get in Touch
        </motion.a>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "3rem" }}>
          {[
            { href: "https://github.com/Yellow953",               icon: <FaGithub /> },
            { href: "https://www.linkedin.com/in/joe-mazloum/",  icon: <FaLinkedin /> },
            { href: "mailto:joemazloum953@gmail.com",             icon: <FaEnvelope /> },
          ].map(({ href, icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, color: "#fff" }}
              style={{ color: "#fff", fontSize: "1.6rem", transition: "color 0.2s" }}>
              {icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ fontSize: "0.78rem", color: "#fff" }}>
          © {new Date().getFullYear()} Joe Mazloum
        </motion.p>
      </motion.div>
    </footer>
  );
}

export default Footer;
