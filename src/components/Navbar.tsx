"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Compass,
  Cpu,
  Terminal,
  Binary,
  Send,
  Volume2,
  VolumeX,
  Radio,
} from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [altitude, setAltitude] = useState("ALT: 840m // SKY STRATUM");
  const [isSynthPlaying, setIsSynthPlaying] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthOsc1Ref = useRef<OscillatorNode | null>(null);
  const synthOsc2Ref = useRef<OscillatorNode | null>(null);
  const synthGainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ["hero", "stack", "projects", "cli", "contact"];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, window.scrollY / (maxScroll || 1)));
      const altMeters = Math.round(840 - progress * 760);
      const sector =
        progress < 0.28
          ? "SKY STRATUM"
          : progress < 0.68
          ? "MID-CANYON"
          : "NEON UNDERCITY";
      setAltitude(`ALT: ${altMeters}m // ${sector}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCyberAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtxClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtxClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      if (!isSynthPlaying) {
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 2);

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(160, ctx.currentTime);

        const osc1 = ctx.createOscillator();
        osc1.type = "sawtooth";
        osc1.frequency.setValueAtTime(55, ctx.currentTime);

        const osc2 = ctx.createOscillator();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(55.6, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        synthGainRef.current = gain;
        synthOsc1Ref.current = osc1;
        synthOsc2Ref.current = osc2;
        setIsSynthPlaying(true);
      } else {
        if (synthGainRef.current) {
          synthGainRef.current.gain.exponentialRampToValueAtTime(
            0.0001,
            ctx.currentTime + 0.6
          );
          setTimeout(() => {
            synthOsc1Ref.current?.stop();
            synthOsc2Ref.current?.stop();
            synthOsc1Ref.current = null;
            synthOsc2Ref.current = null;
          }, 600);
        }
        setIsSynthPlaying(false);
      }
    } catch (e) {
      console.warn("Audio Context initialization deferred:", e);
    }
  };

  const navLinks = [
    { id: "hero", label: "NEXUS", icon: <Compass className="w-3.5 h-3.5 text-red-400" /> },
    { id: "stack", label: "STACK", icon: <Cpu className="w-3.5 h-3.5 text-cyan-400" /> },
    { id: "projects", label: "PROJECTS", icon: <Terminal className="w-3.5 h-3.5 text-amber-400" /> },
    { id: "cli", label: "CLI", icon: <Binary className="w-3.5 h-3.5 text-emerald-400" /> },
    { id: "contact", label: "COMM", icon: <Send className="w-3.5 h-3.5 text-rose-400" /> },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="cyber-panel px-3 sm:px-4 py-2 sm:py-2.5 rounded-full flex items-center justify-between shadow-2xl border border-white/15 backdrop-blur-xl">
        {/* Left: Callsign & Sector Altitude */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="flex items-center gap-1.5 sm:gap-2 text-white font-mono-code text-xs font-semibold tracking-wider group"
          >
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 group-hover:bg-red-400 flex items-center justify-center transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
            <span className="hidden md:inline text-slate-400">NODE://</span>
            <span className="text-white group-hover:text-red-400 transition-colors text-[11px] sm:text-xs">
              ISHWAR_PATRO
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-white/10 text-[11px] font-mono-code text-cyan-400">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>{altitude}</span>
          </div>
        </div>

        {/* Center: Nav Anchors */}
        <nav className="flex items-center gap-1 sm:gap-1.5">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-mono-code transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "text-red-400 bg-red-500/15 border border-red-500/30 font-semibold shadow-[0_0_12px_rgba(255,80,56,0.25)]"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
                title={item.label}
              >
                {item.icon}
                <span className="hidden sm:inline text-[11px]">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Ambient Synth Audio Generator */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleCyberAudio}
            type="button"
            className="px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] font-mono-code bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-all flex items-center gap-1.5 sm:gap-2 shadow-sm"
            title="Toggle Atmospheric Ambient Drone Synth"
          >
            {isSynthPlaying ? (
              <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-red-400" />
            )}
            <span className="hidden sm:inline text-[10px]">
              {isSynthPlaying ? "AUDIO: LIVE" : "AUDIO: OFF"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
