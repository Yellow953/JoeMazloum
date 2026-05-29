import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaCode, FaBriefcase, FaFolderOpen, FaEnvelope } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "About",      href: "#about",      Icon: FaUser },
  { label: "Skills",     href: "#skills",     Icon: FaCode },
  { label: "Experience", href: "#experience", Icon: FaBriefcase },
  { label: "Projects",   href: "#projects",   Icon: FaFolderOpen },
  { label: "Contact",    href: "#contact",    Icon: FaEnvelope },
];

function Header() {
  const [visible, setVisible] = useState(false);
  const [active, setActive]   = useState(null);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const ids = ["about", "skills", "experience", "projects", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        /* Wrapper handles centering — keeps Framer Motion transforms clean */
        <div style={{
          position: "fixed",
          bottom: "28px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 9999,
          pointerEvents: "none",
        }}>
          <motion.div
            key="bottom-nav"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            style={{
              pointerEvents: "auto",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px",
              borderRadius: "50px",
              background: "rgba(240, 240, 240, 0.82)",
              backdropFilter: "blur(28px) saturate(200%)",
              WebkitBackdropFilter: "blur(28px) saturate(200%)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,1)",
            }}>
            {NAV_ITEMS.map(({ label, href, Icon }) => {
              const isActive = active === href.replace("#", "");
              return (
                <motion.a
                  key={label}
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  whileTap={{ scale: 0.91 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3px",
                    padding: isActive ? "10px 22px" : "10px 16px",
                    borderRadius: "40px",
                    textDecoration: "none",
                    background: isActive ? "#fff" : "transparent",
                    boxShadow: isActive
                      ? "0 2px 14px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)"
                      : "none",
                    transition: "background 0.25s, box-shadow 0.25s, padding 0.25s",
                  }}>
                  <Icon
                    size={18}
                    style={{
                      color: isActive ? "#111" : "#555",
                      transition: "color 0.25s",
                    }}
                  />
                  <span style={{
                    fontSize: "0.65rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#111" : "#555",
                    whiteSpace: "nowrap",
                    transition: "color 0.25s",
                  }}>
                    {label}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Header;
