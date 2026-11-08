"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Predefined deterministic star coordinates to avoid hydration mismatches
const STATIC_STARS = [
  { x: 4, y: 8, size: 1.2, opacity: 0.5 },
  { x: 12, y: 22, size: 0.8, opacity: 0.4 },
  { x: 18, y: 65, size: 1.4, opacity: 0.6 },
  { x: 26, y: 14, size: 0.9, opacity: 0.35 },
  { x: 34, y: 82, size: 1.5, opacity: 0.7 },
  { x: 42, y: 38, size: 0.7, opacity: 0.3 },
  { x: 52, y: 92, size: 1.2, opacity: 0.45 },
  { x: 58, y: 19, size: 1.6, opacity: 0.65 },
  { x: 67, y: 74, size: 0.8, opacity: 0.4 },
  { x: 73, y: 11, size: 1.3, opacity: 0.55 },
  { x: 81, y: 46, size: 1.0, opacity: 0.35 },
  { x: 88, y: 88, size: 1.5, opacity: 0.6 },
  { x: 94, y: 31, size: 0.9, opacity: 0.45 },
  { x: 8, y: 48, size: 1.1, opacity: 0.4 },
  { x: 22, y: 95, size: 1.3, opacity: 0.5 },
  { x: 31, y: 32, size: 0.8, opacity: 0.3 },
  { x: 48, y: 60, size: 1.4, opacity: 0.55 },
  { x: 63, y: 42, size: 1.0, opacity: 0.4 },
  { x: 78, y: 79, size: 1.2, opacity: 0.5 },
  { x: 85, y: 18, size: 1.5, opacity: 0.6 },
  { x: 92, y: 66, size: 0.9, opacity: 0.35 },
  { x: 15, y: 78, size: 1.1, opacity: 0.45 },
  { x: 37, y: 52, size: 0.8, opacity: 0.3 },
  { x: 55, y: 6, size: 1.4, opacity: 0.6 },
  { x: 69, y: 96, size: 1.0, opacity: 0.4 },
  { x: 84, y: 58, size: 1.3, opacity: 0.5 },
  { x: 97, y: 14, size: 0.7, opacity: 0.3 },
  { x: 6, y: 36, size: 1.3, opacity: 0.5 },
  { x: 28, y: 70, size: 0.9, opacity: 0.35 },
  { x: 45, y: 18, size: 1.2, opacity: 0.45 },
  { x: 61, y: 85, size: 1.5, opacity: 0.6 },
  { x: 76, y: 34, size: 0.8, opacity: 0.3 },
  { x: 90, y: 4, size: 1.4, opacity: 0.55 },
];

