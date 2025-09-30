import React from "react";
import { motion } from "framer-motion";

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

export default FloatingIcons;
