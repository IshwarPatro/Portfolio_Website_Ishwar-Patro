"use client";

import React, { useState } from "react";
import { Terminal, ShieldCheck, Activity, Cpu, Database, Server } from "lucide-react";

const HeroImage = () => {
  const [activeTab, setActiveTab] = useState<"terminal" | "telemetry" | "architecture">("terminal");

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full max-w-lg rounded-xl border border-[#F2765E]/30 bg-[#1c1622]/90 backdrop-blur-xl shadow-[0_12px_48px_rgba(49,91,140,0.35)] overflow-hidden flex flex-col font-mono text-xs">
        {/* TERMINAL TOP BAR */}
        <div className="bg-[#291f30] px-4 py-2.5 border-b border-[#315B8C]/40 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F2765E] inline-block shadow-[0_0_8px_#F2765E]" />
            <span className="w-3 h-3 rounded-full bg-[#315B8C] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#F5EBDD]/40 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-[#F5EBDD]/90 font-semibold tracking-wider">
              TELEMETRY_NODE :: ISHWAR_PATRO.sys
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#F2765E] uppercase tracking-widest font-mono">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* SUBNAV TABS */}
        <div className="flex border-b border-[#315B8C]/30 bg-[#231a29]/80 text-[11px]">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex-1 py-2 px-3 text-center transition-all ${
              activeTab === "terminal"
                ? "text-[#F2765E] border-b-2 border-[#F2765E] bg-[#315B8C]/20 font-bold"
                : "text-[#F5EBDD]/60 hover:text-[#F5EBDD]"
            }`}
          >
            [1] AGENT LOG
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`flex-1 py-2 px-3 text-center transition-all ${
              activeTab === "telemetry"
                ? "text-[#F2765E] border-b-2 border-[#F2765E] bg-[#315B8C]/20 font-bold"
                : "text-[#F5EBDD]/60 hover:text-[#F5EBDD]"
            }`}
          >
            [2] CORE STACK
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex-1 py-2 px-3 text-center transition-all ${
              activeTab === "architecture"
                ? "text-[#F2765E] border-b-2 border-[#F2765E] bg-[#315B8C]/20 font-bold"
                : "text-[#F5EBDD]/60 hover:text-[#F5EBDD]"
            }`}
          >
            [3] SYSTEM ARCH
          </button>
        </div>

        {/* TERMINAL CONTENT BODY */}
        <div className="p-4 flex flex-col gap-3 min-h-[300px] text-[#F5EBDD]/90 font-mono text-[11.5px] leading-relaxed select-text">
          {activeTab === "terminal" && (
            <div className="flex flex-col gap-2">
              <div className="text-[#315B8C] font-semibold">{"// ENTERPRISE PRODUCTION RUNTIME"}</div>
              <div className="text-[#F5EBDD]/80">
                <span className="text-[#F2765E] font-bold">&gt;</span> target: enterprise_distribution_pipeline
              </div>
              <div className="p-2.5 rounded bg-[#121014]/90 border border-[#315B8C]/40 text-[11px] flex flex-col gap-1 text-[#F5EBDD]/90">
                <div>[00:01.04] <span className="text-[#315B8C]">INIT</span> Initializing Enterprise Runtime &amp; Telemetry...</div>
                <div>[00:01.32] <span className="text-emerald-400">AUTH</span> Microsoft Store WACK: MSIX packaging verified</div>
                <div>[00:02.15] <span className="text-[#F2765E]">CORE</span> Achivr &amp; LMS: Multi-tenant lead &amp; social architecture active</div>
                <div>[00:02.52] <span className="text-cyan-400">DIST</span> Dell RMN: Tabletop standee local cloud distribution online</div>
                <div>[00:02.88] <span className="text-[#315B8C]">PIPE</span> her.store / Shopify HMAC webhook bridge online</div>
                <div>[00:03.40] <span className="text-yellow-300">FLOW</span> Lenovo Partner: Lead management &amp; NLP analysis active</div>
                <div>[00:03.95] <span className="text-emerald-400">SUCCESS</span> All enterprise integration health checks passed (0 errors)</div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[#F5EBDD]/60 border-t border-[#315B8C]/30">
                <span>SANDBOX: VERIFIED</span>
                <span className="text-[#F2765E]">LATENCY: 0.14ms</span>
              </div>
            </div>
          )}

          {activeTab === "telemetry" && (
            <div className="flex flex-col gap-2.5">
              <div className="text-[#315B8C] font-semibold">{"// ARCHITECTURAL CAPABILITIES"}</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded bg-[#121014]/70 border border-[#315B8C]/30">
                  <div className="text-[#F2765E] font-bold text-xs uppercase">BACKEND SYSTEMS</div>
                  <div className="text-[10px] text-[#F5EBDD]/70">Node.js, REST, GraphQL, Webhooks</div>
                </div>
                <div className="p-2 rounded bg-[#121014]/70 border border-[#315B8C]/30">
                  <div className="text-[#F2765E] font-bold text-xs uppercase">CROSS-PLATFORM</div>
                  <div className="text-[10px] text-[#F5EBDD]/70">Flutter, Dart, Windows Desktop, MSIX</div>
                </div>
                <div className="p-2 rounded bg-[#121014]/70 border border-[#315B8C]/30">
                  <div className="text-[#F2765E] font-bold text-xs uppercase">DISTRIBUTED ARCH</div>
                  <div className="text-[10px] text-[#F5EBDD]/70">Fault-Tolerant Pipelines &amp; Sync</div>
                </div>
                <div className="p-2 rounded bg-[#121014]/70 border border-[#315B8C]/30">
                  <div className="text-[#F2765E] font-bold text-xs uppercase">AI AGENTS &amp; MCP</div>
                  <div className="text-[10px] text-[#F5EBDD]/70">Self-Healing Loops &amp; Sandboxes</div>
                </div>
              </div>
              <div className="text-[11px] text-[#F5EBDD]/75 pt-1">
                Engineering production-ready systems from concept to delivery, focusing on reliability and clean design.
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="flex flex-col gap-2 text-[11px]">
              <div className="text-[#315B8C] font-semibold">{"// ENGINEERING CORE STACK"}</div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between p-1.5 rounded bg-[#121014]/80 border border-[#315B8C]/30">
                  <span className="flex items-center gap-1.5 text-[#F5EBDD]">
                    <Cpu className="w-3.5 h-3.5 text-[#F2765E]" /> Mobile Systems
                  </span>
                  <span className="text-[#F2765E]">Flutter · Dart · BLoC · Desktop</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-[#121014]/80 border border-[#315B8C]/30">
                  <span className="flex items-center gap-1.5 text-[#F5EBDD]">
                    <Server className="w-3.5 h-3.5 text-[#315B8C]" /> Backend &amp; APIs
                  </span>
                  <span className="text-[#315B8C]">Node.js · REST · Shopify · GraphQL</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-[#121014]/80 border border-[#315B8C]/30">
                  <span className="flex items-center gap-1.5 text-[#F5EBDD]">
                    <Terminal className="w-3.5 h-3.5 text-[#F2765E]" /> AI Agents
                  </span>
                  <span className="text-[#F5EBDD]">Python · MCP · Self-Healing Loops</span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded bg-[#121014]/80 border border-[#315B8C]/30">
                  <span className="flex items-center gap-1.5 text-[#F5EBDD]">
                    <Database className="w-3.5 h-3.5 text-[#315B8C]" /> Data Stores
                  </span>
                  <span className="text-[#F5EBDD]">MySQL · PostgreSQL · Redis · SQLite</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM METRIC STATUS BAR */}
        <div className="bg-[#17121c] px-4 py-2 border-t border-[#315B8C]/40 flex items-center justify-between text-[10px] text-[#F5EBDD]/60 select-none">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F2765E]" />
            SECURE EXECUTION ENVIRONMENT
          </span>
          <span className="font-mono text-[#F5EBDD]/40">SYS_ID: IP-7F9B2</span>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
