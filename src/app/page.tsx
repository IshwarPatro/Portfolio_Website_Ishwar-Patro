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
  Sparkles,
  Terminal,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { portfolioConfig } from "@/config/portfolio.config";

interface ToastItem {
  id: number;
  message: string;
}

interface CliHistoryItem {
  type: "cmd" | "output" | "error";
  text: string;
}

export default function Home() {
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
            "AVAILABLE COMMANDS:\n  skills     - Print compiled engineering capabilities (Languages & Frameworks)\n  projects   - List production enterprise highlights (11 verified systems)\n  telemetry  - Query active system status & runtime metrics\n  whoami     - Inspect engineer identity & clearance level\n  contact    - Display transmission frequency link\n  clear      - Clear terminal scrollback buffer",
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
            "// 11 FEATURED PRODUCTION SYSTEMS:\n1. Achivr LMS & Social Engine (Full-stack Flutter + Node.js + MongoDB)\n2. Dell Retail Media Network (Edge Tabletop Standee IoT Platform)\n3. her.store (Zero-loss Shopify HMAC Cryptographic Pipeline)\n4. Lenovo Partner Lead NLP Router (Automated Sentiment & Contract Routing)\n5. Numaish Exhibition App (Commercial Fair Commerce & Payment Gateway)\n6. FamilyCentral (Family Office Encrypted Vault Storage)\n7. CX9 Architecture (Unified Modular Multi-Product Engine)\n8. Acer RMN & HC Retail (Microsoft Store Certified MSIX Packaging)\n9. Dell LMS (Lead Management System, Flutter 3.47)\n10. Autodev-Codex AI Engine (Autonomous Coding Agent Loop)\n11. Computer Vision Verification (Python / OpenCV)",
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
      <main className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-36 pb-36 space-y-28 sm:space-y-40">
        {/* =========================================================================
             SECTION 01: HERO & IDENTITY (#hero)
             ========================================================================= */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Hero Identity & Bio */}
            <div className="lg:col-span-7 space-y-6">
              {/* System Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/35 bg-red-950/60 text-red-300 text-[11px] sm:text-xs font-mono-code tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(255,80,56,0.25)]">
                <span className="w-2 h-2 rounded-full bg-red-500 beacon-active" />
                <span className="truncate">CELESTIAL SYSTEM ONLINE {"//"} OPEN TO SDE ROLES</span>
              </div>

              {/* Main Name Title */}
              <div className="space-y-1">
                <div className="text-xs font-mono-code text-red-400 flex items-center gap-2">
                  <span>&gt;_</span> SOFTWARE_ENGINEER {"//"} ORBITAL_NODE
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
              <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed bg-black/60 p-4 sm:p-5 rounded-xl border border-white/10 backdrop-blur-md shadow-lg max-w-xl">
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
                  className="w-full sm:w-auto justify-center px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium text-xs sm:text-sm shadow-[0_0_25px_rgba(255,80,56,0.4)] transition-all flex items-center gap-2"
                >
                  <span>Explore 11 Professional Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleResumeDownload}
                  type="button"
                  className="w-full sm:w-auto justify-center px-4 sm:px-5 py-3 rounded-xl border border-white/15 hover:border-white/35 bg-white/5 hover:bg-white/10 text-slate-200 font-mono-code text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </button>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <a
                    href="https://github.com/IshwarPatro"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all flex-1 sm:flex-none flex justify-center"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ishwar-patro-0b3a8b210/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all flex-1 sm:flex-none flex justify-center"
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
              <span>CORE COMPILED PROFICIENCIES (INTERVIEW-READY)</span>
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
             SECTION 03: ENTERPRISE MISSIONS & DEPLOYMENTS (#projects)
             ========================================================================= */}
        <section id="projects" className="min-h-[80vh] flex flex-col justify-center scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="text-xs font-mono-code text-red-400 tracking-widest uppercase mb-2">
                {"// 02. FLIGHT WAYPOINT: PRODUCTION ARCHIVES"}
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white font-heading">
                Enterprise Missions &amp; Deployments
              </h2>
            </div>
            <p className="text-xs font-mono-code text-slate-400 mt-2 md:mt-0">
              11 VERIFIED PRODUCTION RELEASES &amp; ARCHITECTURES
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {portfolioConfig.projects.map((proj, idx) => (
              <div
                key={proj.id}
                className="cyber-panel rounded-2xl p-6 sm:p-8 border border-white/15 hover:border-red-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono-code">
                    <span className="text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded border border-red-500/25">
                      MISSION_0{idx + 1} {"//"} {proj.category.toUpperCase()}
                    </span>
                    <span className="text-slate-400">{proj.status.toUpperCase()}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors mb-3 font-heading">
                    {proj.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {proj.description}
                  </p>

                  {/* Architecture bullet highlights */}
                  <div className="space-y-1.5 mb-5 text-[11px] font-mono-code text-slate-300">
                    {proj.architectureDetails.slice(0, 2).map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-red-400 font-bold">›</span>
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono-code text-slate-200 mb-5">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-white/5 rounded border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[11px] font-mono-code text-slate-400">
                  <span className="truncate max-w-[65%]">
                    {proj.impactMetrics[0] || "ENTERPRISE GRADE"}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>VIEW STORE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
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
                className="p-4 sm:p-5 font-mono-code text-xs space-y-2 text-slate-200 min-h-[240px] max-h-[320px] overflow-y-auto terminal-scroll bg-[#060911]/95 whitespace-pre-wrap leading-relaxed"
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
                className="p-3 bg-black/90 border-t border-white/10 flex items-center gap-2 font-mono-code text-xs"
              >
                <span className="text-emerald-400 font-bold">&gt;</span>
                <input
                  type="text"
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="Type command here (e.g. skills, projects, telemetry)..."
                  className="w-full bg-transparent text-white focus:outline-none placeholder-slate-500 text-xs"
                />
                <button
                  type="submit"
                  className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-[11px] transition-colors shrink-0"
                >
                  EXEC
                </button>
              </form>

              {/* Quick access pills */}
              <div className="px-4 py-2 bg-slate-950/80 border-t border-white/5 flex flex-wrap gap-2 text-[10px] font-mono-code text-slate-400">
                <span>QUICK ACCESS:</span>
                {["skills", "projects", "telemetry", "whoami", "contact", "clear"].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => executeCli(cmd)}
                    className="hover:text-emerald-400 underline"
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
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono-code text-slate-500 gap-2">
              <span>COORDINATES: LAT 12.9716° N / LON 77.5946° E</span>
              <span className="text-slate-400">© 2026 ISHWAR PATRO {"//"} KOWLOON CELESTIAL NODE</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
