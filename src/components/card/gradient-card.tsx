"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";

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
        <p className="text-4xl text-center font-bold  mt-4 mb-2 dark:text-neutral-200">
          {Props.title}
        </p>
        <p className="text-lg text-center  mt-4 mb-2 dark:text-neutral-200">
          {Props.titleDescription}
        </p>

        <p className="text-lg text-center  dark:text-neutral-400">
          {Props.message}
        </p>
        <Button
          size={"lg"}
          className="w-full h-12 bg-green-600 hover:bg-green-500 hover:cursor-pointer mt-6"
        >
          {Props.buttonText}
        </Button>
      </BackgroundGradient>
    </div>
  );
}
