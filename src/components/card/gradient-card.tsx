"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

type Props = {
  title: string;
  titleDescription: string;
  message: string;
  buttonText: string;
};

export function BackgroundGradientDemo(Props: Props) {
  return (
    <div>
      <div></div>
      <BackgroundGradient className=" transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-2 rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-4xl text-center font-bold text-black mt-4 mb-2 dark:text-neutral-200">
          {Props.title}
        </p>
        <p className="text-lg text-center text-black mt-4 mb-2 dark:text-neutral-200">
          {Props.titleDescription}
        </p>

        <p className="text-lg text-center text-neutral-600 dark:text-neutral-400">
          {Props.message}
        </p>
        <button className="rounded-md text-3xl justify-center bg-green-300 text-center min-w-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 mt-4  font-bold dark:bg-zinc-800">
          {Props.buttonText}
        </button>
      </BackgroundGradient>
    </div>
  );
}
