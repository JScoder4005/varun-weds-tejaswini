"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const words = "We together with our parents invite you to share the beginning of our new life together to our Wedding ceremony".split(" ");

export default function Invitation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} style={{
      minHeight: "70vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", zIndex: 1, padding: "5rem 1.5rem",
      textAlign: "center"
    }}>
      {/* Parallax decorative element */}
      <motion.div style={{ y, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,80,106,0.06) 0%, transparent 70%)"
        }} />
      </motion.div>

      {/* Ornamental top */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 1.2 }}
        style={{ marginBottom: "3rem", display: "flex", alignItems: "center", gap: "1.5rem" }}
      >
        <div style={{ width: 80, height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          style={{ fontSize: "1.5rem", display: "inline-block" }}
        >✦</motion.span>
        <div style={{ width: 80, height: 1, background: "linear-gradient(to left, transparent, rgba(201,168,76,0.5))" }} />
      </motion.div>

      {/* Word-by-word reveal */}
      <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.3rem, 3vw, 2rem)",
          fontWeight: 300, fontStyle: "italic",
          lineHeight: 1.9, color: "#fdf6ec"
        }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              style={{ display: "inline-block", marginRight: "0.35em" }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: words.length * 0.07 + 0.3 }}
          style={{ marginTop: "1.5rem" }}
        >
          <span style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
            fontWeight: 900,
            background: "linear-gradient(135deg, #d4506a, #ff9eb5, #c9a84c, #ff9eb5, #d4506a)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer-text 4s linear infinite",
            display: "block",
            marginTop: "0.5rem"
          }}>
            Reception: June 23 · Muhurtham: June 24, 2026
          </span>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "1.5rem" }}
      >
        <div style={{ width: 100, height: 1, background: "linear-gradient(to right, transparent, rgba(212,80,106,0.4))" }} />
        <span style={{ color: "rgba(212,80,106,0.6)", fontSize: "1.2rem" }}>♥</span>
        <div style={{ width: 100, height: 1, background: "linear-gradient(to left, transparent, rgba(212,80,106,0.4))" }} />
      </motion.div>
    </section>
  );
}
