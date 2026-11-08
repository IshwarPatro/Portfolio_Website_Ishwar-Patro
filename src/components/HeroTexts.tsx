import TextRotator from "./TextRotator";
import { Badge } from "@/components/ui/badge";
import { Terminal, Compass } from "lucide-react";

const HeroTexts = () => {
  return (
    <div className="flex flex-col gap-3 max-w-2xl text-left">
      <div className="flex flex-wrap items-center gap-2">
        <Badge
          variant="outline"
          className="border-[#F2765E]/40 bg-[#315B8C]/20 text-[#F5EBDD] font-mono text-xs px-3 py-1 flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#F2765E] animate-ping" />
          <span>CELESTIAL SYSTEM ONLINE // OPEN TO SDE &amp; BACKEND ROLES</span>
        </Badge>
      </div>

      <h3 className="font-mono text-xs uppercase tracking-widest text-[#F2765E] flex items-center gap-2 mt-2">
        <Terminal className="w-4 h-4" />
        <span>SOFTWARE_ENGINEER // ORBITAL_NODE</span>
      </h3>

      <h1 className="font-rubik text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F5EBDD] name_underline leading-[1.1]">
        Ishwar <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5EBDD] via-[#F2765E] to-[#315B8C]">
          Patro
        </span>
      </h1>

      <div className="pt-2">
        <TextRotator />
      </div>

      <p className="font-poppins text-base sm:text-lg text-[#F5EBDD]/80 leading-relaxed pt-2 max-w-xl">
        Software Engineer with 3+ years of experience engineering production-ready applications,
        cross-platform enterprise systems, and high-scale backend integrations.
      </p>

      {/* CORE ENGINEERING FOCUS HIGHLIGHTS (Replaces the numerical stat cards) */}
      <div className="flex flex-wrap gap-2 pt-3 font-mono text-xs text-[#F5EBDD]/80">
        <span className="px-3 py-1.5 rounded-lg bg-[#231c28]/80 border border-[#315B8C]/40 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#F2765E]" />
          <span>Backend Architecture &amp; APIs</span>
        </span>
        <span className="px-3 py-1.5 rounded-lg bg-[#231c28]/80 border border-[#315B8C]/40 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#315B8C]" />
          <span>Distributed Systems &amp; Reliability</span>
        </span>
        <span className="px-3 py-1.5 rounded-lg bg-[#231c28]/80 border border-[#315B8C]/40 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#F2765E]" />
          <span>Cross-Platform Systems</span>
        </span>
      </div>
    </div>
  );
};

export default HeroTexts;
