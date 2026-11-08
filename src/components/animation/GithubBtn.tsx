import { Github } from "lucide-react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio.config";

const GithubBtn = () => {
  return (
    <Link
      href={portfolioConfig.socialLinks.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
      className="fixed left-0 bottom-6 flex rounded-r-full items-center gap-2 z-40 py-2 px-4 shadow-[0_4px_20px_rgba(49,91,140,0.3)] bg-[#231c28]/95 border-y border-r border-[#F2765E]/50 text-[#F5EBDD] hover:bg-[#F2765E] hover:text-[#121014] transition-all backdrop-blur-sm group"
    >
      <Github className="w-5 h-5 text-[#F2765E] group-hover:text-[#121014] transition-colors" />
      <span className="font-rubik text-base font-semibold tracking-wide">GitHub</span>
    </Link>
  );
};

export default GithubBtn;
