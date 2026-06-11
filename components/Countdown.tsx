"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const WEDDING_DATE = new Date("2026-06-24T09:15:00+05:30");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

function pad(n: number) { return String(n).padStart(2, "0"); }

function FlipUnit({ value, label }: { value: string; label: string }) {
  const prevRef = useRef(value);
  const [flipping, setFlipping] = useState(false);
  const [displayVal, setDisplayVal] = useState(value);
  const [nextVal, setNextVal] = useState(value);

  useEffect(() => {
    if (value !== prevRef.current) {
      setNextVal(value);
      setFlipping(true);
      const t = setTimeout(() => {
        setDisplayVal(value);
        setFlipping(false);
        prevRef.current = value;
      }, 280);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
      <div style={{ position: "relative", width: "clamp(62px,18vw,110px)", height: "clamp(72px,21vw,130px)" }}>
        {/* Back */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(180deg, #0d2137 0%, #060d1f 100%)",
          borderRadius: 10, border: "1px solid rgba(212,80,106,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 24px rgba(212,80,106,0.12)"
        }}>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(1.6rem,7vw,3.8rem)", fontWeight: 900, color: "#ff9eb5" }}>{nextVal}</span>
        </div>
        {/* Front */}
        <motion.div
          animate={flipping ? { rotateX: -90, opacity: 0 } : { rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.28, ease: "easeIn" }}
          style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
            background: "linear-gradient(180deg, #1a3a5c 0%, #0d2137 100%)",
            borderRadius: 10, border: "1px solid rgba(212,80,106,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transformOrigin: "center bottom",
            boxShadow: "0 0 30px rgba(212,80,106,0.2)",
          }}
        >
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(1.6rem,7vw,3.8rem)", fontWeight: 900, color: "#ff9eb5", textShadow: "0 0 16px rgba(255,158,181,0.5)" }}>{displayVal}</span>
          <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: "rgba(0,0,0,0.25)" }} />
        </motion.div>
      </div>
      <span style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(0.45rem,1.5vw,0.6rem)", letterSpacing: "0.2rem", color: "rgba(255,158,181,0.55)", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} style={{
      minHeight: "100svh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", zIndex: 1, padding: "4rem clamp(1rem,5vw,2rem)",
      textAlign: "center"
    }}>
      {/* Watermark */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", pointerEvents: "none" }}>
        <span style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(3rem,14vw,16rem)", fontWeight: 900, color: "rgba(255,158,181,0.025)", letterSpacing: "0.05em", userSelect: "none", whiteSpace: "nowrap" }}>COUNTDOWN</span>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} style={{ marginBottom: "clamp(2rem,5vw,3.5rem)", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(0.55rem,1.8vw,0.7rem)", letterSpacing: "0.35rem", color: "rgba(201,168,76,0.7)", marginBottom: "0.8rem", textTransform: "uppercase" }}>
          The Big Day Is Almost Here
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.5rem,5vw,3.5rem)", fontWeight: 300, fontStyle: "italic", color: "#fdf6ec", textShadow: "0 0 40px rgba(212,80,106,0.25)" }}>
          Counting Down With Love
        </h2>
      </motion.div>

      {time.done ? (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: "2rem", color: "#ff9eb5" }}>Today is the Day!</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "flex", alignItems: "flex-start",
            gap: "clamp(0.4rem,2.5vw,2rem)",
            position: "relative", zIndex: 1,
            justifyContent: "center",
            flexWrap: "nowrap",        // keep in one row, clamp handles size
            maxWidth: "100vw",
            padding: "0 0.5rem"
          }}
        >
          <FlipUnit value={pad(time.days)} label="Days" />
          <div style={{ paddingTop: "clamp(20px,5vw,45px)", color: "#ff9eb5", fontSize: "clamp(1.2rem,4vw,3rem)", fontWeight: 300, userSelect: "none" }}>:</div>
          <FlipUnit value={pad(time.hours)} label="Hours" />
          <div style={{ paddingTop: "clamp(20px,5vw,45px)", color: "#ff9eb5", fontSize: "clamp(1.2rem,4vw,3rem)", fontWeight: 300, userSelect: "none" }}>:</div>
          <FlipUnit value={pad(time.minutes)} label="Min" />
          <div style={{ paddingTop: "clamp(20px,5vw,45px)", color: "#ff9eb5", fontSize: "clamp(1.2rem,4vw,3rem)", fontWeight: 300, userSelect: "none" }}>:</div>
          <FlipUnit value={pad(time.seconds)} label="Sec" />
        </motion.div>
      )}

      {/* Decorative rings */}
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        style={{ position: "absolute", width: "clamp(200px,60vw,400px)", height: "clamp(200px,60vw,400px)", borderRadius: "50%", border: "1px solid rgba(212,80,106,0.07)", pointerEvents: "none" }}
      />
      <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        style={{ position: "absolute", width: "clamp(280px,80vw,550px)", height: "clamp(280px,80vw,550px)", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.04)", pointerEvents: "none" }}
      />
    </section>
  );
}
