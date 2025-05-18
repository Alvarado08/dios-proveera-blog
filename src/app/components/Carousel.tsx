"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Familia de Fe",
      src: "/hero-img/familia-de-fe.jpg",
    },
    {
      title: "Casa de Adoración",
      src: "/hero-img/casa-de-adoracion.webp",
    },
    {
      title: "Cristo en el centro",
      src: "/hero-img/cristo-centro.avif",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
