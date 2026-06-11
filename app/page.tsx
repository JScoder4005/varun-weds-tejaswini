import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Invitation from "@/components/Invitation";
import Couple from "@/components/Couple";
import Events from "@/components/Events";
import Venue from "@/components/Venue";
import Contacts from "@/components/Contacts";
import TogetherPhoto from "@/components/TogetherPhoto";
import ClientProviders from "@/components/ClientProviders";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100dvh", background: "var(--midnight)" }}>
      {/* Global ambient background */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 20% 20%, rgba(26,58,92,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(212,80,106,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(6,13,31,1) 0%, rgba(6,13,31,0.8) 100%)"
      }} />

      <ClientProviders />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Dividers between sections */}
        <Hero />
        <SectionDivider />
        <Countdown />
        <SectionDivider />
        <Invitation />
        <SectionDivider />
        <TogetherPhoto />
        <SectionDivider />
        <Couple />
        <SectionDivider />
        <Events />
        <SectionDivider />
        <Venue />
        <SectionDivider />
        <Contacts />
      </div>
    </main>
  );
}

function SectionDivider() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "0 2rem", gap: "1.5rem"
    }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, rgba(212,80,106,0.2))" }} />
      <span style={{ color: "rgba(212,80,106,0.3)", fontSize: "0.8rem" }}>✦</span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, rgba(212,80,106,0.2))" }} />
    </div>
  );
}
