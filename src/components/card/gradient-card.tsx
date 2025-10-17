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
      <BackgroundGradient className=" transform transition-all duration-300 hover:scale-105  hover:-translate-y-2 rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="lg:text-5xl md:text-4xl text-3xl md:text-left text-center font-semibold  mt-4 mb-2 dark:text-neutral-200">
          {Props.title}
        </p>
        <div className="bg-gradient-to-r md:text-left  text-center  mt-2 font-light from-green-800 via-green-600 to-green-400 bg-clip-text text-transparent  transition-all duration-500">
          {Props.titleDescription}
        </div>

        <p className="md:text-md lg:text-lg text-sm md:text-left text-center mt-4 dark:text-neutral-400">
          {Props.message}
        </p>
        <div className="">
          <Button
            size={"lg"}
            className="bg-white items-center justify-center text-green-700 border-2  p-2 mt-4  min-w-full text-md md:text-md  hover:cursor-pointer border-green-700 hover:text-white hover:bg-green-700"
          >
            <div className="p-12">{Props.buttonText}</div>
          </Button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
