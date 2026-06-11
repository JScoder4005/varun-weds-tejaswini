"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showNudge, setShowNudge] = useState(true);

  const play = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.4;
    audioRef.current.play()
      .then(() => { setPlaying(true); setShowNudge(false); })
      .catch(() => {});
  };

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      play();
    }
  };

  // Auto-dismiss nudge after 6s even if not clicked
  useEffect(() => {
    const t = setTimeout(() => setShowNudge(false), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/BGM.mp3" loop preload="auto" />

      {/* Floating music button */}
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        title={playing ? "Mute music" : "Play music"}
        style={{
          position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 1000,
          width: 52, height: 52, borderRadius: "50%",
          background: playing
            ? "linear-gradient(135deg, rgba(212,80,106,0.6), rgba(255,158,181,0.4))"
            : "rgba(13,33,55,0.85)",
          border: `1px solid ${playing ? "rgba(255,158,181,0.6)" : "rgba(212,80,106,0.4)"}`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: playing
            ? "0 0 30px rgba(212,80,106,0.5), 0 0 60px rgba(212,80,106,0.2)"
            : "0 0 20px rgba(212,80,106,0.2)",
          transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
        }}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.div key="playing"
              initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }} transition={{ duration: 0.3 }}
              style={{ display: "flex", gap: 3, alignItems: "center" }}
            >
              {[0, 0.1, 0.2].map((d, i) => (
                <motion.div key={i}
                  animate={{ scaleY: [1, 2.2, 0.5, 1.8, 1] }}
                  transition={{ repeat: Infinity, duration: 0.7, delay: d, ease: "easeInOut" }}
                  style={{ width: 3, height: 14, background: "#ff9eb5", borderRadius: 2, transformOrigin: "bottom" }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div key="paused"
              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff9eb5">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* "Tap for music" nudge badge */}
      <AnimatePresence>
        {showNudge && !playing && (
          <motion.button
            onClick={toggle}
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ delay: 2, duration: 0.4 }}
            style={{
              position: "fixed", bottom: "2rem", right: "5rem", zIndex: 999,
              background: "rgba(13,33,55,0.9)",
              border: "1px solid rgba(212,80,106,0.3)",
              borderRadius: 24, padding: "0.45rem 1rem",
              color: "rgba(255,158,181,0.9)",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.6rem", letterSpacing: "0.15rem",
              cursor: "pointer",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex", alignItems: "center", gap: "0.4rem",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
            }}
          >
            <span>🎵</span> TAP FOR MUSIC
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
