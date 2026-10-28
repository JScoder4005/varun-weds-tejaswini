"use client";
import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed", top: 0, left: 0, right: 0,
        height: 2, zIndex: 9999,
        background: "linear-gradient(90deg, #d4506a, #ff9eb5, #c9a84c, #ff9eb5, #d4506a)",
        transformOrigin: "0%",
      }}
    />
  );
}
