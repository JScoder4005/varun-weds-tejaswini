"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const MAPS_URL = "https://www.google.com/maps/place/KNT+Kalyana+Mantapa/@12.8017588,77.70742,870m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae6dd1a28f350d:0x2e46939674cdc66!8m2!3d12.8017588!4d77.70742!16s%2Fg%2F124sq2s4v?entry=ttu";

export default function Venue() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pinY = useTransform(scrollYProgress, [0, 0.5], [-40, 0]);

  return (
    <section ref={ref} style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", zIndex: 1, padding: "4rem 1.5rem"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <p style={{
          fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.4rem",
          color: "rgba(201,168,76,0.6)", textTransform: "uppercase", marginBottom: "0.8rem"
        }}>Venue</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,5vw,3.5rem)",
          fontWeight: 300, fontStyle: "italic", color: "#fdf6ec"
        }}>Where We Come Together</h2>
      </motion.div>

      <div style={{ width: "100%", maxWidth: 800, display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Venue card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            background: "rgba(13,33,55,0.7)", backdropFilter: "blur(30px)",
            border: "1px solid rgba(212,80,106,0.2)",
            borderRadius: 24, padding: "clamp(2rem,5vw,3rem)",
            textAlign: "center", position: "relative", overflow: "hidden"
          }}
        >
          {/* Top glow */}
          <div style={{
            position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)",
            width: 200, height: 80, borderRadius: "50%",
            background: "rgba(212,80,106,0.15)", filter: "blur(30px)", pointerEvents: "none"
          }} />

          <motion.div style={{ y: pinY }} initial={false}>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 150 }}
              style={{ fontSize: "3rem", marginBottom: "1rem" }}
            >📍</motion.div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 900,
              color: "#fdf6ec", letterSpacing: "0.05rem",
              marginBottom: "1rem"
            }}
          >
            KNT Kalyana Mantapa
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontFamily: "'Crimson Pro', serif", fontStyle: "italic",
              fontSize: "1.1rem", color: "rgba(253,246,236,0.6)",
              lineHeight: 1.7, maxWidth: 500, margin: "0 auto 2rem"
            }}
          >
            Teachers Colony, Bengaluru to Hosur Highway Service Road,<br />
            Chandapura, Bengaluru — 560081
          </motion.p>

          <motion.a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212,80,106,0.5)" }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.8rem",
              background: "linear-gradient(135deg, rgba(212,80,106,0.2), rgba(255,158,181,0.1))",
              border: "1px solid rgba(212,80,106,0.5)",
              borderRadius: 50, padding: "0.9rem 2.5rem",
              color: "#ff9eb5", textDecoration: "none",
              fontFamily: "'Cinzel', serif", fontSize: "0.75rem", letterSpacing: "0.2rem",
              backdropFilter: "blur(20px)"
            }}
          >
            🗺️ GET DIRECTIONS
          </motion.a>
        </motion.div>

        {/* Embedded Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            borderRadius: 20, overflow: "hidden",
            border: "1px solid rgba(212,80,106,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            height: 300
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870.6499999!2d77.70742!3d12.8017588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6dd1a28f350d%3A0x2e46939674cdc66!2sKNT%20Kalyana%20Mantapa!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KNT Kalyana Mantapa"
          />
        </motion.div>
      </div>
    </section>
  );
}
