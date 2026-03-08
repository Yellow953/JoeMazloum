import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer
      style={{
        height: "100vh",
        background: "linear-gradient(180deg, #000, #111)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)",
          top: "20%",
          left: "10%",
          zIndex: 0,
          filter: "blur(120px)",
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          marginBottom: "0.5rem",
          letterSpacing: "0.05em",
          zIndex: 1,
        }}>
        Connect with Joe Mazloum
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontSize: "1.2rem",
          color: "#aaa",
          marginBottom: "2rem",
          maxWidth: "700px",
          zIndex: 1,
        }}>
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Whether you’re looking for a
        <strong> Laravel expert</strong>, <strong>Mobile developer</strong>, or
        a skilled full-stack engineer, I’d love to hear from you.
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
        style={{ display: "flex", gap: "2rem", zIndex: 1 }}>
        {[
          {
            href: "https://github.com/Yellow953",
            icon: <FaGithub />,
          },
          {
            href: "https://www.linkedin.com/in/joe-mazloum/",
            icon: <FaLinkedin />,
          },
        ].map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffffffa9", fontSize: "2rem" }}
            whileHover={{
              scale: 1.2,
              color: "#fff",
              textShadow: "0 0 12px #fff",
            }}>
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </footer>
  );
}

export default Footer;
