"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "clamp(3rem,8vw,5rem) 1rem clamp(2rem,5vw,3rem)", position: "relative", zIndex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", marginBottom: "1.2rem" }}>
        <div style={{ width: 50, height: 1, background: "linear-gradient(to right,transparent,rgba(201,168,76,0.3))" }} />
        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ fontSize: "1.3rem" }}>💕</motion.span>
        <div style={{ width: 50, height: 1, background: "linear-gradient(to left,transparent,rgba(201,168,76,0.3))" }} />
      </div>
      <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "clamp(1rem,3vw,1.2rem)", color: "rgba(253,246,236,0.4)" }}>
        Varun Kumar TK &amp; Tejaswini H M
      </p>
      <p style={{ fontFamily: "'Cinzel',serif", fontSize: "0.55rem", letterSpacing: "0.3rem", color: "rgba(255,255,255,0.18)", marginTop: "0.4rem" }}>
        June 24, 2026
      </p>
      <a
        href="https://www.linkedin.com/in/uday-kumar-m-3b122b244/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          marginTop: "1.8rem",
          fontFamily: "'Cinzel',serif", fontSize: "0.55rem", letterSpacing: "0.15rem",
          color: "rgba(255,158,181,0.35)",
          textDecoration: "none",
          transition: "color 0.3s",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,158,181,0.7)")}
        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,158,181,0.35)")}
      >
        Made with ♥ by Uday
      </a>
    </footer>
  );
}
