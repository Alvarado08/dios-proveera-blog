import BlogWrapper from "./components/BlogWrapper";
import { CarouselDemo } from "./components/Carousel";
import { BackgroundLinesDemo } from "./components/CTA";
import { FlipWordsDemo } from "./components/FlipWords";
import { GlowingEffectDemo } from "./components/Glowing";
import { AnimatedTestimonialsDemo } from "./components/InfoCards";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-8 py-20 space-y-12">
      <section>
        <CarouselDemo />
      </section>
      <section>
        <FlipWordsDemo />
      </section>
      <section id="nosotros">
        <h1 className="mb-10 md:mb-20 text-3xl md:text-4xl lg:text-5xl font-bold font-sans">
          Sobre nosotros
        </h1>
        <div className="space-y-12">
          <GlowingEffectDemo />
          <AnimatedTestimonialsDemo />
        </div>
      </section>
      <section id="noticias">
        <Suspense fallback={<div>Cargando noticias...</div>}>
          <BlogWrapper />
        </Suspense>
      </section>
      <section id="oracion">
        <BackgroundLinesDemo />
      </section>
    </div>
  );
}
