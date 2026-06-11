"use client";
import { useEffect, useRef } from "react";

interface Bokeh {
  x: number; y: number; r: number; vx: number; vy: number;
  opacity: number; color: string;
}
interface Petal {
  x: number; y: number; r: number; vx: number; vy: number;
  rotation: number; vr: number; opacity: number; scale: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    const bokehColors = [
      "rgba(212,80,106,", "rgba(255,158,181,", "rgba(26,58,92,",
      "rgba(201,168,76,", "rgba(255,200,220,"
    ];

    const bokehs: Bokeh[] = Array.from({ length: 28 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: 30 + Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      opacity: 0.04 + Math.random() * 0.12,
      color: bokehColors[Math.floor(Math.random() * bokehColors.length)]
    }));

    const petals: Petal[] = Array.from({ length: 18 }, (_, i) => ({
      x: Math.random() * W, y: -20 - Math.random() * H,
      r: 6 + Math.random() * 10,
      vx: (Math.random() - 0.5) * 0.8, vy: 0.5 + Math.random() * 1.2,
      rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.03,
      opacity: 0.4 + Math.random() * 0.5,
      scale: 0.6 + Math.random() * 0.8
    }));

    function drawPetal(x: number, y: number, r: number, rotation: number, opacity: number) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.moveTo(0, -r);
      ctx.bezierCurveTo(r * 0.8, -r * 0.5, r * 0.8, r * 0.5, 0, r);
      ctx.bezierCurveTo(-r * 0.8, r * 0.5, -r * 0.8, -r * 0.5, 0, -r);
      const grad = ctx.createLinearGradient(0, -r, 0, r);
      grad.addColorStop(0, "rgba(255, 182, 193, 0.9)");
      grad.addColorStop(0.5, "rgba(212, 80, 106, 0.7)");
      grad.addColorStop(1, "rgba(255, 105, 135, 0.5)");
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }

    let animId: number;
    function animate() {
      ctx.clearRect(0, 0, W, H);

      // Bokeh
      for (const b of bokehs) {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.r) b.x = W + b.r;
        if (b.x > W + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = H + b.r;
        if (b.y > H + b.r) b.y = -b.r;
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, b.color + b.opacity + ")");
        grad.addColorStop(1, b.color + "0)");
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Petals
      for (const p of petals) {
        p.x += p.vx + Math.sin(Date.now() * 0.001 + p.r) * 0.3;
        p.y += p.vy;
        p.rotation += p.vr;
        if (p.y > H + 30) {
          p.y = -30; p.x = Math.random() * W;
          p.opacity = 0.4 + Math.random() * 0.5;
        }
        drawPetal(p.x, p.y, p.r * p.scale, p.rotation, p.opacity * 0.6);
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0 }}
    />
  );
}
