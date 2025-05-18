"use client";

import dynamic from "next/dynamic";

// Dynamically import the AnimatedTestimonials component with client-side only rendering
const AnimatedTestimonials = dynamic(
  () =>
    import("@/components/ui/animated-testimonials").then(
      (mod) => mod.AnimatedTestimonials
    ),
  { ssr: false }
);

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Los pastores Luis y Juanita lideran con fe y amor, comprometidos con el discipulado, la unidad y la expansión del Evangelio.",
      name: "Luis y Juanita Henriquez",
      designation: "Pastores",
      src: "/pastors.png",
    },
    {
      quote:
        "Desde 1910, la Convención Bautista Hispana de Texas ha conectado a congregaciones unas con otras y con recursos a fin de que cumplan su visión particular inspirada por Dios.",
      name: "Convención Baustista Hispana de Texas",
      designation: "Nuestra convención",
      src: "/convencion-hispana.avif",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
