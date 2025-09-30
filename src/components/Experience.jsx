import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "Lead Software Engineer",
      company: "DoorEast",
      date: "Jan 2025 – now",
      description:
        "Led development of a large-scale real estate marketplace, delivering a seamless user experience across Angular web and Flutter mobile applications. Built and maintained a Laravel backend powering advanced property search, listings, and transactions. Deployed and scaled infrastructure on AWS (Route53, S3, EC2, VPS) with load balancing and auto-scaling, ensuring high availability and performance. Improved deployment pipelines and system reliability, supporting thousands of active users.",
    },
    {
      role: "PHP Software Developer",
      company: "Göckler GMBH",
      date: "Nov 2023 – Oct 2024",
      description:
        "Modernized legacy PHP websites and CMS, upgrading from Xtcommerce 5 to 6.5 and Shopware 6, improving platform stability. Optimized performance, reducing load times and boosting sales by 25% through design enhancements, popups, and upsell strategies. Delivered backend and frontend features ahead of schedule, enhancing client satisfaction.",
    },
    {
      role: "Quality Assurance Developer",
      company: "INTALIO",
      date: "May 2023 – Oct 2023",
      description:
        "Developed a Python Selenium automation bot, reducing manual testing time by 70% and improving bug detection accuracy. Created comprehensive User/Admin guides, reducing support requests by 30%. Enhanced software quality via rigorous testing and detailed test cases.",
    },
    {
      role: "Ruby on Rails Developer",
      company: "IStay",
      date: "Oct 2022 – Apr 2023",
      description:
        "Built responsive, user-focused front-end websites, increasing engagement by 15%. Designed and implemented robust backend functionalities with Ruby on Rails, ensuring smooth cross-team delivery. Improved workflow integration using Git/GitHub.",
    },
    {
      role: "Laravel Full Stack Developer",
      company: "Eddy’s Group",
      date: "2020 – 2021",
      description:
        "Architected and deployed CRM and ERP web solutions with Laravel and Bootstrap, improving efficiency by 20%. Developed mobile apps integrated with backend systems, increasing client accessibility. Managed Linux server deployments, decreasing downtime by 15%.",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #000, #111)",
        padding: "4rem 2rem",
        color: "#fff",
      }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "3rem",
        }}>
        Experience
      </h2>
      <div
        style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        {/* Timeline line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "20px",
            width: "2px",
            height: "100%",
            background: "linear-gradient(to bottom, #888, transparent)",
          }}></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              marginBottom: "3rem",
              position: "relative",
            }}>
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: "8px",
                top: "50px",
                width: "25px",
                height: "25px",
                background: "#fff",
                borderRadius: "50%",
                border: "3px solid #555",
              }}></div>

            {/* Card */}
            <div
              className="experience-card"
              style={{
                background: "#111",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(255,255,255,0.05)",
                marginLeft: "50px",
                flex: 1,
              }}>
              <h3 style={{ margin: 0, fontSize: "1.5rem" }}>
                {exp.role} @ {exp.company}
              </h3>
              <span style={{ fontSize: "0.9rem", color: "#aaa" }}>
                {exp.date}
              </span>
              <p style={{ marginTop: "0.8rem", lineHeight: 1.6 }}>
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
