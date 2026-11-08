"use client";

import { cn } from "@/lib/utils";
import {
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: "home",
    title: "Home",
    icon: <HomeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    href: "#home",
  },
  {
    id: "about",
    title: "About",
    icon: <User className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    href: "#about",
  },
  {
    id: "skills",
    title: "Skills",
    icon: <LightbulbIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    href: "#skills",
  },
  {
    id: "projects",
    title: "Projects",
    icon: <FolderGit2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    href: "#projects",
  },
  {
    id: "education",
    title: "Education",
    icon: <GraduationCap className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    href: "#education",
  },
  {
    id: "contact",
    title: "Contact",
    icon: <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    href: "#contact",
  },
];

const Navbar = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section tracking for active pill highlight
      const sectionIds = ["home", "about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${id}`);
        setActiveSection(id);
      }
    }
  };

  return (
    <header className="fixed top-4 inset-x-0 mx-auto w-fit z-50 transition-all duration-300">
      <nav
        aria-label="Single-Page Navigation Dock"
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 shadow-xl backdrop-blur-xl",
          scrolled
            ? "bg-[#18121f]/95 border-[#F2765E]/40 shadow-[0_8px_32px_rgba(49,91,140,0.4)]"
            : "bg-[#201728]/85 border-[#315B8C]/50 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        )}
      >
        {navItems.map((item, idx) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <Link
                href={pathname === "/" ? `#${item.id}` : `/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-label={item.title}
                className={cn(
                  "relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200",
                  isActive
                    ? "bg-[#315B8C]/50 text-[#F2765E] border border-[#F2765E] shadow-[0_0_12px_rgba(242,118,94,0.45)] scale-105"
                    : "text-[#F5EBDD]/75 hover:text-[#F5EBDD] hover:bg-[#315B8C]/30 hover:border-[#315B8C]/60 border border-transparent"
                )}
              >
                {item.icon}
              </Link>

              {/* FLOATING RETRO-PUNK TOOLTIP */}
              {isHovered && (
                <div
                  role="tooltip"
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#100c14] border border-[#F2765E]/50 text-[#F5EBDD] font-mono text-[10px] tracking-wider whitespace-nowrap shadow-md pointer-events-none animate-in fade-in zoom-in-95 duration-150"
                >
                  {item.title}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
