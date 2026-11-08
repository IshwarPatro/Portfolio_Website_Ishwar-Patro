import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-2 flex flex-col justify-start items-start overflow-hidden">
      <div className="font-poppins text-lg sm:text-2xl [text-wrap:balance] text-[#F5EBDD]/80 flex flex-wrap items-center">
        <span>Engineering</span>
        <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block text-left font-rubik text-lg sm:text-2xl leading-tight [&_li]:block animate-text-slide">
            {portfolioConfig.skills.roles.map((role, index) => (
              <li key={index} className="text-[#F2765E] font-semibold tracking-wide">
                {role}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
