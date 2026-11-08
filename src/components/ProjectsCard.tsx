import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight, CheckCircle2, ChevronRight, Cpu, Github, Layers, Wrench } from "lucide-react";
import { ProjectItem } from "@/config/portfolio.config";

interface ProjectCardProps {
  value: ProjectItem;
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  const getButtonLabel = () => {
    if (!value.link) return "";
    if (value.link.includes("play.google.com")) return "View on Google Play";
    if (value.link.includes("apps.microsoft.com")) return "View on Microsoft Store";
    if (value.link.includes("her.store")) return "Visit Live Store (Her.Store)";
    if (value.link.includes("github.com")) return "View on GitHub";
    return "View Case Reference";
  };

  return (
    <FramerWrapper
      className="w-full"
      y={30}
      delay={num * 0.08}
      duration={0.25}
    >
      <Card
        className={cn(
          "w-full flex flex-col transition-all duration-300 rounded-xl bg-[#231c28]/85 border text-[#F5EBDD] backdrop-blur-md shadow-lg",
          value.isFlagship
            ? "border-[#F2765E] shadow-[0_4px_30px_rgba(242,118,94,0.25)]"
            : "border-[#315B8C]/40 hover:border-[#F2765E]/60 hover:shadow-[0_4px_24px_rgba(49,91,140,0.3)]"
        )}
      >
        <CardHeader className="pb-3 border-b border-[#315B8C]/25">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <span className="font-mono text-[11px] tracking-wider uppercase text-[#315B8C] font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#F2765E]" />
              {value.category}
            </span>

            {/* STATUS BADGE */}
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wider",
                value.status === "Active Engineering"
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/50"
                  : value.status === "Full-Stack Engineering"
                  ? "bg-[#F2765E]/20 text-[#F2765E] border border-[#F2765E]/50"
                  : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  value.status === "Active Engineering"
                    ? "bg-blue-400 animate-pulse"
                    : value.status === "Full-Stack Engineering"
                    ? "bg-[#F2765E]"
                    : "bg-emerald-400"
                )}
              />
              {value.status}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <CardTitle className="text-xl sm:text-2xl font-rubik font-bold text-[#F5EBDD] tracking-tight">
              {value.title}
            </CardTitle>
            {value.badgeHighlight && (
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#315B8C]/30 text-[#F5EBDD] border border-[#315B8C] w-fit">
                {value.badgeHighlight}
              </span>
            )}
          </div>
        </CardHeader>

        <CardContent className="pt-4 flex-grow flex flex-col gap-4 text-sm leading-relaxed">
          {/* EDITORIAL SUMMARY */}
          <p className="text-[#F5EBDD]/85 font-poppins text-[13.5px] leading-relaxed">
            {value.description}
          </p>

          {/* ARCHITECTURE BREAKDOWN */}
          <div className="rounded-lg p-3 bg-[#17121b]/80 border border-[#315B8C]/30 flex flex-col gap-2">
            <div className="font-mono text-xs font-semibold text-[#F2765E] flex items-center gap-1.5 uppercase tracking-wide">
              <Wrench className="w-3.5 h-3.5" />
              <span>Engineering & Architecture Details</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[12px] text-[#F5EBDD]/80 font-mono">
              {value.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#315B8C] flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MEASURABLE IMPACT */}
          {value.impactMetrics && value.impactMetrics.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-mono text-xs text-[#F5EBDD]/60 uppercase">Impact:</span>
              {value.impactMetrics.map((metric, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded bg-[#2a2130] text-[#F5EBDD]/90 border border-[#315B8C]/30"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#F2765E]" />
                  {metric}
                </span>
              ))}
            </div>
          )}

          {/* TECH STACK PILLS */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {value.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-0.5 rounded font-mono text-[11px] bg-[#1a1420] text-[#F5EBDD]/90 border border-[#315B8C]/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-2 pb-4 border-t border-[#315B8C]/25 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {value.link && (
              <Link
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "sm",
                  }),
                  "bg-[#F2765E] hover:bg-[#F2765E]/90 text-[#121014] font-rubik font-semibold text-xs tracking-wide shadow-md group flex items-center gap-1.5"
                )}
              >
                <span>{getButtonLabel()}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}

            {value.githubUrl && (
              <Link
                href={value.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                  }),
                  "border-[#315B8C] text-[#F5EBDD] hover:bg-[#315B8C]/30 text-xs font-mono"
                )}
              >
                <Github className="w-3.5 h-3.5 mr-1" />
                Source
              </Link>
            )}
          </div>

          <span className="font-mono text-[11px] text-[#F5EBDD]/40">
            ID: {value.id}
          </span>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
