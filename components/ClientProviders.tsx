"use client";
import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(() => import("@/components/ParticleCanvas"), { ssr: false });
const AudioPlayer = dynamic(() => import("@/components/AudioPlayer"), { ssr: false });
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });

export default function ClientProviders() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleCanvas />
      <AudioPlayer />
    </>
  );
}
