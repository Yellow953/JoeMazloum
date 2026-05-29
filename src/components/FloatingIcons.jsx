import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiLaravel,
  SiPython,
  SiFlutter,
  SiGit,
  SiShopify,
} from "react-icons/si";

function FloatingIcons({ mouseX, mouseY }) {
  const icons = [
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiReact,      color: "#61DAFB" },
    { Icon: SiLaravel,    color: "#FF2D20" },
    { Icon: SiPython,     color: "#3776AB" },
    { Icon: SiFlutter,    color: "#54C5F8" },
    { Icon: SiGit,        color: "#F05032" },
    { Icon: SiShopify,    color: "#96BF48" },
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
      {icons.map(({ Icon, color }, index) => {
        const pos = positions[index % positions.length];
        const depth = (index % 3) + 1;
        const size = 50 + depth * 10;

        return (
          <motion.div
            key={index}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0.55,
              pointerEvents: "none",
              zIndex: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color,
              filter: `drop-shadow(0 0 8px ${color}55)`,
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
            }}>
            <Icon size={size} />
          </motion.div>
        );
      })}
    </>
  );
}

export default FloatingIcons;
