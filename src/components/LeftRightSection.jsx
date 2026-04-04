import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function LeftRightSection({ id, title, text, image, reverse = false }) {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controlsText.start("visible");
      controlsImage.start("visible");
    } else {
      controlsText.start("hidden");
      controlsImage.start("hidden");
    }
    document.body.classList.add("custom_scroller");
  }, [controlsText, controlsImage, inView]);

  const variantsText = {
    hidden: { opacity: 0, x: reverse ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const variantsImage = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`left-right-section${reverse ? " reverse" : ""}`}>
      <motion.div
        className="lr-text"
        initial="hidden"
        animate={controlsText}
        variants={variantsText}>
        <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>{title}</h2>

        <p className="lr-p">
          I’m <strong>Joe Mazloum</strong>, a passionate software engineer
          specializing in building scalable SaaS platforms, CRMs, ERPs, mobile
          apps, and AI-powered solutions. My expertise spans{" "}
          <strong>Laravel</strong>, <strong>Flutter</strong>,{" "}
          <strong>AI &amp; automation</strong>, and full-stack development, with
          a proven track record in high-performance, user-friendly apps and
          systems.
        </p>
        <p className="lr-p">
          I’ve delivered solutions across Europe and the Middle East modernizing
          legacy systems, improving performance, and shipping polished products.
          Expect clean code, efficient systems, and a collaborative partner.
        </p>
      </motion.div>

      <motion.div
        className="lr-image"
        initial="hidden"
        animate={controlsImage}
        variants={variantsImage}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            borderRadius: 15,
            boxShadow: "0 0 15px #fff",
          }}
        />
      </motion.div>
    </section>
  );
}

export default LeftRightSection;
