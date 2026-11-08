import Image from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt?: string; name?: string; icon?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-[#231c28]/70 border border-[#315B8C]/30 hover:border-[#F2765E] hover:bg-[#315B8C]/20 transition-all duration-200 group shadow-sm"
            >
              {item.icon ? (
                <Image
                  src={item.icon}
                  alt={item.name || "Skill icon"}
                  width={44}
                  height={44}
                  className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
                  unoptimized
                />
              ) : (
                <div className="w-10 h-10 rounded bg-[#121014] flex items-center justify-center text-xs font-mono text-[#F2765E]">
                  {item.name?.slice(0, 3)}
                </div>
              )}
              <span className="text-xs text-center font-mono font-medium text-[#F5EBDD]/90 group-hover:text-[#F2765E] transition-colors">
                {item.name}
              </span>
            </div>
          );
        })}
    </>
  );
};

export default SkillsFooter;
