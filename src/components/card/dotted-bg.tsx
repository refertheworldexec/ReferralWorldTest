import React from "react";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import img from "@/../public/robin.png";
import Image from "next/image";
export function DottedBG() {
  return (
    <div className="relative p-[12px] rounded-tl-3xl rounded-br-3xl rounded-bl-3xl bg-gradient-to-r from-green-400 via-green-500 to-green-300 shadow-lg">
      <div className="relative flex lg:size-80 md:size-60 size-0 items-end justify-end overflow-hidden rounded-tl-3xl rounded-br-3xl rounded-bl-3xl bg-white dark:bg-black">
        <Image
          alt="asd"
          src={img}
          className="absolute mb-2 inset-0 min-w-full min-h-full z-20 m-auto size-10 md:size-20 dark:invert dark:filter"
        />
      </div>
    </div>
  );
}
