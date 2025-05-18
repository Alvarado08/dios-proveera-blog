import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        ¿Y tu?, <br /> ¿Ya aceptaste a Jesús como tu Salvador?
      </h2>
      <div className="space-y-4">
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          No hay nadie justo, ni siquiera uno. Todos necesitamos perdón.
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          &quot;Si crees en tu corazón y confiesas con tu boca que Jesús es el
          Señor, serás salvo.&quot; &mdash; Romanos 10:9
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Jesús te ama. Murió y resucitó para darte vida eterna.
        </p>
      </div>
    </BackgroundLines>
  );
}
