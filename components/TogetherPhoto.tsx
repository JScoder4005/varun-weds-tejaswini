"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function TogetherPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.88, 1.03, 1.03, 0.92]);
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", zIndex: 1, padding: "4rem 1.5rem",
      overflow: "hidden"
    }}>
      {/* Big watermark text behind */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex",
        alignItems: "center", justifyContent: "center",
        overflow: "hidden", pointerEvents: "none", zIndex: 0
      }}>
        <span style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(5rem, 18vw, 16rem)",
          fontWeight: 900,
          color: "rgba(212,80,106,0.03)",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}>TOGETHER</span>
      </div>

      {/* Floating glow blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "15%", left: "5%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0
        }}
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", bottom: "15%", right: "5%",
          width: 350, height: 350, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,80,106,0.1) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0
        }}
      />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 2 }}
      >
        <p style={{
          fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.45rem",
          color: "rgba(201,168,76,0.7)", textTransform: "uppercase", marginBottom: "0.8rem"
        }}>A Moment To Remember</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)",
          fontWeight: 300, fontStyle: "italic", color: "#fdf6ec",
          textShadow: "0 0 40px rgba(212,80,106,0.2)"
        }}>
          Where It All Began
        </h2>
      </motion.div>

      {/* Photo frame */}
      <motion.div style={{ scale, opacity, position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 8 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          {/* Outer decorative ring - rotating */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            style={{
              position: "absolute",
              top: -16, left: -16, right: -16, bottom: -16,
              borderRadius: 32,
              background: "conic-gradient(from 0deg, rgba(212,80,106,0.6), rgba(201,168,76,0.4), rgba(255,158,181,0.6), rgba(201,168,76,0.2), rgba(212,80,106,0.6))",
              zIndex: 0,
              filter: "blur(2px)"
            }}
          />
          {/* Inner dark border to mask rotation edge */}
          <div style={{
            position: "absolute", top: -4, left: -4, right: -4, bottom: -4, borderRadius: 26,
            background: "var(--midnight)", zIndex: 1
          }} />

          {/* Glow around frame */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px rgba(212,80,106,0.3), 0 0 80px rgba(212,80,106,0.1)",
                "0 0 70px rgba(212,80,106,0.6), 0 0 120px rgba(212,80,106,0.25)",
                "0 0 40px rgba(212,80,106,0.3), 0 0 80px rgba(212,80,106,0.1)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            style={{
              position: "relative", zIndex: 2,
              borderRadius: 24,
              overflow: "hidden",
              width: "clamp(300px, 75vw, 520px)",
              aspectRatio: "3/4",
              border: "2px solid rgba(212,80,106,0.3)",
            }}
          >
            <motion.div style={{ y, width: "100%", height: "100%", position: "relative" }}>
              <Image
                src="/images/together.jpeg"
                alt="Varun Kumar TK & Tejaswini H M"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              {/* Overlay vignette */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                background: "radial-gradient(ellipse at center, transparent 50%, rgba(6,13,31,0.5) 100%)"
              }} />
              {/* Bottom gradient with names */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "3rem 2rem 2rem",
                background: "linear-gradient(to top, rgba(6,13,31,0.95) 0%, transparent 100%)"
              }}>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                    color: "#fdf6ec",
                    textAlign: "center",
                    textShadow: "0 2px 20px rgba(0,0,0,0.8)",
                  }}
                >
                  Varun &amp; Tejaswini
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3rem",
                    color: "rgba(201,168,76,0.8)",
                    textAlign: "center",
                    marginTop: "0.4rem"
                  }}
                >
                  JUNE 24 · 2026
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={inView ? {
            opacity: [0, 0.8, 0],
            y: [0, -120 - i * 30],
            x: [(i % 2 === 0 ? 1 : -1) * (20 + i * 15)],
            scale: [0.5, 1.2, 0.3]
          } : {}}
          transition={{
            duration: 3 + i * 0.5,
            delay: 1 + i * 0.4,
            repeat: Infinity,
            repeatDelay: 2 + i * 0.3,
            ease: "easeOut"
          }}
          style={{
            position: "absolute",
            bottom: "25%",
            left: "50%",
            fontSize: i % 3 === 0 ? "1.5rem" : i % 3 === 1 ? "1rem" : "0.7rem",
            zIndex: 3, pointerEvents: "none",
            filter: "drop-shadow(0 0 8px rgba(212,80,106,0.6))"
          }}
        >
          {i % 2 === 0 ? "💕" : "❤️"}
        </motion.div>
      ))}

      {/* Decorative quote below */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 1 }}
        style={{ textAlign: "center", marginTop: "2.5rem", position: "relative", zIndex: 2 }}
      >
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "rgba(253,246,236,0.5)",
          maxWidth: 400
        }}>
          "Every love story is beautiful,<br />but ours is my favourite."
        </p>
      </motion.div>
    </section>
  );
}
