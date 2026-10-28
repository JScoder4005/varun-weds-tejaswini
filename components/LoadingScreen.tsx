"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 3400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "#080808",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            zIndex: 99999, overflow: "hidden",
          }}
        >
          {/* Subtle top line progress */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.2, ease: "easeInOut" }}
            style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 1,
              background: "linear-gradient(90deg, transparent, #d4506a 30%, #c9a84c 70%, transparent)",
              transformOrigin: "left",
            }}
          />

          {/* Center glow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: "50vw", height: "50vw", maxWidth: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,80,106,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "0 2rem" }}>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "1rem" }}
              animate={{ opacity: 1, letterSpacing: "0.6rem" }}
              transition={{ duration: 1.2, delay: 0.1 }}
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(0.45rem,1.3vw,0.65rem)",
                color: "rgba(201,168,76,0.45)",
                textTransform: "uppercase",
                marginBottom: "clamp(1.5rem,4vw,2.5rem)",
              }}
            >
              An Invitation
            </motion.p>

            {/* Groom name — slides up from clip */}
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: "clamp(1.6rem,7vw,5.5rem)",
                  fontWeight: 900,
                  color: "#fdf6ec",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Varun Kumar TK
              </motion.h1>
            </div>

            {/* Weds */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontStyle: "italic",
                fontSize: "clamp(0.9rem,2.5vw,1.6rem)",
                color: "#ff9eb5",
                letterSpacing: "0.4rem",
                margin: "clamp(0.6rem,2vw,1rem) 0",
              }}
            >
              ♡ weds ♡
            </motion.p>

            {/* Bride name — slides down from clip */}
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "-110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: "clamp(1.6rem,7vw,5.5rem)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #ff9eb5 0%, #ffd6e0 45%, #c9a84c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Tejaswini H M
              </motion.h1>
            </div>

            {/* Date */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 2.4 }}
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(0.45rem,1.2vw,0.62rem)",
                letterSpacing: "0.5rem",
                color: "rgba(201,168,76,0.55)",
                marginTop: "clamp(1.5rem,4vw,2.5rem)",
              }}
            >
              JUNE 23–24 · 2026 · BENGALURU
            </motion.p>
          </div>

          {/* Bottom label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            style={{
              position: "absolute", bottom: "2.5rem",
              fontFamily: "'Cinzel',serif",
              fontSize: "0.42rem",
              letterSpacing: "0.4rem",
              color: "rgba(255,255,255,0.15)",
            }}
          >
            LOADING
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
