"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Binary,
  Boxes,
  CheckCircle2,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
  Network,
  Radio,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { portfolioConfig, ProjectItem } from "@/config/portfolio.config";

interface ToastItem {
  id: number;
  message: string;
}

interface CliHistoryItem {
  type: "cmd" | "output" | "error";
  text: string;
}


interface ProjectSchematicProps {
  proj: ProjectItem;
}

function ProjectSchematicFrame({ proj }: ProjectSchematicProps) {
  const isPersonal = proj.isPersonal;

  if (proj.id === "ip-forge-autonomous-agent") {
    return (
      <div className="relative w-full rounded-xl overflow-hidden mb-6 border border-amber-500/40 bg-gradient-to-br from-[#120e1f] via-[#090b16] to-[#0b1424] p-4 sm:p-5 flex flex-col justify-between group-hover:scale-[1.01] transform-gpu transition-all duration-500 shadow-inner">
        {/* Top Spec Bar */}
        <div className="flex flex-wrap items-center justify-between text-[11px] font-mono-code text-amber-300/90 mb-4 pb-2.5 border-b border-amber-500/20 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-bold tracking-widest text-amber-200 uppercase">
              AUTONOMOUS ARCHITECTURE // 6-AGENT CLOSED SDLC
            </span>
          </div>
          <span className="text-[10px] tracking-wider font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300">
            ≤ 3 SELF-HEALING DIAGNOSTIC CYCLES
          </span>
        </div>

        {/* Center: 6 Federated Agent Personas Flow */}
        <div className="py-2">
          <div className="text-[10px] font-mono-code text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <Workflow className="w-3.5 h-3.5 text-amber-400" />
            <span>FEDERATED MULTI-AGENT EXECUTION PIPELINE:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { role: "1. PLANNER", desc: "Decomposes PRD", color: "border-sky-500/40 text-sky-300 bg-sky-950/40" },
              { role: "2. ARCHITECT", desc: "AST Symbols RAG", color: "border-purple-500/40 text-purple-300 bg-purple-950/40" },
              { role: "3. CODER", desc: "MCP Sandboxing", color: "border-emerald-500/40 text-emerald-300 bg-emerald-950/40" },
              { role: "4. TESTER", desc: "Pytest Subprocess", color: "border-amber-500/40 text-amber-300 bg-amber-950/40" },
              { role: "5. DEBUGGER", desc: "Delta Healing", color: "border-rose-500/40 text-rose-300 bg-rose-950/40" },
              { role: "6. REVIEWER", desc: "HitL Governance", color: "border-cyan-500/40 text-cyan-300 bg-cyan-950/40" },
            ].map((agent, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg border ${agent.color} flex flex-col justify-between text-left`}
              >
                <span className="text-[10px] font-mono-code font-bold tracking-wide">{agent.role}</span>
                <span className="text-[9px] font-mono-code text-slate-400 truncate">{agent.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware & Diff Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-amber-500/20 text-[11px] font-mono-code mt-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>COMPUTE: Apple M4 Edge (24GB) ⇄ AMD Instinct™ MI300X (ROCm 6.2)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              +348 ADDITIONS
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
              -64 REMOVALS
            </span>
            <span className="text-[10px] text-amber-300/80 font-bold">100% PYTEST PASS</span>
          </div>
        </div>
      </div>
    );
  }

  // Domain-specific schematic pipeline nodes
  let pipelineNodes: { label: string; sub: string; highlight?: boolean }[] = [];
  let domainBadge = "SYSTEM INTEGRATION";

  switch (proj.id) {
    case "achivr-social":
      domainBadge = "FULL-STACK // MOBILE & AWS";
      pipelineNodes = [
        { label: "Flutter Client", sub: "Responsive iOS/Android" },
        { label: "Node.js REST", sub: "Express Microservices" },
        { label: "AWS & MongoDB", sub: "S3 Storage + BSON DB", highlight: true },
      ];
      break;
    case "her-store-shopify":
      domainBadge = "DATA INGESTION // SHOPIFY BRIDGE";
      pipelineNodes = [
        { label: "Shopify Stores", sub: "Britannia & Merchants" },
        { label: "HMAC Webhook", sub: "Cryptographic SHA256", highlight: true },
        { label: "her.store Core", sub: "GraphQL Catalog Sync" },
      ];
      break;
    case "lenovo-partner-app":
      domainBadge = "ENTERPRISE ECOSYSTEM // CI/CD";
      pipelineNodes = [
        { label: "Docker Web Build", sub: "Containerized Artifacts" },
        { label: "Jenkins CI/CD", sub: "44 Production Commits", highlight: true },
        { label: "NLP Call Engine", sub: "AI Conversational Intent" },
      ];
      break;
    case "dell-lms":
      domainBadge = "LEAD MANAGEMENT // BLOC & AGP";
      pipelineNodes = [
        { label: "Walk-in Capture", sub: "Demo & Product Sales" },
        { label: "BLoC State Cache", sub: "Offline Lead Sync", highlight: true },
        { label: "Flutter 3.47.7", sub: "Gradle & Kotlin AGP" },
      ];
      break;
    case "lenovo-lms":
      domainBadge = "MULTI-CHANNEL // MOBILE & WEB";
      pipelineNodes = [
        { label: "Flutter Partner", sub: "Field Sales Mobile Client" },
        { label: "Nginx Gateway", sub: "Reverse Proxy Caching", highlight: true },
        { label: "Web LMS Portal", sub: "Corporate Lead Dashboard" },
      ];
      break;
    case "acer-rmn":
      domainBadge = "DESKTOP BRIDGE // WINDOWS MSIX";
      pipelineNodes = [
        { label: "Flutter Win32", sub: "Interactive Retail Display" },
        { label: "MSIX Packaging", sub: "Desktop Bridge Toolchain", highlight: true },
        { label: "Microsoft Store", sub: "WACK Certified Package" },
      ];
      break;
    case "hc-retail":
      domainBadge = "COMMERCIAL DESKTOP // WACK VERIFIED";
      pipelineNodes = [
        { label: "Touchscreen Kiosk", sub: "Interactive Retail UX" },
        { label: "Desktop Bridge", sub: "Sandboxed File Routing", highlight: true },
        { label: "Microsoft Store", sub: "Certified Deployment" },
      ];
      break;
    case "cx9-architecture":
      domainBadge = "ENTERPRISE // MODULAR ARCHITECTURE";
      pipelineNodes = [
        { label: "CX9 Core Layer", sub: "Auth, Routing, API Client", highlight: true },
        { label: "LMS Subsystem", sub: "Lead Management Engine" },
        { label: "Store Locator", sub: "Dynamic Tenant Module" },
      ];
      break;
    case "dell-rmn-standee":
      domainBadge = "HARDWARE RETAIL // CLOUD DISTRIBUTION";
      pipelineNodes = [
        { label: "Tabletop Display", sub: "Custom Touch UI Layouts" },
        { label: "DigitalOcean OTA", sub: "Cloud Asset Pipeline", highlight: true },
        { label: "Watchdog Engine", sub: "Automated Failure Recovery" },
      ];
      break;
    case "numaish-exhibition":
      domainBadge = "COMMERCIAL MOBILE // COMMERCE & NAV";
      pipelineNodes = [
        { label: "Fair Navigation", sub: "Interactive Stall Map" },
        { label: "Payment Gateway", sub: "In-App Commerce Flow", highlight: true },
        { label: "Push Broadcast", sub: "Live Event Engine" },
      ];
      break;
    case "family-central":
      domainBadge = "MOBILE SECURITY // DOCUMENT VAULT";
      pipelineNodes = [
        { label: "Mobile Client", sub: "Intuitive Asset Hierarchy" },
        { label: "AES-256 Vault", sub: "Encrypted Offline Storage", highlight: true },
        { label: "Private Records", sub: "Confidential Family Data" },
      ];
      break;
    case "memento-hybrid-ai":
      domainBadge = "HYBRID AI // GOOGLE HACKATHON 2026";
      pipelineNodes = [
        { label: "LiteRT-LM Edge", sub: "flutter_gemma On-Device" },
        { label: "Hybrid Task Router", sub: "Local vs Cloud Fallback", highlight: true },
        { label: "Firebase AI Logic", sub: "Gemini 3.8 Flash & Firestore" },
      ];
      break;
    case "space-arcade":
      domainBadge = "GAME LAB // FLAME 2D ENGINE";
      pipelineNodes = [
        { label: "Flame 2D Engine", sub: "60 FPS Game Loop Timing" },
        { label: "Entity System", sub: "Multi-Wave Boss Encounters", highlight: true },
        { label: "Local Persistence", sub: "SharedPreferences High-Scores" },
      ];
      break;
    case "ttod-wellness":
      domainBadge = "HEALTHTECH // PRIVACY-FIRST";
      pipelineNodes = [
        { label: "Reactive BLoC", sub: "Unidirectional State Flow" },
        { label: "fpdart Either", sub: "Functional Error Monad", highlight: true },
        { label: "Hive AES Storage", sub: "Zero-Cloud Local DB" },
      ];
      break;
    default:
      domainBadge = "VERIFIED SYSTEM ARCHITECTURE";
      pipelineNodes = [
        { label: "Client Frontend", sub: "Cross-Platform" },
        { label: "Application Logic", sub: "Deterministic State", highlight: true },
        { label: "Storage & APIs", sub: "Cloud Persistence" },
      ];
  }

  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden mb-6 border ${
        isPersonal ? "border-amber-500/30 bg-[#090c18]" : "border-white/10 bg-[#060814]"
      } group-hover:border-white/25 transition-all duration-500 p-4 sm:p-5 flex flex-col justify-between group-hover:scale-[1.01] transform-gpu shadow-inner`}
    >
      {/* Top Schematic Status Bar */}
      <div className="flex flex-wrap items-center justify-between text-[11px] font-mono-code text-slate-400 mb-3 border-b border-white/5 pb-2.5 gap-2">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${isPersonal ? "bg-amber-400" : "bg-red-400"} animate-pulse`}
          />
          <span className="font-semibold tracking-wider text-slate-300">
            {`SYS_SPEC // ${proj.id.toUpperCase().replace(/-/g, "_")}`}
          </span>
        </div>
        <span
          className={`text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded font-semibold ${
            isPersonal
              ? "bg-amber-500/15 border border-amber-500/30 text-amber-300"
              : "bg-red-500/10 border border-red-500/25 text-red-400"
          }`}
        >
          {domainBadge}
        </span>
      </div>

      {/* Schematic Pipeline Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 py-2.5">
        {pipelineNodes.map((node, nIdx) => (
          <div
            key={nIdx}
            className={`p-2.5 rounded-lg border text-left transition-colors ${
              node.highlight
                ? isPersonal
                  ? "bg-amber-500/15 border-amber-500/40 text-amber-200"
                  : "bg-red-500/15 border-red-500/40 text-red-200"
                : "bg-white/[0.03] border-white/10 text-slate-300"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono-code font-bold tracking-tight">
                {node.label}
              </span>
              <span className="text-[10px] font-mono-code text-slate-400">
                {`0${nIdx + 1}`}
              </span>
            </div>
            <p className="text-[10px] font-mono-code text-slate-400 truncate leading-tight">
              {node.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-white/5 text-[10px] font-mono-code text-slate-400 mt-2">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-emerald-400" />
          <span className="text-slate-300 font-medium">RUNTIME STATUS: VERIFIED</span>
        </div>
        <span className="text-slate-400 truncate max-w-[220px]">
          {proj.tags.slice(0, 3).join(" · ")}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  // Project category filter state (Mirelle Cyber-Editorial)
  const [projectFilter, setProjectFilter] = useState<"all" | "company" | "personal">("all");

  // Toast notifications
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const toastIdRef = useRef(0);

  const showToast = (message: string) => {
    const id = ++toastIdRef.current;
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  // Dynamic role rotator
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const roles = [
    "Full-Stack Developer",
    "Flutter & Mobile Specialist",
    "Backend & Distributed Systems",
    "System Design & Architecture",
    "AI Systems Builder",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Telemetry Console tab state
  const [telemetryTab, setTelemetryTab] = useState<"logs" | "stack" | "arch">("logs");
  const [telemetryLatency, setTelemetryLatency] = useState("0.14");
  const [logs, setLogs] = useState([
    { time: "[00:01.04]", tag: "INIT", color: "text-cyan-400", msg: "Initializing Enterprise Runtime & Telemetry..." },
    { time: "[00:01.32]", tag: "AUTH", color: "text-purple-400", msg: "Microsoft Store WACK: MSIX packaging verified" },
    { time: "[00:02.15]", tag: "CORE", color: "text-red-400", msg: "Achivr & LMS: Multi-tenant lead & social architecture active" },
    { time: "[00:02.52]", tag: "DIST", color: "text-amber-400", msg: "Dell RMN: Tabletop standee local cloud distribution online" },
    { time: "[00:02.88]", tag: "PIPE", color: "text-sky-400", msg: "her.store / Shopify HMAC webhook bridge online" },
    { time: "[00:03.40]", tag: "FLOW", color: "text-yellow-400", msg: "Lenovo Partner: Lead management & NLP analysis active" },
    { time: "[00:03.95]", tag: "SUCCESS", color: "text-emerald-400", msg: "All enterprise integration health checks passed (0 errors)" },
  ]);

  // Dynamic log streamer
  useEffect(() => {
    const pool = [
      { tag: "CACHE", color: "text-sky-400", msg: "Redis warm cache hits: 99.4% (8.2k ops/sec)" },
      { tag: "HEARTBEAT", color: "text-emerald-400", msg: "Edge Standee ping acknowledged by cloud gateway" },
      { tag: "VECTOR", color: "text-purple-400", msg: "Pinecone index synced: 14,200 embeddings" },
      { tag: "MSIX", color: "text-amber-400", msg: "WACK certified manifest signature validated" },
      { tag: "HMAC", color: "text-red-400", msg: "Shopify cryptographic webhook verified [status: 200]" },
      { tag: "ROUTER", color: "text-cyan-400", msg: "NLP intent classifier latency: 142ms (<180ms threshold)" },
    ];

    const interval = setInterval(() => {
      const item = pool[Math.floor(Math.random() * pool.length)];
      const now = new Date();
      const timeStr = `[00:${now.getSeconds() < 10 ? "0" : ""}${now.getSeconds()}.${Math.floor(
        now.getMilliseconds() / 10
      )}]`;

      setLogs((prev) => {
        const next = [...prev, { time: timeStr, tag: item.tag, color: item.color, msg: item.msg }];
        if (next.length > 12) return next.slice(next.length - 12);
        return next;
      });

      setTelemetryLatency((0.12 + Math.random() * 0.05).toFixed(2));
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  // Interactive Cyber CLI Terminal
  const [cliInput, setCliInput] = useState("");
  const [cliHistory, setCliHistory] = useState<CliHistoryItem[]>([
    {
      type: "output",
      text: "Welcome to Ishwar Patro's Cyber Shell [Version 3.4.1-prod]\nConnected to Megacity Gateway Hub. Type 'help' to view available system routines.",
    },
  ]);
  const cliOutputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cliOutputRef.current) {
      cliOutputRef.current.scrollTop = cliOutputRef.current.scrollHeight;
    }
  }, [cliHistory]);

  const executeCli = (cmdRaw: string) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: CliHistoryItem[] = [
      ...cliHistory,
      { type: "cmd", text: `ishwar@megacity:~$ ${cmdRaw}` },
    ];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text:
            "AVAILABLE COMMANDS:\n  skills     - Print compiled engineering capabilities (Languages & Frameworks)\n  projects   - List 15 verified engineering systems (11 Enterprise + 4 Personal)\n  telemetry  - Query active system status & runtime metrics\n  whoami     - Inspect engineer identity & clearance level\n  contact    - Display transmission frequency link\n  clear      - Clear terminal scrollback buffer",
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text:
            "// TECH MATRIX:\n• Core Languages: JavaScript, Python, Dart, SQL, C\n• Frameworks: Node.js, Next.js, React, GraphQL, Flutter\n• Databases & Cloud: PostgreSQL, Redis, MongoDB, Docker, Git, GCP, Firebase\n• Architecture: Multi-Tenant Architecture, Shopify HMAC Webhooks, MSIX Packaging",
        });
        break;
      case "projects":
        newHistory.push({
          type: "output",
          text:
            "// 11 VERIFIED ENTERPRISE & COMPANY DEPLOYMENTS:\n1. Achivr LMS & Social Engine (Full-stack Flutter + Node.js + MongoDB)\n2. her.store (Zero-loss Shopify HMAC Cryptographic Pipeline)\n3. Lenovo Partner Lead NLP Router (Automated Sentiment & Contract Routing)\n4. Dell LMS (Field Lead Management Enterprise App, Flutter 3.47)\n5. Lenovo LMS (Enterprise Partner Management Platform)\n6. Acer RMN (Dual-Screen Microsoft Store Certified MSIX Packaging)\n7. HC Retail (In-Store Experience & Retail Workflow Engine)\n8. CX9 Architecture (Unified Modular Multi-Product Engine)\n9. Dell RMN Standee (Edge Tabletop Interactive IoT Media System)\n10. Numaish Exhibition App (Commercial Fair Commerce & Payment Gateway)\n11. FamilyCentral (Family Office Encrypted Private Vault Storage)\n\n// PERSONAL PROJECTS & AUTONOMOUS R&D:\n★ [PERSONAL FLAGSHIP] IP FORGE — Autonomous Self-Healing Multi-Agent SDLC Agency (AST RAG, ChromaDB, AMD Instinct MI300X & Apple M4)\n   Repository: https://github.com/IshwarPatro/IP-FORGE\n★ [PERSONAL PROJECT] Memento — Offline-First Hybrid AI Investigation Canvas (Google #BuildHybridAI 2026, LiteRT-LM, Gemini 3.8 Flash, Firebase)\n   Live Web App: https://memento-hybrid-ai-2026.web.app\n   Repository: https://github.com/IshwarPatro/Memento\n   Android APK: https://github.com/IshwarPatro/Memento/releases/latest\n★ [PERSONAL PROJECT] Space Arcade — Vertical Retro-Pixel Spacecraft Shooter (Flame 2D Engine & Flutter)\n   Repository: https://github.com/IshwarPatro/space_arcade\n★ [PERSONAL PROJECT] TTOD (That Time of Day) — Privacy-First Wellness & Cycle Tracker (Flutter, BLoC & Hive)\n   Repository: https://github.com/IshwarPatro/TTOD",
        });
        break;
      case "telemetry":
        newHistory.push({
          type: "output",
          text: `STATUS: ONLINE | SANDBOX: VERIFIED\nSYS_ID: IP-7F9B2 | LATENCY: ${telemetryLatency}ms | UPTIME: 99.98%\nLOCATION: Bangalore, India`,
        });
        break;
      case "whoami":
        newHistory.push({
          type: "output",
          text:
            "Ishwar Patro — Software Engineer & AI Systems Builder (3+ years experience)\nProfessional Experience: Hash Connect Integrated Services & SMBXL Pvt Ltd\nEducation: B.Tech in CSE, NIST Berhampur (2018–2022)\nOpen for SDE-2, Senior Backend, Full-Stack & Distributed Systems Roles.",
        });
        break;
      case "contact":
        newHistory.push({
          type: "output",
          text:
            "TRANSMISSION FREQUENCY: ishwarpatro000@gmail.com\nLinkedIn: https://www.linkedin.com/in/ishwar-patro-0b3a8b210/\nGitHub: https://github.com/IshwarPatro",
        });
        break;
      case "clear":
        setCliHistory([]);
        setCliInput("");
        return;
      default:
        newHistory.push({
          type: "error",
          text: `zsh: command not found: ${cmdRaw}. Type 'help' for available commands.`,
        });
        break;
    }

    setCliHistory(newHistory);
    setCliInput("");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ishwarpatro000@gmail.com");
    showToast("TRANSMISSION ADDRESS COPIED: ishwarpatro000@gmail.com");
  };

  const handleResumeDownload = () => {
    showToast("INITIALIZING RESUME DOWNLOAD PACKET...");
    const link = document.createElement("a");
    link.href = "/Ishwar_Patro_Resume.pdf";
    link.download = "Ishwar_Patro_Software_Engineer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* ================= TOAST NOTIFICATION CONTAINER ================= */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col gap-2 items-center">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="px-4 py-2.5 rounded-xl bg-slate-900/95 border border-red-500/40 text-slate-200 text-xs font-mono-code shadow-2xl flex items-center gap-2 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-red-400 beacon-active" />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <main className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-28 sm:pt-36 pb-36 space-y-28 sm:space-y-40">
        {/* =========================================================================
             SECTION 01: HERO & IDENTITY (#hero)
             ========================================================================= */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Hero Identity & Bio */}
            <div className="lg:col-span-7 space-y-6">
              {/* System Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/35 bg-black/80 text-amber-300 text-[11px] sm:text-xs font-mono-code tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <span className="w-2 h-2 rounded-full bg-amber-400 beacon-active" />
                <span className="truncate">NOCTURNAL RUNTIME ONLINE {"//"} SDE &amp; SYSTEMS ARCHITECT</span>
              </div>

              {/* Main Name Title */}
              <div className="space-y-1">
                <div className="text-xs font-mono-code text-amber-400/90 flex items-center gap-2">
                  <span>&gt;_</span> SOFTWARE_ENGINEER {"//"} NEO_NOIR_SYSTEMS
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-none font-heading drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
                  .Ishwar<br />
                  <span className="text-slate-100">Patro</span>
                  <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 ml-1.5 shadow-[0_0_15px_#ff5038]" />
                </h1>
                <div className="w-24 sm:w-28 h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-transparent rounded-full my-3" />
              </div>

              {/* Headline with Dynamic Role Rotator */}
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium text-slate-100 flex flex-wrap items-center gap-2 drop-shadow-md min-h-[36px]">
                <span>Engineering</span>
                <span className="text-red-400 font-bold glow-coral transition-all duration-300">
                  {roles[currentRoleIdx]}
                </span>
              </div>

              {/* Biography Description inside Dark Glass Panel (Guarantees Mobile Readability) */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed bg-black/60 p-4 sm:p-5 rounded-xl border border-white/10 backdrop-blur-md shadow-lg max-w-xl">
                Software Engineer with 3+ years of experience engineering production-ready applications,
                cross-platform Flutter systems, scalable Node.js backend services, and high-scale enterprise integrations.
              </p>

              {/* Core Specializations Pills (Balanced Full-Stack, Mobile, Backend & AI) */}
              <div className="flex flex-wrap gap-2 pt-1">
                <div className="cyber-badge px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono-code text-slate-200 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Full-Stack &amp; Flutter Mobile</span>
                </div>
                <div className="cyber-badge px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono-code text-slate-200 flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Backend &amp; System Design</span>
                </div>
                <div className="cyber-badge px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono-code text-slate-200 flex items-center gap-2">
                  <Network className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Distributed Systems &amp; Reliability</span>
                </div>
                <div className="cyber-badge px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono-code text-slate-200 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>AI &amp; Agentic Workflows</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="w-full sm:w-auto min-h-[44px] justify-center px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium text-xs sm:text-sm shadow-[0_0_25px_rgba(255,80,56,0.4)] transition-all flex items-center gap-2"
                >
                  <span>Explore 15 Engineering Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleResumeDownload}
                  type="button"
                  className="w-full sm:w-auto min-h-[44px] justify-center px-4 sm:px-5 py-3 rounded-xl border border-white/15 hover:border-white/35 bg-white/5 hover:bg-white/10 text-slate-200 font-mono-code text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </button>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <a
                    href="https://github.com/IshwarPatro"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 min-w-[44px] min-h-[44px] rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all flex-1 sm:flex-none flex items-center justify-center"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ishwar-patro-0b3a8b210/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 min-w-[44px] min-h-[44px] rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all flex-1 sm:flex-none flex items-center justify-center"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Telemetry Console Node Window */}
            <div className="lg:col-span-5 w-full">
              <div className="cyber-panel cyber-panel-accent rounded-2xl overflow-hidden shadow-2xl">
                {/* Titlebar */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900/95 border-b border-white/10 font-mono-code text-xs">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block shadow-[0_0_8px_#ff5038]" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-slate-200 ml-1.5 sm:ml-2 font-semibold text-[10px] sm:text-[11px] tracking-wide truncate max-w-[170px] sm:max-w-none">
                      TELEMETRY_NODE :: ISHWAR_PATRO.sys
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-red-400 text-[10px] font-bold shrink-0">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Tabs Selection */}
                <div className="flex border-b border-white/10 bg-black/75 text-[10px] sm:text-[11px] font-mono-code">
                  <button
                    type="button"
                    onClick={() => setTelemetryTab("logs")}
                    className={`flex-1 text-center px-2 sm:px-4 py-2.5 transition-all font-semibold ${
                      telemetryTab === "logs"
                        ? "border-b-2 border-red-500 text-red-400 bg-red-500/15"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    [1] AGENT LOG
                  </button>
                  <button
                    type="button"
                    onClick={() => setTelemetryTab("stack")}
                    className={`flex-1 text-center px-2 sm:px-4 py-2.5 transition-all font-semibold ${
                      telemetryTab === "stack"
                        ? "border-b-2 border-red-500 text-red-400 bg-red-500/15"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    [2] CORE STACK
                  </button>
                  <button
                    type="button"
                    onClick={() => setTelemetryTab("arch")}
                    className={`flex-1 text-center px-2 sm:px-4 py-2.5 transition-all font-semibold ${
                      telemetryTab === "arch"
                        ? "border-b-2 border-red-500 text-red-400 bg-red-500/15"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    [3] ARCH
                  </button>
                </div>

                {/* Tab Content: [1] AGENT LOG */}
                {telemetryTab === "logs" && (
                  <div className="p-4 sm:p-5 font-mono-code text-xs space-y-2 text-slate-200 leading-relaxed bg-[#0a0d16]/95 min-h-[320px] max-h-[360px] overflow-y-auto terminal-scroll">
                    <p className="text-cyan-400 font-bold tracking-wide">{"// ENTERPRISE PRODUCTION RUNTIME"}</p>
                    <p className="text-slate-400 text-[10px]">&gt; target: enterprise_distribution_pipeline</p>

                    <div className="space-y-1.5 pt-2 text-[11px]">
                      {logs.map((log, idx) => (
                        <div key={idx} className="leading-tight">
                          <span className="text-slate-500">{log.time}</span>{" "}
                          <span className={`${log.color} font-bold`}>{log.tag}</span> {log.msg}
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 mt-3">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> HEARTBEAT: STABLE
                      </span>
                      <span className="text-red-400 font-bold">LATENCY: {telemetryLatency}ms</span>
                    </div>
                  </div>
                )}

                {/* Tab Content: [2] CORE STACK */}
                {telemetryTab === "stack" && (
                  <div className="p-4 sm:p-5 font-mono-code text-xs space-y-2.5 bg-[#0a0d16]/95 min-h-[320px] text-slate-200">
                    <p className="text-cyan-400 font-bold">{"// COMPILED RUNTIME DEPENDENCIES"}</p>
                    <div className="space-y-2 text-[11px] pt-1">
                      <div className="p-2.5 rounded bg-white/5 border border-white/10 flex justify-between items-center">
                        <span className="text-amber-400 font-semibold">CORE LANGUAGES:</span>
                        <span className="text-right">JavaScript, Python, Dart, SQL, C</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/10 flex justify-between items-center">
                        <span className="text-sky-400 font-semibold">FRAMEWORKS:</span>
                        <span className="text-right">Node.js, Next.js, React, GraphQL, Flutter</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/10 flex justify-between items-center">
                        <span className="text-emerald-400 font-semibold">DATA &amp; INFRA:</span>
                        <span className="text-right">PostgreSQL, Redis, Docker, GCP, Firebase</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/5 border border-white/10 flex justify-between items-center">
                        <span className="text-purple-400 font-semibold">ENTERPRISE:</span>
                        <span className="text-right">MSIX Packaging, WACK, Shopify HMAC</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content: [3] SYSTEM ARCH */}
                {telemetryTab === "arch" && (
                  <div className="p-4 sm:p-5 font-mono-code text-xs space-y-3 bg-[#0a0d16]/95 min-h-[320px] text-slate-200">
                    <p className="text-cyan-400 font-bold">{"// HIGH-AVAILABILITY TOPOLOGY"}</p>
                    <div className="p-3 rounded bg-black/60 border border-white/10 text-[11px] leading-relaxed text-slate-300 font-mono">
                      [Client App / Mobile Standee]<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;│ (Zero-Trust HMAC / SSL Mutual)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;▼<br />
                      [API Gateway &amp; Rate-Limiting Envoy]<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;├──&gt; [Multi-Tenant Microservices]<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;├──&gt; [Vector Pipeline / Semantic Search]<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;└──&gt; [Event Stream -&gt; Worker Pool]
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="px-4 py-2.5 bg-slate-950 border-t border-white/10 text-[10px] font-mono-code text-slate-400 flex justify-between items-center">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> SANDBOX: VERIFIED
                  </span>
                  <span className="text-slate-400">SYS_ID: IP-7F9B2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Descent Prompt */}
          <div className="flex flex-col items-center justify-center pt-16 sm:pt-20 text-center">
            <a
              href="#stack"
              className="inline-flex flex-col items-center gap-2 text-slate-400 hover:text-red-400 text-xs font-mono-code transition-colors group"
            >
              <span className="tracking-widest uppercase text-[9px] sm:text-[10px] text-slate-400 group-hover:text-red-400 transition-colors">
                DESCENT INTO RUNTIME MATRIX &amp; CAPABILITIES
              </span>
              <div className="w-6 h-10 rounded-full border border-white/20 group-hover:border-red-500/60 flex items-start justify-center p-1 transition-all">
                <div className="w-1.5 h-2 bg-red-400 rounded-full animate-bounce" />
              </div>
            </a>
          </div>
        </section>

        {/* =========================================================================
             SECTION 02: STACK / TECH MATRIX (#stack)
             ========================================================================= */}
        <section id="stack" className="min-h-[80vh] flex flex-col justify-center scroll-mt-28">
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono-code text-cyan-400 tracking-widest uppercase mb-2">
              {"// 01. NAVIGATION SECTOR: CORE COMPETENCIES & RUNTIME MATRIX"}
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Full-Stack, Mobile (Flutter), Backend &amp; System Design
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-black/50 p-4 rounded-xl border border-white/10 backdrop-blur-md">
              Bridging high-availability cloud microservices, reactive cross-platform Flutter runtimes,
              high-throughput API bridges, and deterministic AI systems. Built with architectural rigor and end-to-end telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Module 1: Full-Stack & Mobile (Flutter Specialist) */}
            <div className="cyber-panel p-6 sm:p-7 rounded-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading">
                Mobile &amp; Full-Stack (Flutter)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Production Flutter mobile apps, Next.js / React web frontends, GraphQL integrations, state management,
                and Microsoft Store WACK-certified desktop packaging (MSIX).
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono-code text-slate-300 pt-4 border-t border-white/10">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Flutter</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Dart</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Next.js</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">React</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">GraphQL</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">MSIX / WACK</span>
              </div>
            </div>

            {/* Module 2: Backend & System Design */}
            <div className="cyber-panel p-6 sm:p-7 rounded-2xl relative overflow-hidden group hover:border-red-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-5 group-hover:scale-110 group-hover:bg-red-500/20 transition-all">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading">
                Backend Architecture &amp; System Design
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Constructing event-driven microservices, high-throughput database topologies (PostgreSQL, Redis, MySQL),
                idempotency layers, and zero-packet-drop Shopify HMAC webhook pipelines.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono-code text-slate-300 pt-4 border-t border-white/10">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Node.js</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Python</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">SQL</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">C</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">PostgreSQL</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Redis</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Docker</span>
              </div>
            </div>

            {/* Module 3: Distributed Systems, Cloud & AI */}
            <div className="cyber-panel p-6 sm:p-7 rounded-2xl relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading">
                Distributed Systems &amp; AI
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Fault-tolerant cloud topologies (GCP, Firebase), autonomous AI developer agents, NLP conversational routing,
                vector search retrieval (RAG), and OpenCV computer vision prototypes.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono-code text-slate-300 pt-4 border-t border-white/10">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Distributed Systems</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">GCP / Firebase</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">LangChain</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">FastAPI</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">OpenCV</span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">RAG</span>
              </div>
            </div>
          </div>

          {/* Visual Verified Skills Table */}
          <div className="cyber-panel p-6 sm:p-8 rounded-2xl border border-white/15">
            <h3 className="text-base sm:text-lg font-bold text-white font-mono-code mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>CORE COMPILED PROFICIENCIES (PRODUCTION MATRIX)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-code text-xs">
              {/* Category 1 */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <div className="text-amber-400 font-bold mb-2.5 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CORE LANGUAGES</span>
                </div>
                <div className="space-y-1.5 text-slate-300 text-[11px]">
                  {["JavaScript", "Python", "Dart", "SQL", "C"].map((lang) => (
                    <div key={lang} className="flex justify-between items-center py-1 border-b border-white/5">
                      <span>{lang}</span>
                      <span className="text-emerald-400 text-[10px]">VERIFIED</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <div className="text-sky-400 font-bold mb-2.5 flex items-center gap-1.5">
                  <Boxes className="w-3.5 h-3.5" />
                  <span>FRAMEWORKS &amp; APPS</span>
                </div>
                <div className="space-y-1.5 text-slate-300 text-[11px]">
                  {["Flutter", "Node.js", "Next.js", "React", "GraphQL"].map((fw) => (
                    <div key={fw} className="flex justify-between items-center py-1 border-b border-white/5">
                      <span>{fw}</span>
                      <span className="text-cyan-400 text-[10px]">PRODUCTION</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <div className="text-emerald-400 font-bold mb-2.5 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5" />
                  <span>CLOUD, DB &amp; TOOLING</span>
                </div>
                <div className="space-y-1.5 text-slate-300 text-[11px]">
                  {["PostgreSQL", "Redis", "MySQL", "Docker", "GCP", "Firebase", "Postman", "Nginx"].map((tool) => (
                    <div key={tool} className="flex justify-between items-center py-1 border-b border-white/5">
                      <span>{tool}</span>
                      <span className="text-purple-400 text-[10px]">DEPLOYED</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
             SECTION 03: ENGINEERING PROJECTS & DEPLOYMENTS (#projects)
             ========================================================================= */}
        <section id="projects" className="min-h-[80vh] flex flex-col justify-center scroll-mt-28 space-y-12">
          {/* Header & Mirelle-Style Cyber-Editorial Controls */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-mono-code text-red-400 tracking-widest uppercase mb-2">
                  {"// 02. FLIGHT WAYPOINT: PRODUCTION ARCHIVES & LABS"}
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white font-heading">
                  Engineering Projects &amp; Deployments
                </h2>
              </div>
              <p className="text-xs font-mono-code text-slate-400">
                15 VERIFIED SYSTEMS {"//"} 11 ENTERPRISE DEPLOYMENTS + 4 PERSONAL &amp; AI LABS
              </p>
            </div>

            {/* Mirelle-Style Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              {[
                { id: "all", label: "All Works", count: portfolioConfig.projects.length },
                {
                  id: "company",
                  label: "Enterprise & Company",
                  count: portfolioConfig.projects.filter((p) => !p.isPersonal).length,
                },
                {
                  id: "personal",
                  label: "Personal & AI Labs",
                  count: portfolioConfig.projects.filter((p) => p.isPersonal).length,
                },
              ].map((tab) => {
                const isActive = projectFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setProjectFilter(tab.id as "all" | "company" | "personal")}
                    className={`min-h-[44px] min-w-[44px] px-5 py-2.5 rounded-full inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono-code transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? "bg-white text-slate-950 font-bold border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        : "bg-white/5 text-slate-300 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.id === "company" && (
                      <span className={`w-2 h-2 rounded-full ${isActive ? "bg-red-600" : "bg-red-400"}`} />
                    )}
                    {tab.id === "personal" && (
                      <Sparkles className={`w-3.5 h-3.5 ${isActive ? "text-amber-600" : "text-amber-400"}`} />
                    )}
                    <span>{tab.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        isActive ? "bg-slate-900 text-white" : "bg-white/10 text-slate-300"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= SUBSECTION A: COMPANY & ENTERPRISE DEPLOYMENTS ================= */}
          {(projectFilter === "all" || projectFilter === "company") && (
            <div className="space-y-6">
              {projectFilter === "all" && (
                <div className="border-b border-white/10 pb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading tracking-wide">
                      Company &amp; Enterprise Deployments
                    </h3>
                    <span className="text-xs font-mono-code text-red-400 font-semibold px-2.5 py-0.5 rounded bg-red-500/10 border border-red-500/30">
                      11 Systems Live
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-slate-400">
                    Hash Connect Integrated Services &amp; SMBXL Pvt Ltd
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {portfolioConfig.projects
                  .filter((p) => !p.isPersonal)
                  .map((proj, idx) => {
                    const formattedIndex = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
                    return (
                      <div
                        key={proj.id}
                        className="cyber-panel rounded-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden p-6 sm:p-8 border border-white/15 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                      >
                        <div>
                          {/* Mirelle-Style Top Metadata Row */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10 text-xs font-mono-code">
                            <div className="flex items-center gap-2">
                              <span className="font-bold tracking-wider text-sm sm:text-base text-red-400">
                                {formattedIndex}
                              </span>
                              <span className="text-white/30">/</span>
                              <span className="px-2.5 py-0.5 rounded border text-[11px] font-semibold text-red-400 bg-red-500/10 border-red-500/25">
                                {proj.clientOrOrg || proj.category.split("·")[0].trim()}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <span className="text-[11px] tracking-wider uppercase font-medium">
                                {proj.badgeHighlight || proj.status}
                              </span>
                              <span>•</span>
                              <span className="text-slate-300 font-semibold">{proj.year || "2026"}</span>
                            </div>
                          </div>

                          {/* Visual Architecture Schematic Frame (Mirelle Media Canvas) */}
                          <ProjectSchematicFrame proj={proj} />

                          {/* Project Title */}
                          <h4 className="text-xl sm:text-2xl font-bold transition-colors mb-3 font-heading text-white group-hover:text-red-400">
                            {proj.title}
                          </h4>

                          {/* Project Description */}
                          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                            {proj.description}
                          </p>

                          {/* Architecture bullet highlights */}
                          <div className="space-y-2 mb-6 text-xs sm:text-sm font-mono-code text-slate-300">
                            {proj.architectureDetails.slice(0, 3).map((detail, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2">
                                <span className="font-bold text-red-400">›</span>
                                <span className="leading-snug">{detail}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-1.5 text-[11px] font-mono-code text-slate-200 mb-6">
                            {proj.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded border transition-colors bg-white/5 border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Action & Verification Row */}
                        <div className="pt-4 border-t border-white/10 flex flex-wrap justify-between items-center text-xs font-mono-code text-slate-400 gap-2">
                          <span className="truncate max-w-[65%] text-slate-300 font-medium">
                            {proj.impactMetrics[0] || "ENTERPRISE GRADE"}
                          </span>
                          {proj.link ? (
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noreferrer"
                              className="min-h-[44px] min-w-[44px] py-2 px-4 rounded-xl inline-flex items-center gap-2 transition-all font-semibold text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] cursor-pointer"
                            >
                              <span>
                                {proj.link.includes("play.google.com") ||
                                proj.link.includes("apps.microsoft.com") ||
                                proj.link.includes("shop")
                                  ? "VIEW STORE"
                                  : "VIEW LIVE"}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <div className="min-h-[44px] py-2 px-3 rounded-xl inline-flex items-center gap-1.5 text-[11px] font-mono-code text-slate-400 bg-white/5 border border-white/10">
                              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                              <span>ENTERPRISE CORE</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* ================= SUBSECTION B: PERSONAL PROJECTS & AUTONOMOUS R&D ================= */}
          {(projectFilter === "all" || projectFilter === "personal") && (
            <div className={`space-y-6 ${projectFilter === "all" ? "pt-6" : ""}`}>
              {projectFilter === "all" && (
                <div className="border-b border-amber-500/20 pb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading tracking-wide">
                      Personal Projects &amp; Autonomous R&amp;D
                    </h3>
                    <span className="text-xs font-mono-code text-amber-300 font-semibold px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/35">
                      4 Systems Live // Autonomous SDLC, Hybrid AI, Game Labs &amp; Health
                    </span>
                  </div>
                  <span className="text-xs font-mono-code text-amber-400/80">
                    Independent R&amp;D &amp; Open Source
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {portfolioConfig.projects
                  .filter((p) => p.isPersonal)
                  .map((proj, pIdx) => {
                    const isFeatured = proj.isFeaturedPersonal;
                    const personalIndex =
                      projectFilter === "all"
                        ? 11 + pIdx + 1
                        : pIdx + 1;
                    const formattedIndex = personalIndex < 10 ? `0${personalIndex}` : `${personalIndex}`;

                    return (
                      <div
                        key={proj.id}
                        className={`cyber-panel rounded-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                          isFeatured
                            ? "lg:col-span-2 p-6 sm:p-8 md:p-10 border-2 border-amber-500/70 hover:border-amber-400/90 shadow-[0_0_50px_rgba(245,158,11,0.22)] bg-gradient-to-br from-[#12101c] via-[#090b14] to-[#0c1422]"
                            : "p-6 sm:p-8 border border-amber-500/35 hover:border-amber-400/70 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] bg-[#090c16]/90"
                        }`}
                      >
                        {/* Featured Personal Project Corner Ribbon / Watermark */}
                        {isFeatured && (
                          <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-amber-500/35 via-amber-500/20 to-transparent border-b border-l border-amber-500/40 text-[10px] sm:text-xs font-mono-code text-amber-300 font-bold flex items-center gap-2 rounded-bl-xl shadow-lg">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                            <span>{proj.badgeHighlight || "★ PERSONAL PROJECT // FLAGSHIP AI AGENCY"}</span>
                          </div>
                        )}

                        <div>
                          {/* Mirelle-Style Top Metadata Row */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-amber-500/20 text-xs font-mono-code">
                            <div className="flex items-center gap-2">
                              <span className="font-bold tracking-wider text-sm sm:text-base text-amber-400">
                                {formattedIndex}
                              </span>
                              <span className="text-white/30">/</span>
                              <span className="px-2.5 py-0.5 rounded border text-[11px] font-semibold text-amber-300 bg-amber-500/20 border-amber-500/40 shadow-[0_0_14px_rgba(245,158,11,0.25)]">
                                {isFeatured
                                  ? `★ ${proj.clientOrOrg || "FLAGSHIP AI AGENCY"}`
                                  : proj.clientOrOrg || "PERSONAL LAB"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <span className="text-[11px] tracking-wider uppercase font-medium text-amber-400">
                                {proj.status}
                              </span>
                              <span>•</span>
                              <span className="text-amber-200 font-semibold">{proj.year || "2026"}</span>
                            </div>
                          </div>

                          {/* Visual Architecture Schematic Frame (Mirelle Media Canvas) */}
                          <ProjectSchematicFrame proj={proj} />

                          {/* Project Title */}
                          <h4
                            className={`font-bold transition-colors mb-3 font-heading text-white group-hover:text-amber-300 ${
                              isFeatured ? "text-xl sm:text-2xl md:text-3xl" : "text-xl sm:text-2xl"
                            }`}
                          >
                            {proj.title}
                          </h4>

                          {/* Description */}
                          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                            {proj.description}
                          </p>

                          {/* Architecture bullet highlights */}
                          <div
                            className={`space-y-2 mb-6 text-xs sm:text-sm font-mono-code text-slate-300 ${
                              isFeatured
                                ? "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 p-4 sm:p-5 rounded-xl bg-black/60 border border-amber-500/25 shadow-inner"
                                : ""
                            }`}
                          >
                            {proj.architectureDetails.slice(0, isFeatured ? 6 : 3).map((detail, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2">
                                <span className="font-bold text-amber-400">›</span>
                                <span className="leading-snug">{detail}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-1.5 text-[11px] font-mono-code text-slate-200 mb-6">
                            {proj.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded border transition-colors bg-amber-500/10 text-amber-200 border-amber-500/30 hover:border-amber-400/60"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Action & Verification Row */}
                        <div className="pt-4 border-t border-white/10 flex flex-wrap justify-between items-center text-xs font-mono-code text-slate-400 gap-2">
                          <span className="truncate max-w-[55%] text-amber-300 font-semibold">
                            {proj.impactMetrics[0] || "PERSONAL R&D"}
                          </span>
                          <div className="flex flex-wrap items-center gap-2">
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="min-h-[44px] min-w-[44px] py-2 px-3 rounded-xl inline-flex items-center gap-1.5 transition-all font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 cursor-pointer"
                                title="View Source Code"
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>REPO</span>
                              </a>
                            )}
                            {proj.apkUrl && (
                              <a
                                href={proj.apkUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="min-h-[44px] min-w-[44px] py-2 px-3 rounded-xl inline-flex items-center gap-1.5 transition-all font-semibold text-emerald-400 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 cursor-pointer"
                                title="Download Android Release APK"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>APK</span>
                              </a>
                            )}
                            {proj.link && (
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noreferrer"
                                className="min-h-[44px] min-w-[44px] py-2 px-4 rounded-xl inline-flex items-center gap-2 transition-all font-semibold text-amber-300 hover:text-white bg-amber-500/15 hover:bg-amber-500/30 border border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] cursor-pointer"
                              >
                                <span>
                                  {proj.link.includes(".web.app") || proj.link.includes("firebaseapp.com")
                                    ? "LIVE WEB APP"
                                    : "VIEW PROJECT REPO"}
                                </span>
                                {proj.link.includes(".web.app") ? (
                                  <ExternalLink className="w-3.5 h-3.5" />
                                ) : (
                                  <Github className="w-3.5 h-3.5" />
                                )}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </section>

        {/* =========================================================================
             SECTION 04: INTERACTIVE CYBER CLI TERMINAL (#cli)
             ========================================================================= */}
        <section id="cli" className="min-h-[70vh] flex flex-col justify-center scroll-mt-28">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono-code text-emerald-400 tracking-wider uppercase font-semibold">
                  KOWLOON_UNDERCITY_TERMINAL {"//"} DIRECT_SHELL_ACCESS
                </span>
              </div>
              <span className="text-[11px] font-mono-code text-slate-400 hidden sm:inline">
                TYPE &apos;help&apos; FOR COMMANDS
              </span>
            </div>

            <div className="cyber-panel rounded-2xl overflow-hidden border border-emerald-500/35 shadow-2xl">
              {/* Header */}
              <div className="px-4 py-2.5 bg-black/85 border-b border-white/10 flex items-center justify-between text-xs font-mono-code">
                <span className="text-slate-300">ishwar@megacity-node:~ $ /bin/sh</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Output buffer */}
              <div
                ref={cliOutputRef}
                className="p-4 sm:p-5 font-mono-code text-xs space-y-2 text-slate-200 min-h-[240px] max-h-[320px] overflow-y-auto terminal-scroll bg-[#060911]/95 whitespace-pre-wrap break-words [overflow-wrap:anywhere] leading-relaxed"
              >
                {cliHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className={
                      item.type === "cmd"
                        ? "text-cyan-400 font-bold"
                        : item.type === "error"
                        ? "text-red-400"
                        : "text-slate-300"
                    }
                  >
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Input row */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  executeCli(cliInput);
                }}
                className="p-3 bg-black/90 border-t border-white/10 flex items-center gap-2 font-mono-code text-xs min-h-[44px]"
              >
                <span className="text-emerald-400 font-bold">&gt;</span>
                <input
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="Type command here (e.g. skills, projects, telemetry)..."
                  className="w-full bg-transparent text-white focus:outline-none placeholder-slate-400 text-xs"
                />
                <button
                  type="submit"
                  className="min-h-[36px] px-3.5 py-1.5 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-[11px] transition-colors shrink-0"
                >
                  EXEC
                </button>
              </form>

              {/* Quick access pills */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-white/5 flex flex-wrap gap-2 text-[11px] font-mono-code text-slate-400 items-center">
                <span className="font-semibold text-slate-300">QUICK ACCESS:</span>
                {["skills", "projects", "telemetry", "whoami", "contact", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => executeCli(cmd)}
                    className="min-h-[32px] px-2.5 py-1 rounded-md bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-300 text-slate-300 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
             SECTION 05: TRANSMISSION FREQUENCY (#contact)
             ========================================================================= */}
        <section id="contact" className="min-h-[70vh] flex flex-col justify-center scroll-mt-28">
          <div className="cyber-panel cyber-panel-accent rounded-3xl p-6 sm:p-12 max-w-4xl mx-auto w-full relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

            <div className="text-xs font-mono-code text-red-400 tracking-widest uppercase mb-2">
              {"// 04. TRANSMISSION FREQUENCY: ESTABLISH LINK"}
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 font-heading">
              Establish Orbital Link
            </h2>
            <p className="text-slate-300 max-w-xl text-xs sm:text-base mb-6 leading-relaxed">
              Open for Software Engineering, Backend Architecture, and Distributed AI Systems builder roles. Send a
              transmission packet or connect directly.
            </p>

            {/* Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 font-mono-code text-xs">
                <div className="text-slate-400 text-[10px] mb-1">CALLSIGN / NAME</div>
                <div className="text-white font-bold text-sm">Ishwar Patro</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 font-mono-code text-xs">
                <div className="text-slate-400 text-[10px] mb-1">CURRENT CLEARANCE</div>
                <div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 beacon-active" />
                  <span>READY FOR ENTERPRISE DEPLOYMENT</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-8">
              <button
                type="button"
                onClick={() => {
                  copyEmail();
                  window.location.href = "mailto:ishwarpatro000@gmail.com?subject=Portfolio%20Transmission%20Packet";
                }}
                className="w-full sm:w-auto justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(255,80,56,0.35)] flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Packet (Email)</span>
              </button>

              <button
                type="button"
                onClick={copyEmail}
                className="w-full sm:w-auto justify-center px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-xs sm:text-sm font-mono-code transition-all flex items-center gap-2"
              >
                <Copy className="w-4 h-4 text-cyan-400" />
                <span>Copy Frequency Address</span>
              </button>
            </div>

            {/* Direct Form */}
            <div className="pt-6 border-t border-white/10">
              <ContactForm />
            </div>

            {/* Coordinates Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono-code text-slate-400 gap-2">
              <span>COORDINATES: LAT 12.9716° N / LON 77.5946° E</span>
              <span className="text-slate-300">© 2026 ISHWAR PATRO {"//"} NEO-NOIR ARCHITECTURE NODE</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
