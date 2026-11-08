"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

const HackerBtn = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 35));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
    setDisplayText(input);
  };

  const startScrambling = () => {
    scramble(label);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  return (
    <Button
      size="default"
      className="text-xs sm:text-sm font-rubik font-semibold px-5 py-3 rounded-lg bg-[#F2765E] hover:bg-[#F2765E]/90 text-[#121014] shadow-[0_4px_16px_rgba(242,118,94,0.35)] hover:shadow-[0_4px_24px_rgba(242,118,94,0.5)] transition-all flex items-center gap-2"
      onMouseEnter={startScrambling}
      onClick={() => {
        window.open("https://www.linkedin.com/in/ishwar-patro-0b3a8b210/", "_blank");
      }}
    >
      <Download className="w-4 h-4" />
      <span>{displayText}</span>
    </Button>
  );
};

export default HackerBtn;
