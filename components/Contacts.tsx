"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WHATSAPP_MSG = encodeURIComponent("Dear Varun, thank you for inviting us to your wedding. We are honored to be part of this auspicious occasion. Heartiest blessings to you and Tejaswini for a joyful and prosperous married life.");

const contacts = [
  { name: "Varun TK", role: "Groom", type: "whatsapp" as const, href: `https://api.whatsapp.com/send?phone=919110884227&text=${WHATSAPP_MSG}`, icon: "💬", color: "#25D366", label: "WhatsApp" },
  { name: "Krishnamurthy TV", role: "Groom's Father", type: "phone" as const, href: "tel:+91-944-949-6566", icon: "📞", color: "#ff9eb5", label: "Tap to Call" },
  { name: "Chandan TK", role: "Groom's Brother", type: "phone" as const, href: "tel:+91-895-160-3484", icon: "📞", color: "#ff9eb5", label: "Tap to Call" },
  { name: "Shivaraju A", role: "Family", type: "phone" as const, href: "tel:+91-988-675-2910", icon: "📞", color: "#ff9eb5", label: "Tap to Call" },
];

function ContactCard({ c, i }: { c: typeof contacts[0]; i: number }) {
  return (
    <motion.a
      href={c.href}
      target={c.type === "whatsapp" ? "_blank" : undefined}
      rel={c.type === "whatsapp" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: "0.75rem", textDecoration: "none",
        background: "rgba(13,33,55,0.7)", backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1px solid rgba(212,80,106,0.2)",
        borderRadius: 20,
        padding: "clamp(1.2rem,4vw,2rem) clamp(1rem,3vw,1.5rem)",
        width: "clamp(140px,42vw,200px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        cursor: "pointer", position: "relative", overflow: "hidden",
      }}
    >
      {/* Shimmer sweep on hover */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "160%", opacity: 1 }}
        transition={{ duration: 0.55 }}
        style={{
          position: "absolute", top: 0, bottom: 0, width: "60%",
          background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)",
          pointerEvents: "none"
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3, delay: i * 0.25 }}
        style={{
          width: 48, height: 48, borderRadius: "50%",
          background: `${c.color}22`, border: `2px solid ${c.color}44`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.3rem"
        }}
      >{c.icon}</motion.div>

      <div style={{ textAlign: "center" }}>
        <p style={{
          fontFamily: "'Cinzel',serif",
          fontSize: "clamp(0.75rem,2.5vw,1rem)",
          fontWeight: 600, color: "#fdf6ec", marginBottom: "0.2rem"
        }}>{c.name}</p>
        <p style={{
          fontFamily: "'Crimson Pro',serif", fontStyle: "italic",
          fontSize: "clamp(0.75rem,2vw,0.85rem)", color: "rgba(255,255,255,0.4)"
        }}>{c.role}</p>
      </div>

      <div style={{
        display: "flex", alignItems: "center", gap: "0.3rem",
        fontFamily: "'Cinzel',serif", fontSize: "0.55rem",
        letterSpacing: "0.15rem", color: c.color, textTransform: "uppercase"
      }}>
        <span>{c.label}</span><span>→</span>
      </div>
    </motion.a>
  );
}

export default function Contacts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} style={{
      minHeight: "100svh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", zIndex: 1,
      padding: "4rem clamp(1rem,5vw,2rem)"
    }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "clamp(2rem,6vw,4rem)" }}
      >
        <p style={{ fontFamily: "'Cinzel',serif", fontSize: "0.6rem", letterSpacing: "0.4rem", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", marginBottom: "0.8rem" }}>Get In Touch</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,5vw,3.5rem)", fontWeight: 300, fontStyle: "italic", color: "#fdf6ec" }}>Contact Us</h2>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontStyle: "italic", fontSize: "clamp(0.9rem,2.5vw,1.1rem)", color: "rgba(253,246,236,0.45)", marginTop: "0.6rem" }}>For any queries, feel free to reach out</p>
      </motion.div>

      {/* 2×2 grid on mobile, row on desktop */}
      <div style={{
        display: "flex", gap: "clamp(0.75rem,3vw,1.5rem)",
        flexWrap: "wrap", justifyContent: "center",
        maxWidth: 520, width: "100%"
      }}>
        {contacts.map((c, i) => <ContactCard key={c.name} c={c} i={i} />)}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ textAlign: "center", marginTop: "clamp(3rem,8vw,5rem)" }}
      >
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
      </motion.div>
    </section>
  );
}
