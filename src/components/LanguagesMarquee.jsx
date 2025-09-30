import React from "react";

function LanguagesMarquee() {
  const languages = ["English", "Arabic", "German", "French"];

  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "#111",
        padding: "1rem 0",
        margin: "100px 0 50px 0 ",
        color: "#eee",
        fontWeight: "600",
        fontSize: "1.5rem",
        userSelect: "none",
      }}>
      <div
        style={{
          display: "inline-block",
          paddingLeft: "100%",
          animation: "marquee 15s linear infinite",
        }}>
        {languages.map((lang, i) => (
          <span
            key={i}
            style={{ marginRight: "100px", display: "inline-block" }}>
            {lang}
          </span>
        ))}
        {languages.map((lang, i) => (
          <span
            key={"repeat-" + i}
            style={{ marginRight: "100px", display: "inline-block" }}>
            {lang}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default LanguagesMarquee;
