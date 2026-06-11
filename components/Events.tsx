"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const CALENDAR_URL =
  "https://www.google.com/calendar/render?action=TEMPLATE&text=Varun+And+Tejaswini%27s+Wedding&dates=20260624T091500Z/20260624T094500Z&details=For+details:+https://varun-weds-tejaswini.netlify.app/&location=KNT+Kalyana+Mantapa,Chandapura&sf=true&output=xml";

function EventCard({
  title,
  time,
  subtitle,
  icon,
  delay,
  color,
}: {
  title: string;
  time: string;
  subtitle: string;
  icon: string;
  delay: number;
  color: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: "rgba(13,33,55,0.7)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: `1px solid ${hovered ? color : "rgba(212,80,106,0.15)"}`,
        borderRadius: 22,
        padding: "clamp(1.5rem,5vw,2.5rem) clamp(1.2rem,4vw,2rem)",
        width: "clamp(260px,85vw,320px)",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.4),0 0 35px ${color}44`
          : "0 8px 30px rgba(0,0,0,0.3)",
        transition: "border-color 0.3s,box-shadow 0.3s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `radial-gradient(circle at 50% 0%,${color}15 0%,transparent 60%)`,
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{ fontSize: "2.2rem", marginBottom: "0.9rem" }}
        >
          {icon}
        </motion.div>
        <p
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "0.55rem",
            letterSpacing: "0.3rem",
            color: "rgba(201,168,76,0.7)",
            textTransform: "uppercase",
            marginBottom: "0.4rem",
          }}
        >
          Event
        </p>
        <h3
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "clamp(1.1rem,3.5vw,1.8rem)",
            fontWeight: 600,
            color: "#fdf6ec",
            marginBottom: "0.9rem",
          }}
        >
          {title}
        </h3>
        <div
          style={{
            width: 36,
            height: 1,
            background: color,
            marginBottom: "0.9rem",
            opacity: 0.5,
          }}
        />
        <p
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(1.2rem,3.5vw,2.2rem)",
            fontWeight: 400,
            color,
            textShadow: `0 0 18px ${color}88`,
            marginBottom: "0.25rem",
          }}
        >
          {time}
        </p>
        <p
          style={{
            fontFamily: "'Crimson Pro',serif",
            fontStyle: "italic",
            fontSize: "clamp(0.85rem,2.5vw,1rem)",
            color: "rgba(253,246,236,0.45)",
          }}
        >
          {subtitle}
        </p>
        <div
          style={{
            marginTop: "1.2rem",
            fontFamily: "'Cinzel',serif",
            fontSize: "0.55rem",
            letterSpacing: "0.18rem",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          June 24, 2026 · Wednesday
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        padding: "4rem clamp(1rem,5vw,2rem)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "clamp(2rem,6vw,4rem)" }}
      >
        <p
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "0.6rem",
            letterSpacing: "0.4rem",
            color: "rgba(201,168,76,0.6)",
            textTransform: "uppercase",
            marginBottom: "0.8rem",
          }}
        >
          Save The Date
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(1.8rem,5vw,3.5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#fdf6ec",
          }}
        >
          Celebration Events
        </h2>
      </motion.div>

      <div
        style={{
          display: "flex",
          gap: "clamp(1rem,4vw,3rem)",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2.5rem",
        }}
      >
        <EventCard
          title="Muhurtham"
          time="9:15 AM — 9:45 AM"
          subtitle="Wedding Ceremony"
          icon="🪷"
          delay={0.1}
          color="#ff9eb5"
        />
        <EventCard
          title="Reception"
          time="7:00 PM Onwards"
          subtitle="Evening Celebration"
          icon="🥂"
          delay={0.3}
          color="#c9a84c"
        />
      </div>

      <motion.a
        href={CALENDAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 40px rgba(201,168,76,0.35)",
        }}
        whileTap={{ scale: 0.96 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.7rem",
          border: "1px solid rgba(201,168,76,0.4)",
          borderRadius: 50,
          padding: "clamp(0.7rem,2vw,0.9rem) clamp(1.2rem,5vw,2.5rem)",
          background: "rgba(13,33,55,0.6)",
          backdropFilter: "blur(20px)",
          color: "#c9a84c",
          textDecoration: "none",
          fontFamily: "'Cinzel',serif",
          fontSize: "clamp(0.55rem,1.8vw,0.75rem)",
          letterSpacing: "0.18rem",
          whiteSpace: "nowrap",
        }}
      >
        <span>📅</span> ADD TO GOOGLE CALENDAR
      </motion.a>
    </section>
  );
}
