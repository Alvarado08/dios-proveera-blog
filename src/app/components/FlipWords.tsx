import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "el camino",
    "la verdad",
    "la vida",
    "el buen pastor",
    "Rey",
    "el Príncipe de Paz",
    "el Mesías",
  ];

  return (
    <div className="py-20 md:py-24 flex justify-center items-center px-4">
      <div className="text-3xl md:text-4xl lg:text-6xl mx-auto font-sans text-neutral-600 dark:text-neutral-400">
        Jesús es
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
