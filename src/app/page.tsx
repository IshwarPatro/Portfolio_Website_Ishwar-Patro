"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Heart,
  Layers,
  LightbulbIcon,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  User2,
  Wrench,
  AlertCircle,
} from "lucide-react";

import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import SkillsFooter from "@/components/SkillsFotter";
import ContactForm from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/config/portfolio.config";

export default function Home() {
  const { confirmedSkills, currentlyLearning } = portfolioConfig.skills;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="w-full flex flex-col gap-28 sm:gap-36">
      {/* =========================================================================
          SECTION 1: HERO & IDENTITY (#home)
          ========================================================================= */}
      <section
        id="home"
        className="w-full min-h-[85vh] flex flex-col justify-center gap-10 pt-4 scroll-mt-28"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE: HERO TYPOGRAPHY & IDENTITY */}
          <FramerWrapper
            className="lg:col-span-7 flex flex-col justify-start gap-5"
            y={10}
            x={0}
            duration={0.25}
          >
            <HeroTexts />

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <DownLoadResumeBtn />
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#F2765E] bg-[#F2765E]/10 hover:bg-[#F2765E] text-[#F5EBDD] hover:text-[#121014] font-rubik text-sm font-semibold transition-all shadow-md group"
              >
                <span>Explore 11 Professional Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="pt-1">
              <SocialLinks />
            </div>
          </FramerWrapper>

          {/* RIGHT SIDE: ENGINEERING TELEMETRY NODE */}
          <FramerWrapper
            className="lg:col-span-5 w-full flex justify-center"
            y={10}
            x={0}
            duration={0.25}
          >
            <HeroImage />
          </FramerWrapper>
        </div>

        {/* SYSTEM ARCHITECTURE CAPABILITIES STRIP */}
        <FramerWrapper
          className="w-full rounded-xl p-4 sm:p-5 bg-[#201828]/80 border border-[#315B8C]/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#F5EBDD]/80 shadow-md"
          y={20}
          delay={0.1}
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#F2765E]" />
            <span className="font-semibold text-[#F5EBDD]">SPECIALIZED DOMAINS:</span>
            <span>Enterprise Cross-Platform, Node.js API Bridges, Retail Media Networks, MSIX Packaging</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-[#F2765E]">
            <span>• BACKEND BRIDGES</span>
            <span>• CROSS-PLATFORM ENTERPRISE</span>
            <span>• RETAIL MEDIA NETWORKS</span>
          </div>
        </FramerWrapper>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT ISHWAR PATRO (#about)
          ========================================================================= */}
      <section
        id="about"
        className="w-full flex flex-col items-start gap-10 pt-10 scroll-mt-28"
      >
        {/* BADGE */}
        <Badge
          variant="outline"
          className="gap-2 py-1.5 px-3 border-[#F2765E]/40 bg-[#315B8C]/20 text-[#F5EBDD] font-mono text-xs"
        >
          <User2 className="h-4 w-4 text-[#F2765E]" />
          <span>ENGINEERING_PROFILE // ABOUT ME</span>
        </Badge>

        {/* HEADER & BIO */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <Heading>About Ishwar Patro</Heading>
          <div className="font-mono text-xs uppercase tracking-wider text-[#F2765E] flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>SOFTWARE ENGINEER · 3+ YEARS EXPERIENCE · SDE-2 CANDIDATE</span>
          </div>

          <FramerWrapper y={20} x={0} delay={0.1}>
            <div className="flex flex-col gap-4 font-poppins text-base sm:text-lg text-[#F5EBDD]/85 leading-relaxed">
              <p>{portfolioConfig.about.bio}</p>
              <div className="p-4 rounded-xl bg-[#201828]/75 border-l-4 border-l-[#F2765E] border-y border-r border-[#315B8C]/30 text-sm font-mono text-[#F5EBDD]/90 backdrop-blur-md">
                <span className="text-[#F2765E] font-bold">[ENGINEERING PHILOSOPHY]</span>{" "}
                {portfolioConfig.about.engineeringPhilosophy}
              </div>
            </div>
          </FramerWrapper>
        </div>

        {/* THREE DISTINCT ENGINEERING IDENTITIES */}
        <FramerWrapper y={30} x={0} delay={0.15} className="w-full">
          <div className="font-mono text-xs uppercase tracking-widest text-[#315B8C] font-semibold mb-3">
            {"// THREE PILLARS OF ENGINEERING IDENTITY"}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 flex flex-col gap-3 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#F2765E] font-rubik font-semibold text-lg">
                <Cpu className="w-5 h-5" />
                <span>01. Application Engineering</span>
              </div>
              <div className="font-mono text-xs text-[#315B8C] font-semibold">ESTABLISHED PRODUCTION</div>
              <p className="text-xs text-[#F5EBDD]/80 font-poppins leading-relaxed">
                Flutter, Dart, cross-platform enterprise architecture, lead management systems, retail media networks,
                and Windows MSIX application packaging for the Microsoft Store.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 flex flex-col gap-3 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#F2765E] font-rubik font-semibold text-lg">
                <Server className="w-5 h-5" />
                <span>02. Backend &amp; Full-Stack</span>
              </div>
              <div className="font-mono text-xs text-[#315B8C] font-semibold">SCALED SYSTEMS &amp; APIS</div>
              <p className="text-xs text-[#F5EBDD]/80 font-poppins leading-relaxed">
                Node.js, Express, Shopify Admin REST &amp; GraphQL APIs, authenticated webhooks, MySQL database design,
                and fault-tolerant cross-platform data synchronization pipelines.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 flex flex-col gap-3 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#F2765E] font-rubik font-semibold text-lg">
                <Terminal className="w-5 h-5" />
                <span>03. AI &amp; Systems Engineering</span>
              </div>
              <div className="font-mono text-xs text-[#315B8C] font-semibold">EMERGING SPECIALIZATION</div>
              <p className="text-xs text-[#F5EBDD]/80 font-poppins leading-relaxed">
                Python, FastAPI, RAG architectures, LLM integrations, conversational NLP call analysis,
                distributed systems, and low-level system design.
              </p>
            </div>
          </div>
        </FramerWrapper>

        {/* PROFESSIONAL EMPLOYMENT HISTORY */}
        <FramerWrapper y={30} x={0} delay={0.2} className="w-full flex flex-col gap-4">
          <h2 className="text-2xl font-rubik font-bold text-[#F5EBDD] flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-[#F2765E]" />
            <span>Professional Experience</span>
          </h2>

          <div className="space-y-6">
            {portfolioConfig.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 flex flex-col gap-3 text-sm shadow-md backdrop-blur-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#315B8C]/30 pb-3">
                  <div>
                    <h3 className="text-xl font-rubik font-bold text-[#F5EBDD]">{exp.role}</h3>
                    <div className="text-base text-[#F2765E] font-medium flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-start sm:items-end gap-1 font-mono text-xs text-[#F5EBDD]/70">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#315B8C]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#315B8C]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-[13px] text-[#F5EBDD]/85 font-mono">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-[#F2765E] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FramerWrapper>

        {/* HOBBIES & ENGINEERING PASSIONS */}
        <FramerWrapper y={30} x={0} delay={0.25} className="w-full flex flex-col gap-3">
          <h2 className="text-xl font-rubik font-bold text-[#F5EBDD] flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#F2765E]" />
            <span>Core Engineering Pursuits &amp; Hobbies</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {portfolioConfig.about.hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#18121f]/85 border border-[#315B8C]/30 flex items-center gap-2 font-mono text-xs text-[#F5EBDD]/90 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F2765E] flex-shrink-0" />
                <span>{hobby}</span>
              </div>
            ))}
          </div>
        </FramerWrapper>
      </section>

      {/* =========================================================================
          SECTION 3: TECHNICAL SKILLS & COMPETENCIES (#skills)
          ========================================================================= */}
      <section
        id="skills"
        className="w-full flex flex-col items-start gap-12 pt-10 scroll-mt-28"
      >
        {/* BADGE */}
        <Badge
          variant="outline"
          className="gap-2 py-1.5 px-3 border-[#F2765E]/40 bg-[#315B8C]/20 text-[#F5EBDD] font-mono text-xs"
        >
          <LightbulbIcon className="w-4 h-4 text-[#F2765E]" />
          <span>TECHNICAL_INVENTORY // VERIFIED &amp; LEARNING MATRIX</span>
        </Badge>

        {/* HEADER */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <Heading>Technical Skills &amp; Competencies</Heading>
          <FramerWrapper y={20} x={0} delay={0.1}>
            <p className="font-poppins text-base sm:text-lg text-[#F5EBDD]/80 leading-relaxed">
              Organized strictly into technologies with confirmed production experience and planned career developments.
              My primary core centers on production cross-platform client architecture, backend API engineering, and
              autonomous AI tooling—progressing toward SDE-2 and distributed backend systems.
            </p>
          </FramerWrapper>
        </div>

        {/* 1. CONFIRMED PRODUCTION SKILLS */}
        <FramerWrapper y={30} x={0} delay={0.15} className="w-full flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#315B8C]/40 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-rubik font-bold text-[#F5EBDD]">
                1. Confirmed &amp; Interview-Ready Skills
              </h2>
            </div>
            <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full w-fit">
              ● PRODUCTION VERIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 1.1 Programming Languages */}
            <div className="p-5 rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 flex flex-col gap-3 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#F2765E] font-rubik font-semibold text-lg border-b border-[#315B8C]/25 pb-2">
                <Terminal className="w-5 h-5" />
                <span>Programming Languages</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {confirmedSkills.languages.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded bg-[#140f1a] border border-[#315B8C]/30 flex items-center justify-between"
                  >
                    <span className="text-[#F5EBDD] font-medium">{item.name}</span>
                    <span className="text-[10px] text-[#F2765E]">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.2 Frameworks & Development */}
            <div className="p-5 rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 flex flex-col gap-3 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#F2765E] font-rubik font-semibold text-lg border-b border-[#315B8C]/25 pb-2">
                <Layers className="w-5 h-5" />
                <span>Frameworks &amp; Development</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {confirmedSkills.frameworks.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded bg-[#140f1a] border border-[#315B8C]/30 flex items-center justify-between"
                  >
                    <span className="text-[#F5EBDD] font-medium">{item.name}</span>
                    <span className="text-[10px] text-emerald-400">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.3 Cloud, Backend & Databases */}
            <div className="p-5 rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 flex flex-col gap-3 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#F2765E] font-rubik font-semibold text-lg border-b border-[#315B8C]/25 pb-2">
                <Database className="w-5 h-5" />
                <span>Cloud, Backend &amp; Databases</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {confirmedSkills.cloudBackendDatabases.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded bg-[#140f1a] border border-[#315B8C]/30 flex items-center justify-between"
                  >
                    <span className="text-[#F5EBDD] font-medium">{item.name}</span>
                    <span className="text-[10px] text-[#315B8C]">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.4 Development Tools & Packaging */}
            <div className="p-5 rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 flex flex-col gap-3 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#F2765E] font-rubik font-semibold text-lg border-b border-[#315B8C]/25 pb-2">
                <Wrench className="w-5 h-5" />
                <span>Development Tools &amp; Distribution</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {confirmedSkills.developmentTools.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded bg-[#140f1a] border border-[#315B8C]/30 flex items-center justify-between"
                  >
                    <span className="text-[#F5EBDD] font-medium">{item.name}</span>
                    <span className="text-[10px] text-[#F2765E]">{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FramerWrapper>

        {/* 2. CURRENTLY LEARNING */}
        <FramerWrapper y={30} x={0} delay={0.2} className="w-full flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F2765E]/40 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#F2765E]" />
              <h2 className="text-2xl font-rubik font-bold text-[#F5EBDD]">
                2. Currently Exploring &amp; Career Expansion
              </h2>
            </div>
            <span className="font-mono text-xs text-[#F2765E] bg-[#F2765E]/10 border border-[#F2765E]/30 px-3 py-1 rounded-full w-fit">
              ● SDE-2 &amp; BACKEND ROADMAP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
            {/* Frontend */}
            <div className="p-4 rounded-xl bg-[#1d1624]/85 border border-[#315B8C]/30 flex flex-col gap-2.5">
              <div className="text-[#F2765E] font-semibold flex items-center gap-1.5 uppercase">
                <Code2 className="w-4 h-4" />
                <span>Modern Frontend</span>
              </div>
              <div className="space-y-1.5">
                {currentlyLearning.frontend.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-1.5 rounded bg-[#120e17] border border-[#315B8C]/20">
                    <span className="text-[#F5EBDD]">{item.name}</span>
                    <span className="text-[10px] text-[#F5EBDD]/50">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Engineering */}
            <div className="p-4 rounded-xl bg-[#1d1624]/85 border border-[#315B8C]/30 flex flex-col gap-2.5">
              <div className="text-[#315B8C] font-semibold flex items-center gap-1.5 uppercase">
                <Server className="w-4 h-4" />
                <span>Backend System Design</span>
              </div>
              <div className="space-y-1.5">
                {currentlyLearning.backendEngineering.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-1.5 rounded bg-[#120e17] border border-[#315B8C]/20">
                    <span className="text-[#F5EBDD]">{item.name}</span>
                    <span className="text-[10px] text-[#F5EBDD]/50">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="p-4 rounded-xl bg-[#1d1624]/85 border border-[#315B8C]/30 flex flex-col gap-2.5">
              <div className="text-[#F2765E] font-semibold flex items-center gap-1.5 uppercase">
                <Database className="w-4 h-4" />
                <span>Cloud &amp; DevOps</span>
              </div>
              <div className="space-y-1.5">
                {currentlyLearning.cloudDevOps.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-1.5 rounded bg-[#120e17] border border-[#315B8C]/20">
                    <span className="text-[#F5EBDD]">{item.name}</span>
                    <span className="text-[10px] text-[#F5EBDD]/50">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & GenAI */}
            <div className="p-4 rounded-xl bg-[#1d1624]/85 border border-[#315B8C]/30 flex flex-col gap-2.5">
              <div className="text-[#315B8C] font-semibold flex items-center gap-1.5 uppercase">
                <Sparkles className="w-4 h-4" />
                <span>AI &amp; Generative AI</span>
              </div>
              <div className="space-y-1.5">
                {currentlyLearning.aiGenerativeAI.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-1.5 rounded bg-[#120e17] border border-[#315B8C]/20">
                    <span className="text-[#F5EBDD]">{item.name}</span>
                    <span className="text-[10px] text-[#F5EBDD]/50">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CS & Interview Prep */}
            <div className="p-4 rounded-xl bg-[#1d1624]/85 border border-[#315B8C]/30 flex flex-col gap-2.5 md:col-span-2">
              <div className="text-[#F2765E] font-semibold flex items-center gap-1.5 uppercase">
                <Terminal className="w-4 h-4" />
                <span>Computer Science &amp; System Design (Python)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {currentlyLearning.csInterviewPrep.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-1.5 rounded bg-[#120e17] border border-[#315B8C]/20">
                    <span className="text-[#F5EBDD]">{item.name}</span>
                    <span className="text-[10px] text-[#F5EBDD]/50">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FramerWrapper>

        {/* 3. CORE VISUAL STACK */}
        <FramerWrapper y={30} delay={0.3} className="block w-full pt-4 border-t border-[#315B8C]/30">
          <h2 className="text-xl font-rubik text-[#F5EBDD] font-bold flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-[#F2765E]" />
            <span>Core Languages &amp; Runtime Ecosystem</span>
          </h2>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
          </div>
        </FramerWrapper>

        <FramerWrapper className="block w-full" y={30} delay={0.35}>
          <h2 className="text-xl font-rubik text-[#F5EBDD] font-bold flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-[#F2765E]" />
            <span>Frameworks &amp; Application Platforms</span>
          </h2>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <SkillsFooter items={portfolioConfig.skills.frameworks} />
          </div>
        </FramerWrapper>

        <FramerWrapper className="block w-full" y={30} delay={0.4}>
          <h2 className="text-xl font-rubik text-[#F5EBDD] font-bold flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-[#F2765E]" />
            <span>Cloud, Databases &amp; Production Tooling</span>
          </h2>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-3">
            <SkillsFooter items={portfolioConfig.skills.tools} />
          </div>
        </FramerWrapper>
      </section>

      {/* =========================================================================
          SECTION 4: PROFESSIONAL PROJECTS (#projects)
          ========================================================================= */}
      <section
        id="projects"
        className="w-full flex flex-col items-start gap-8 pt-10 scroll-mt-28"
      >
        {/* SECTION HEADER BADGE */}
        <Badge
          variant="outline"
          className="gap-2 py-1.5 px-3 border-[#F2765E]/40 bg-[#315B8C]/20 text-[#F5EBDD] font-mono text-xs"
        >
          <Layers className="h-4 w-4 text-[#F2765E]" />
          <span>ENGINEERING_CASE_STUDIES // 11 PROFESSIONAL DELIVERIES</span>
        </Badge>

        {/* EDITORIAL HEADING & PHILOSOPHY */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <Heading>Engineering &amp; System Architecture</Heading>
          <FramerWrapper y={20} x={0} delay={0.1}>
            <p className="font-poppins text-base sm:text-lg text-[#F5EBDD]/80 leading-relaxed">
              A comprehensive catalog of enterprise platforms, retail media networks, backend integration bridges,
              and cross-platform desktop systems delivered across Hash Connect and SMBXL Pvt Ltd. Every project
              represents verified production engineering experience, real deployments, and technical ownership.
            </p>
          </FramerWrapper>
        </div>

        {/* ARCHITECTURE NOTICE STRIP */}
        <div className="w-full rounded-lg p-3 bg-[#1c1424]/90 border border-[#315B8C]/40 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#F5EBDD]/70 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#F2765E]" />
            <span>FILTER: 11 VERIFIED PROFESSIONAL PROJECTS // STRICTLY CLIENT &amp; ENTERPRISE PRODUCTIONS</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-emerald-400">● 10 PRODUCTION DEPLOYED / RELEASED</span>
            <span className="text-[#8ec5fc]">● 1 ACTIVE ENTERPRISE ARCHITECTURE (CX9)</span>
          </div>
        </div>

        {/* ALL 11 VERIFIED PROJECT CARDS */}
        <div className="w-full flex flex-col gap-6">
          {portfolioConfig.projects.map((val, indx) => (
            <ProjectCards key={val.id} value={val} num={indx} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: EDUCATION (#education)
          ========================================================================= */}
      <section
        id="education"
        className="w-full flex flex-col items-start gap-8 pt-10 scroll-mt-28"
      >
        {/* BADGE */}
        <Badge
          variant="outline"
          className="gap-2 py-1.5 px-3 border-[#F2765E]/40 bg-[#315B8C]/20 text-[#F5EBDD] font-mono text-xs"
        >
          <GraduationCap className="h-4 w-4 text-[#F2765E]" />
          <span>ACADEMIC_FOUNDATION // FORMAL EDUCATION</span>
        </Badge>

        {/* HEADER */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <Heading>Academic Qualifications</Heading>
          <FramerWrapper y={20} x={0} delay={0.1}>
            <p className="font-poppins text-base sm:text-lg text-[#F5EBDD]/80 leading-relaxed">
              Formal engineering education emphasizing theoretical foundations of computing, algorithm design,
              systems architecture, and software engineering principles.
            </p>
          </FramerWrapper>
        </div>

        {/* EDUCATION CARD */}
        <div className="w-full flex flex-col gap-6">
          {portfolioConfig.education.map((edu, index) => (
            <FramerWrapper
              key={index}
              y={30}
              delay={0.15 + index * 0.1}
              className="w-full"
            >
              <div className="w-full rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 p-6 sm:p-8 flex flex-col gap-5 shadow-lg backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#315B8C]/30 pb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-rubik font-bold text-[#F5EBDD]">
                      {edu.degree}
                    </h3>
                    <div className="text-lg text-[#F2765E] font-medium flex items-center gap-2 mt-1">
                      <Building className="w-5 h-5 text-[#315B8C]" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#315B8C]/30 border border-[#F2765E]/40 font-mono text-xs font-semibold text-[#F2765E]">
                      <Award className="w-3.5 h-3.5" />
                      CGPA: {edu.cgpa}
                    </span>
                    <div className="flex items-center gap-3 font-mono text-xs text-[#F5EBDD]/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#315B8C]" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#315B8C]" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-poppins text-sm sm:text-base text-[#F5EBDD]/85 leading-relaxed">
                  {edu.description}
                </p>

                {/* CORE ACADEMIC FOUNDATIONS */}
                <div className="pt-2 border-t border-[#315B8C]/20 flex flex-col gap-2">
                  <div className="font-mono text-xs font-semibold uppercase text-[#F2765E] flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>Core Academic Specializations</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 font-mono text-xs text-[#F5EBDD]/80">
                    <div className="flex items-center gap-2 p-2 rounded bg-[#140f1a] border border-[#315B8C]/25">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#315B8C]" />
                      <span>Data Structures &amp; Algorithms</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#140f1a] border border-[#315B8C]/25">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#315B8C]" />
                      <span>Object-Oriented Design &amp; LLD</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#140f1a] border border-[#315B8C]/25">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#315B8C]" />
                      <span>Operating Systems &amp; Concurrency</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#140f1a] border border-[#315B8C]/25">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#315B8C]" />
                      <span>Database Management Systems (SQL)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#140f1a] border border-[#315B8C]/25">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#315B8C]" />
                      <span>Computer Networks &amp; Protocols</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#140f1a] border border-[#315B8C]/25">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#315B8C]" />
                      <span>Software Engineering Lifecycle</span>
                    </div>
                  </div>
                </div>
              </div>
            </FramerWrapper>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CONTACT & INQUIRIES (#contact)
          ========================================================================= */}
      <section
        id="contact"
        className="w-full flex flex-col items-start gap-8 pt-10 pb-16 scroll-mt-28"
      >
        {/* BADGE */}
        <Badge
          variant="outline"
          className="gap-2 py-1.5 px-3 border-[#F2765E]/40 bg-[#315B8C]/20 text-[#F5EBDD] font-mono text-xs"
        >
          <Mail className="h-4 w-4 text-[#F2765E]" />
          <span>CONNECT // RECRUITMENT &amp; COLLABORATION</span>
        </Badge>

        {/* HEADER */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <Heading>Contact &amp; Engineering Inquiries</Heading>
          <FramerWrapper y={20} x={0} delay={0.1}>
            <p className="font-poppins text-base sm:text-lg text-[#F5EBDD]/80 leading-relaxed">
              Interested in discussing backend systems, enterprise cross-platform applications, autonomous AI agents,
              or software engineering roles? Transmit a message below or connect via direct channels.
            </p>
          </FramerWrapper>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: DIRECT CHANNELS */}
          <FramerWrapper y={30} x={0} delay={0.15} className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-xl bg-[#201828]/85 border border-[#315B8C]/40 flex flex-col gap-4 font-mono text-xs text-[#F5EBDD] shadow-md backdrop-blur-md">
              <h3 className="font-rubik text-lg font-bold text-[#F5EBDD] border-b border-[#315B8C]/30 pb-2">
                Direct Channels
              </h3>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F2765E] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#315B8C] block text-[10px] uppercase font-bold">Email Address:</span>
                  <a href={`mailto:${portfolioConfig.email}`} className="text-[#F5EBDD] hover:text-[#F2765E] transition-colors underline">
                    {portfolioConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Linkedin className="w-4 h-4 text-[#F2765E] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#315B8C] block text-[10px] uppercase font-bold">LinkedIn Profile:</span>
                  <Link
                    href={portfolioConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5EBDD] hover:text-[#F2765E] transition-colors underline"
                  >
                    linkedin.com/in/ishwar-patro
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Github className="w-4 h-4 text-[#F2765E] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#315B8C] block text-[10px] uppercase font-bold">GitHub Repositories:</span>
                  <Link
                    href={portfolioConfig.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5EBDD] hover:text-[#F2765E] transition-colors underline"
                  >
                    github.com/IshwarPatro
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-[#F2765E] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#315B8C] block text-[10px] uppercase font-bold">Current Company:</span>
                  <span className="text-[#F5EBDD] font-medium text-xs">Hash Connect Integrated Services Private Limited</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F2765E] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#315B8C] block text-[10px] uppercase font-bold">Location &amp; Availability:</span>
                  <span className="text-[#F5EBDD]/80">Bangalore, India (Open to Remote / Hybrid SDE Opportunities)</span>
                </div>
              </div>
            </div>
          </FramerWrapper>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <FramerWrapper y={30} x={0} delay={0.2} className="lg:col-span-7 flex justify-center">
            <ContactForm />
          </FramerWrapper>
        </div>
      </section>

      {/* FIXED GITHUB CORNER BADGE */}
      <GithubBtn />
    </div>
  );
}
