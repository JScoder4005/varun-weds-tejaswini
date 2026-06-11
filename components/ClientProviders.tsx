"use client";
import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(() => import("@/components/ParticleCanvas"), { ssr: false });
const AudioPlayer = dynamic(() => import("@/components/AudioPlayer"), { ssr: false });

export default function ClientProviders() {
  return (
    <>
      <ParticleCanvas />
      <AudioPlayer />
    </>
  );
}
