"use client";

import Link from "next/link";
import { Facebook, MapPin, Clock } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Check if we're on the home page
  const isHome = pathname === "/";

  // Handle scroll to section when clicking hash links on home page
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full bg-gray-100 text-black dark:bg-[#0a0e1a] dark:text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium tracking-tight">
              Iglesia Bautista Dios Proveera
            </h3>
            <p className="text-black dark:text-gray-400 text-sm leading-relaxed">
              Somos una comunidad de creyentes comprometidos con compartir el
              amor de Cristo y servir a nuestra comunidad con compasión y
              gracia.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://www.facebook.com/miguel.gill.359"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              {/* <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-500 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link> */}
            </div>
          </div>

          {/* Service Times Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium tracking-tight">
              Horarios de Servicio
            </h3>
            <ul className="space-y-3 text-black dark:text-gray-400 text-sm">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-black dark:text-white">Domingo</p>
                  <p>Servicio General: 11:00 AM</p>
                  <p>Escuela Dominical: 10:00 AM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-black dark:text-white">Viernes</p>
                  <p>Reunión de Jóvenes: 7:00 PM</p>
                  <p>Servicio de Oración: 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium tracking-tight">Ubicación</h3>
            <ul className="space-y-3 text-black dark:text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0" />
                <span>1418 Key St. Waller, TX 77484</span>
              </li>
              {/* <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0" />
                <span>info@familiadefeiglesía.org</span>
              </li> */}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium tracking-tight">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-black dark:text-gray-400 text-sm">
              {isHome ? (
                <>
                  <li>
                    <Link
                      href={isHome ? "#nosotros" : "/#nosotros"}
                      onClick={scrollToSection("nosotros")}
                      className="hover:text-gray-500 dark:hover:text-white transition-colors"
                    >
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={isHome ? "#noticias" : "/#noticias"}
                      onClick={scrollToSection("noticias")}
                      className="hover:text-gray-500 dark:hover:text-white transition-colors"
                    >
                      Últimas Noticias
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={isHome ? "#oracion" : "/#oracion"}
                      onClick={scrollToSection("oracion")}
                      className="hover:text-gray-500 dark:hover:text-white transition-colors"
                    >
                      Oración de fe
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href={"/"}
                      className="hover:text-gray-500 dark:hover:text-white transition-colors"
                    >
                      Inicio
                    </Link>
                  </li>
                </>
              )}

              {/* <li>
                <Link
                  href={isHome ? "#nosotros" : "/#nosotros"}
                  onClick={scrollToSection("nosotros")}
                  className="hover:text-gray-500 dark:hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li> */}
              <li>
                <Link
                  href="/blog"
                  className="hover:text-gray-500 dark:hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-black dark:text-gray-500 text-xs">
          <p>{new Date().getFullYear()} Iglesia Bautista Dios Proveera.</p>
          <p className="mt-2 italic">
            &quot;Jesús es el camino, la verdad y la vida.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