export default function SpaceBackground() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  // GPU-accelerated direct transforms (Zero-lag, 60/120fps hardware composite)
  // 1. Deep Space Starfield (Subtle slow drift)
  const starsY = useTransform(scrollYProgress, [0, 1], [0, -110]);

  // 2. Solar System Celestial Orbital Plane (Gentle perspective translation & tilt)
  const mapY = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const mapRotate = useTransform(scrollYProgress, [0, 1], [-5, 4]);

  // 3. Scrolling Parallax Celestial Bodies (Strategically positioned along cosmic flanks)
  // SATURN (Right flank: glides majestically downward with ring tilt parallax)
  const saturnY = useTransform(scrollYProgress, [0, 1], [0, 520]);
  const saturnRotate = useTransform(scrollYProgress, [0, 1], [-18, -4]);
  const saturnScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.95]);

  // JUPITER (Left flank: ascends smoothly along the Jovian orbit)
  const jupiterY = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const jupiterRotate = useTransform(scrollYProgress, [0, 1], [0, 28]);

  // MARS (Upper-right flank: glides across inner orbital arc)
  const marsY = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const marsX = useTransform(scrollYProgress, [0, 1], [0, -45]);

  // EARTH & MOON (Lower-left flank: gentle orbital transit)
  const earthY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const earthX = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // SUN (Anchored at upper-right perimeter: soft radiant corona, completely clears central text)
  const sunY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{ backgroundColor: "#121014" }}
    >
      {/* 1. DEEP SPACE COSMIC GRADIENT BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121014] via-[#16121a] via-50% to-[#201826] opacity-98" />

      {/* 2. ATMOSPHERIC NEBULA GLOWS */}
      <div
        className="absolute top-0 right-0 w-[60vw] h-[60vw] pointer-events-none opacity-35"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(242, 118, 94, 0.35) 0%, rgba(242, 118, 94, 0.1) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[25%] left-0 w-[55vw] h-[55vw] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 10% 35%, rgba(49, 91, 140, 0.4) 0%, rgba(49, 91, 140, 0.12) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-[15%] w-[50vw] h-[50vw] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 90%, rgba(49, 91, 140, 0.3) 0%, transparent 65%)",
        }}
      />

      {/* 3. RETRO-PUNK CELESTIAL COORDINATE GRID */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F5EBDD 1px, transparent 1px),
            linear-gradient(to bottom, #F5EBDD 1px, transparent 1px)
          `,
          backgroundSize: "75px 75px",
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 35%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 35%, transparent 85%)",
        }}
      />

      {/* 4. PINPRICK STARFIELD (Parallax Slow Drift) */}
      <motion.div style={{ y: starsY }} className="absolute inset-0 will-change-transform">
        <svg className="w-full h-[160vh]" xmlns="http://www.w3.org/2000/svg">
          {mounted &&
            STATIC_STARS.map((star, i) => (
              <circle
                key={`star-${i}`}
                cx={`${star.x}%`}
                cy={`${star.y}%`}
                r={star.size}
                fill="#F5EBDD"
                opacity={star.opacity}
              />
            ))}
        </svg>
      </motion.div>

      {/* 5. SOLAR SYSTEM CELESTIAL MAP: CONCENTRIC ORBITAL PLANES & ASTRONOMICAL VECTORS */}
      <motion.div
        style={{ y: mapY, rotate: mapRotate }}
        className="absolute inset-0 will-change-transform pointer-events-none"
      >
        <svg
          className="w-full h-[180vh]"
          viewBox="0 0 1600 1800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Sun Corona Radial Glow */}
            <radialGradient id="sunCoronaGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF8EE" stopOpacity="1" />
              <stop offset="35%" stopColor="#F2765E" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#315B8C" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#121014" stopOpacity="0" />
            </radialGradient>

            {/* Jupiter Banded Gradient */}
            <linearGradient id="jupiterBands" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EAD8C7" />
              <stop offset="20%" stopColor="#F2765E" stopOpacity="0.85" />
              <stop offset="38%" stopColor="#315B8C" stopOpacity="0.75" />
              <stop offset="55%" stopColor="#F5EBDD" />
              <stop offset="78%" stopColor="#413333" />
              <stop offset="100%" stopColor="#EAD8C7" />
            </linearGradient>

            {/* Saturn Ring System Gradient with Cassini Gap */}
            <linearGradient id="saturnRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5EBDD" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#F5EBDD" stopOpacity="0.75" />
              <stop offset="48%" stopColor="#315B8C" stopOpacity="0.85" />
              <stop offset="52%" stopColor="#121014" stopOpacity="0.05" />
              <stop offset="58%" stopColor="#F2765E" stopOpacity="0.7" />
              <stop offset="85%" stopColor="#F5EBDD" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F5EBDD" stopOpacity="0.05" />
            </linearGradient>

            {/* Earth Gradient */}
            <linearGradient id="earthGrad" x1="20%" y1="20%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#F5EBDD" />
              <stop offset="40%" stopColor="#315B8C" />
              <stop offset="85%" stopColor="#1c3452" />
              <stop offset="100%" stopColor="#121014" />
            </linearGradient>

            {/* Mars Gradient */}
            <linearGradient id="marsGrad" x1="30%" y1="20%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#F5EBDD" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#F2765E" />
              <stop offset="75%" stopColor="#873526" />
              <stop offset="100%" stopColor="#413333" />
            </linearGradient>
          </defs>

          {/* CELESTIAL ORBITAL TRACKS (Anchored around the Solar Focus in Upper Right) */}
          <g opacity="0.32">
            {/* Orbit 1: Mercury */}
            <ellipse cx="1250" cy="220" rx="220" ry="95" stroke="#315B8C" strokeWidth="0.8" strokeDasharray="3 6" />
            {/* Orbit 2: Venus */}
            <ellipse cx="1250" cy="220" rx="360" ry="155" stroke="#315B8C" strokeWidth="0.9" strokeDasharray="4 8" />
            {/* Orbit 3: Earth */}
            <ellipse cx="1250" cy="220" rx="540" ry="235" stroke="#F5EBDD" strokeWidth="1" strokeDasharray="5 10" opacity="0.6" />
            {/* Orbit 4: Mars */}
            <ellipse cx="1250" cy="220" rx="740" ry="325" stroke="#F2765E" strokeWidth="1.1" strokeDasharray="4 8" opacity="0.65" />
            {/* Asteroid Belt */}
            <ellipse cx="1250" cy="220" rx="940" ry="415" stroke="#F5EBDD" strokeWidth="1.2" strokeDasharray="2 18" opacity="0.45" />
            {/* Orbit 5: Jupiter */}
            <ellipse cx="1250" cy="220" rx="1180" ry="525" stroke="#315B8C" strokeWidth="1.2" strokeDasharray="6 12" opacity="0.6" />
            {/* Orbit 6: Saturn */}
            <ellipse cx="1250" cy="220" rx="1460" ry="650" stroke="#F2765E" strokeWidth="1.3" strokeDasharray="8 14" opacity="0.65" />
            {/* Orbit 7: Uranus */}
            <ellipse cx="1250" cy="220" rx="1780" ry="790" stroke="#315B8C" strokeWidth="1.2" strokeDasharray="5 15" opacity="0.45" />
          </g>

          {/* ORBIT SYSTEM TELEMETRY LABELS ALONG OUTER ARCS */}
          <g className="font-mono text-[9.5px] tracking-widest uppercase select-none" fill="#F5EBDD" opacity="0.38">
            <text x="1250" y="110" textAnchor="middle">ORBIT 01 // MERCURY [0.39 AU]</text>
            <text x="1250" y="52" textAnchor="middle">ORBIT 02 // VENUS [0.72 AU]</text>
            <text x="730" y="240" textAnchor="end">ORBIT 03 // TERRA SYSTEM [1.00 AU]</text>
            <text x="530" y="280" textAnchor="end">ORBIT 04 // MARS [1.52 AU]</text>
            <text x="330" y="320" textAnchor="end">ASTEROID BELT // MAIN RING</text>
            <text x="120" y="440" textAnchor="start">ORBIT 05 // JOVIAN CORE [5.20 AU]</text>
            <text x="90" y="870" textAnchor="start">ORBIT 06 // KRONOS RING SYSTEM [9.58 AU]</text>
          </g>
        </svg>
      </motion.div>

      {/* 6. CENTRAL TEXT LEGIBILITY VEIL (Protects center reading channel from any distraction) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 45%, rgba(18, 16, 20, 0.82) 0%, rgba(18, 16, 20, 0.55) 55%, transparent 100%)",
        }}
      />

      {/* =========================================================================
          7. CELESTIAL BODIES (Positioned Strictly on Flanks to Never Block Text)
          ========================================================================= */}

      {/* SUN (SOL // HELIOS) — Upper-Right Flank Anchored */}
      <motion.div
        style={{ y: sunY, scale: sunScale }}
        className="absolute top-[2%] right-[4%] sm:right-[7%] will-change-transform pointer-events-none"
      >
        <div className="relative flex flex-col items-center">
          {/* Ambient Corona Radiance */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[radial-gradient(circle,#F2765E_0%,rgba(242,118,94,0.22)_45%,transparent_75%)] blur-sm" />
          {/* Inner Radiant Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#F2765E] via-[#F5EBDD] to-[#FFF8EE] shadow-[0_0_36px_10px_rgba(242,118,94,0.65)]" />
          {/* Telemetry Tag */}
          <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#F2765E] bg-[#121014]/90 px-2 py-0.5 rounded border border-[#F2765E]/40 mt-1 shadow-sm">
            SOL // HELIOS [G2V]
          </span>
        </div>
      </motion.div>

      {/* MARS (Inner Planet Upper-Right Orbital Plane) */}
      <motion.div
        style={{ y: marsY, x: marsX }}
        className="absolute top-[16%] right-[16%] sm:right-[20%] will-change-transform pointer-events-none"
      >
        <div className="relative flex flex-col items-center">
          <svg className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-[0_0_14px_rgba(242,118,94,0.45)]" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="26" fill="url(#marsGrad)" />
            {/* Polar Ice Cap */}
            <ellipse cx="30" cy="7" rx="8" ry="3" fill="#F5EBDD" opacity="0.8" />
            {/* Shadow Curve */}
            <path
              d="M 30,4 A 26,26 0 0 1 56,30 A 26,26 0 0 1 30,56 A 14,26 0 0 0 30,4 Z"
              fill="#121014"
              opacity="0.4"
            />
          </svg>
          <div className="font-mono text-[7.5px] tracking-wider text-[#F2765E] bg-[#121014]/90 px-1.5 py-0.5 rounded border border-[#F2765E]/30 w-fit mt-1">
            MARS // 1.52 AU
          </div>
        </div>
      </motion.div>

      {/* SATURN WITH GRAND 3D RINGS (Right Flank — Cinematic Parallax Sweep) */}
      <motion.div
        style={{ y: saturnY, rotate: saturnRotate, scale: saturnScale }}
        className="absolute top-[28%] right-[1%] sm:right-[3%] md:right-[4%] will-change-transform pointer-events-none"
      >
        <div className="relative flex flex-col items-center">
          <svg
            className="w-44 h-28 sm:w-60 sm:h-40 md:w-72 md:h-48 drop-shadow-[0_0_28px_rgba(242,118,94,0.3)]"
            viewBox="0 0 300 200"
          >
            {/* BACK HALF OF RING SYSTEM (Behind Planetary Sphere) */}
            <g transform="rotate(-18 150 100)">
              <ellipse
                cx="150"
                cy="100"
                rx="135"
                ry="38"
                fill="none"
                stroke="url(#saturnRingGrad)"
                strokeWidth="24"
                opacity="0.85"
              />
              <ellipse
                cx="150"
                cy="100"
                rx="98"
                ry="27"
                fill="none"
                stroke="#F2765E"
                strokeWidth="8"
                opacity="0.4"
              />
            </g>

            {/* SATURN PLANETARY SPHERE */}
            <circle
              cx="150"
              cy="100"
              r="48"
              fill="url(#jupiterBands)"
              className="drop-shadow-md"
            />
            {/* Planet Shadow Curve */}
            <path
              d="M 150,52 A 48,48 0 0 1 198,100 A 48,48 0 0 1 150,148 A 28,48 0 0 0 150,52 Z"
              fill="#121014"
              opacity="0.5"
            />

            {/* FRONT HALF OF RING SYSTEM (In Front with Cassini Gap) */}
            <g transform="rotate(-18 150 100)">
              <path
                d="M 15,100 A 135,38 0 0,0 285,100"
                fill="none"
                stroke="url(#saturnRingGrad)"
                strokeWidth="24"
                opacity="0.9"
              />
              <path
                d="M 52,100 A 98,27 0 0,0 248,100"
                fill="none"
                stroke="#F2765E"
                strokeWidth="8"
                opacity="0.45"
              />
            </g>
          </svg>

          {/* Telemetry Tag */}
          <div className="font-mono text-[8.5px] tracking-widest text-[#F2765E] bg-[#121014]/90 px-2 py-0.5 rounded border border-[#F2765E]/40 shadow-sm mt-0.5">
            SATURN // KRONOS [9.58 AU]
          </div>
        </div>
      </motion.div>

      {/* JUPITER (Left Flank — Atmospheric Giant) */}
      <motion.div
        style={{ y: jupiterY, rotate: jupiterRotate }}
        className="absolute top-[42%] left-[1%] sm:left-[2%] md:left-[3%] will-change-transform pointer-events-none"
      >
        <div className="relative flex flex-col items-start">
          <div className="relative">
            {/* Atmospheric Halo */}
            <div className="absolute -inset-1 rounded-full bg-[#315B8C]/25 blur-sm" />
            <svg className="w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_0_22px_rgba(49,91,140,0.45)]" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="url(#jupiterBands)" />
              {/* Great Red Spot (Retro-punk coral) */}
              <ellipse cx="78" cy="74" rx="11" ry="7" fill="#F2765E" opacity="0.9" />
              <circle cx="78" cy="74" r="4" fill="#F5EBDD" opacity="0.6" />
              {/* Shadow Hemisphere */}
              <path
                d="M 60,6 A 54,54 0 0 1 114,60 A 54,54 0 0 1 60,114 A 32,54 0 0 0 60,6 Z"
                fill="#121014"
                opacity="0.45"
              />
            </svg>
            {/* Orbiting Moon Europa */}
            <div className="absolute -top-1 right-2 w-2.5 h-2.5 rounded-full bg-[#F5EBDD] shadow-[0_0_6px_#F5EBDD]" />
          </div>
          {/* Telemetry Tag */}
          <div className="mt-1 font-mono text-[8.5px] tracking-wider text-[#315B8C] bg-[#121014]/90 px-2 py-0.5 rounded border border-[#315B8C]/40 w-fit">
            JUPITER // 5.20 AU
          </div>
        </div>
      </motion.div>

      {/* TERRA & MOON (Earth — Lower-Left Flank) */}
      <motion.div
        style={{ y: earthY, x: earthX }}
        className="absolute top-[68%] left-[6%] sm:left-[8%] md:left-[10%] will-change-transform pointer-events-none"
      >
        <div className="relative flex flex-col items-start">
          <div className="relative">
            <svg className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-[0_0_18px_rgba(49,91,140,0.5)]" viewBox="0 0 70 70">
              <circle cx="35" cy="35" r="30" fill="url(#earthGrad)" />
              {/* Continent Swirls in Cream */}
              <path
                d="M 24,18 Q 32,22 38,16 Q 44,22 46,30 Q 38,36 32,32 Q 22,34 24,18 Z"
                fill="#F5EBDD"
                opacity="0.45"
              />
              <circle cx="35" cy="35" r="30" stroke="#315B8C" strokeWidth="1.2" fill="none" opacity="0.75" />
            </svg>
            {/* Orbiting Moon */}
            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#F5EBDD] shadow-[0_0_5px_#F5EBDD]" />
          </div>
          <div className="font-mono text-[7.5px] tracking-wider text-[#F5EBDD]/70 bg-[#121014]/90 px-1.5 py-0.5 rounded border border-[#315B8C]/40 w-fit mt-1">
            TERRA // 1.00 AU
          </div>
        </div>
      </motion.div>

      {/* URANUS / OUTER CELESTIAL BODY (Bottom-Right Flank) */}
      <div className="absolute bottom-[8%] right-[8%] opacity-55 hidden md:block pointer-events-none">
        <svg className="w-14 h-14" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="20" fill="#315B8C" />
          <ellipse cx="40" cy="40" rx="32" ry="6" fill="none" stroke="#F5EBDD" strokeWidth="1" strokeDasharray="3 5" transform="rotate(82 40 40)" opacity="0.6" />
        </svg>
        <div className="font-mono text-[7.5px] text-[#315B8C] bg-[#121014]/90 px-1.5 py-0.5 rounded border border-[#315B8C]/30 w-fit mt-0.5">
          URANUS // 19.2 AU
        </div>
      </div>

      {/* 8. RETRO-PUNK TELEMETRY STATUS MARGINS */}
      <div className="absolute top-4 left-6 hidden xl:flex items-center gap-2 font-mono text-[9px] tracking-widest text-[#F5EBDD]/40 uppercase select-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F2765E] animate-ping" />
        <span>SOLAR SYSTEM CELESTIAL MAP // PARALLAX DEPTH: 1.00 - 19.2 AU</span>
      </div>

      <div className="absolute bottom-4 right-6 hidden xl:flex items-center gap-2 font-mono text-[9px] tracking-widest text-[#F5EBDD]/40 uppercase select-none">
        <span>ORBITAL PARALLAX: ACTIVE // HARDWARE ACCELERATED</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#315B8C]" />
      </div>
    </div>
  );
}
