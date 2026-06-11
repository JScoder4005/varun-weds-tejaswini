"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Couple() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", zIndex: 1, padding: "4rem 1.5rem",
      overflow: "hidden"
    }}>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <p style={{
          fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.4rem",
          color: "rgba(201,168,76,0.6)", textTransform: "uppercase", marginBottom: "0.8rem"
        }}>The Happy Couple</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,5vw,3.5rem)",
          fontWeight: 300, fontStyle: "italic", color: "#fdf6ec"
        }}>Two Hearts, One Journey</h2>
      </motion.div>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "clamp(1rem,4vw,4rem)", flexWrap: "wrap", width: "100%", maxWidth: 1000
      }}>
        {/* Groom */}
        <motion.div
          initial={{ x: -100, opacity: 0, rotateY: -15 }}
          animate={inView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
        >
          <div style={{ position: "relative" }}>
            {/* Glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              style={{
                position: "absolute", top: -8, left: -8, right: -8, bottom: -8, borderRadius: "50%",
                background: "conic-gradient(from 0deg, rgba(212,80,106,0.5), rgba(201,168,76,0.3), rgba(255,158,181,0.5), rgba(201,168,76,0.3), rgba(212,80,106,0.5))",
                zIndex: 0
              }}
            />
            <div style={{
              position: "relative", zIndex: 1,
              width: "clamp(180px,35vw,280px)", height: "clamp(240px,45vw,370px)",
              borderRadius: 20, overflow: "hidden",
              border: "3px solid rgba(13,33,55,1)",
              boxShadow: "0 0 40px rgba(212,80,106,0.25), 0 20px 60px rgba(0,0,0,0.5)",
            }}>
              <Image
                src="/images/groom.PNG"
                alt="Varun Kumar TK"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                background: "linear-gradient(to top, rgba(6,13,31,0.8), transparent)"
              }} />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ textAlign: "center" }}
          >
            <p style={{
              fontFamily: "'Cinzel', serif", fontSize: "clamp(1rem,2.5vw,1.4rem)",
              fontWeight: 600, color: "#fdf6ec", letterSpacing: "0.1rem"
            }}>Varun Kumar TK</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: "0.9rem", color: "rgba(255,158,181,0.7)", marginTop: 4
            }}>The Groom</p>
          </motion.div>
        </motion.div>

        {/* Center heart */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], filter: ["drop-shadow(0 0 10px rgba(212,80,106,0.5))", "drop-shadow(0 0 30px rgba(212,80,106,0.9))", "drop-shadow(0 0 10px rgba(212,80,106,0.5))"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}
          >
            💕
          </motion.div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "clamp(1.2rem,3vw,1.8rem)", color: "rgba(255,158,181,0.6)"
          }}>&amp;</div>
        </motion.div>

        {/* Bride */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotateY: 15 }}
          animate={inView ? { x: 0, opacity: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
        >
          <div style={{ position: "relative" }}>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              style={{
                position: "absolute", top: -8, left: -8, right: -8, bottom: -8, borderRadius: "50%",
                background: "conic-gradient(from 0deg, rgba(255,158,181,0.5), rgba(212,80,106,0.3), rgba(201,168,76,0.3), rgba(212,80,106,0.3), rgba(255,158,181,0.5))",
                zIndex: 0
              }}
            />
            <div style={{
              position: "relative", zIndex: 1,
              width: "clamp(180px,35vw,280px)", height: "clamp(240px,45vw,370px)",
              borderRadius: 20, overflow: "hidden",
              border: "3px solid rgba(13,33,55,1)",
              boxShadow: "0 0 40px rgba(255,158,181,0.25), 0 20px 60px rgba(0,0,0,0.5)",
            }}>
              <Image
                src="/images/bride.PNG"
                alt="Tejaswini H M"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                background: "linear-gradient(to top, rgba(6,13,31,0.8), transparent)"
              }} />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ textAlign: "center" }}
          >
            <p style={{
              fontFamily: "'Cinzel', serif", fontSize: "clamp(1rem,2.5vw,1.4rem)",
              fontWeight: 600,
              background: "linear-gradient(135deg, #ff9eb5, #ffd6e0)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              letterSpacing: "0.1rem"
            }}>Tejaswini H M</p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: "0.9rem", color: "rgba(255,158,181,0.7)", marginTop: 4
            }}>The Bride</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
