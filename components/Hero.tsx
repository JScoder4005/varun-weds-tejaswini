"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const nameVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } }
  };
  const letterVariant = (from: "left" | "right") => ({
    hidden: { y: 80, opacity: 0, rotateX: from === "left" ? -90 : 90, filter: "blur(8px)" },
    show: { y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" as const } }
  });

  const groomName = "Varun Kumar TK";
  const brideName = "Tejaswini H M";

  return (
    <section style={{
      minHeight: "100svh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", zIndex: 1,
      padding: "2rem 1rem"
    }}>
      {/* Parallax ambient orbs */}
      <div ref={orbRef} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transition: "transform 0.6s ease", zIndex: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "15%", left: "10%",
          width: "clamp(200px,40vw,420px)", height: "clamp(200px,40vw,420px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,80,106,0.18) 0%, transparent 70%)",
          animation: "glow-pulse 4s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute", bottom: "15%", right: "10%",
          width: "clamp(180px,35vw,370px)", height: "clamp(180px,35vw,370px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,58,92,0.4) 0%, transparent 70%)",
          animation: "glow-pulse 5s ease-in-out infinite 1s"
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "clamp(300px,60vw,650px)", height: "clamp(300px,60vw,650px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          animation: "glow-pulse 6s ease-in-out infinite 2s"
        }} />
      </div>

      {/* Twinkling stars */}
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          top: `${5 + Math.floor(i / 2) * 10 + (i % 3) * 3}%`,
          left: `${5 + (i * 5.2) % 90}%`,
          width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2,
          borderRadius: "50%", background: i % 4 === 0 ? "#c9a84c" : "#fff",
          animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${(i * 0.3) % 3}s`,
          zIndex: 0, pointerEvents: "none"
        }} />
      ))}

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%", maxWidth: 800 }}>
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ marginBottom: "clamp(1.5rem,4vw,2.5rem)" }}
        >
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "clamp(0.5rem,2vw,1rem)",
            color: "rgba(201,168,76,0.6)",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.5rem,1.5vw,0.75rem)", letterSpacing: "0.35rem"
          }}>
            <div style={{ width: "clamp(30px,8vw,70px)", height: 1, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5))" }} />
            <span>✦ AN INVITATION ✦</span>
            <div style={{ width: "clamp(30px,8vw,70px)", height: 1, background: "linear-gradient(to left, transparent, rgba(201,168,76,0.5))" }} />
          </div>
        </motion.div>

        {/* Groom name — letter by letter */}
        <motion.div variants={nameVariants} initial="hidden" animate="show" transition={{ delayChildren: 0.3 }}
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginBottom: "0.4rem", perspective: 800 }}
        >
          {groomName.split("").map((l, i) => (
            <motion.span key={i} variants={letterVariant("left")}
              style={{
                display: "inline-block",
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 8.5vw, 5rem)",
                fontWeight: 600, color: "#fdf6ec",
                letterSpacing: l === " " ? "0.25em" : "0.04em",
                whiteSpace: l === " " ? "pre" : "normal",
                textShadow: "0 0 30px rgba(255,158,181,0.25)",
                lineHeight: 1.1,
              }}>
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.div>

        {/* Weds divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.1, delay: 1.3, ease: "easeOut" }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.5rem,3vw,1.5rem)", margin: "clamp(0.6rem,2vw,1rem) 0" }}
        >
          <div style={{ flex: 1, maxWidth: "clamp(40px,12vw,130px)", height: 1, background: "linear-gradient(to right, transparent, rgba(212,80,106,0.55))" }} />
          <motion.span
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 4vw, 2rem)",
              fontStyle: "italic", color: "#ff9eb5",
              letterSpacing: "0.25rem",
              textShadow: "0 0 20px rgba(255,158,181,0.5)",
              whiteSpace: "nowrap"
            }}>
            ♡ weds ♡
          </motion.span>
          <div style={{ flex: 1, maxWidth: "clamp(40px,12vw,130px)", height: 1, background: "linear-gradient(to left, transparent, rgba(212,80,106,0.55))" }} />
        </motion.div>

        {/* Bride name */}
        <motion.div variants={nameVariants} initial="hidden" animate="show" transition={{ delayChildren: 1.5 }}
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginBottom: "clamp(1.5rem,4vw,2.5rem)", perspective: 800 }}
        >
          {brideName.split("").map((l, i) => (
            <motion.span key={i} variants={letterVariant("right")}
              style={{
                display: "inline-block",
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.8rem, 8.5vw, 5rem)",
                fontWeight: 600,
                letterSpacing: l === " " ? "0.25em" : "0.04em",
                whiteSpace: l === " " ? "pre" : "normal",
                background: "linear-gradient(135deg, #ff9eb5, #ffd6e0, #ff9eb5)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer-text 3s linear infinite",
                lineHeight: 1.1,
              }}>
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.div>

        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "clamp(2rem,5vw,3rem)" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center",
            gap: "clamp(0.5rem,2vw,1.5rem)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: 60, padding: "clamp(0.5rem,1.5vw,0.7rem) clamp(1rem,4vw,2.5rem)",
            background: "rgba(13,33,55,0.6)", backdropFilter: "blur(20px)",
            boxShadow: "0 0 30px rgba(201,168,76,0.1)",
            flexWrap: "wrap", justifyContent: "center"
          }}>
            {["JUNE", "24", "|", "WEDNESDAY", "|", "2026"].map((t, i) => (
              <span key={i} style={{
                fontFamily: "'Cinzel', serif",
                fontSize: i === 1 ? "clamp(1.1rem,3vw,1.5rem)" : "clamp(0.55rem,1.5vw,0.8rem)",
                fontWeight: i === 1 ? 900 : 400,
                letterSpacing: "0.18rem",
                color: i === 1 ? "#c9a84c" : i === 2 || i === 4 ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.8)",
              }}>{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2, duration: 1 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
        >
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.3rem", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(212,80,106,0.6), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
