import { cn } from "@/lib/utils";
import {
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "GitHub",
      link: portfolioConfig.socialLinks.github,
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      name: "LinkedIn",
      link: portfolioConfig.socialLinks.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
    {
      name: "Email",
      link: `mailto:${portfolioConfig.email}`,
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((itm, indx) => {
        const timing = 0.05 * indx;

        return (
          <FramerWrapper key={indx} delay={timing} y={8}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={itm.link}
              aria-label={itm.name}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-[#315B8C]/50 bg-[#231c28]/90 text-[#F5EBDD] hover:bg-[#315B8C]/30 hover:border-[#F2765E] hover:text-[#F2765E] transition-all flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs shadow-sm"
              )}
            >
              {itm.icon}
              <span className="hidden sm:inline font-mono">{itm.name}</span>
            </Link>
          </FramerWrapper>
        );
      })}
    </div>
  );
};

export default SocialLinks;
