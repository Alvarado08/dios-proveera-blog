import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import RezizableNavbar from "./components/ResizableNavbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Iglesia Bautista Dios Proveera",
  description:
    "Bienvenido a la Iglesia Bautista Dios Proveera, un lugar de adoración y crecimiento espiritual donde compartimos el amor de Cristo.",
  keywords: [
    "Iglesia Bautista",
    "Dios Proveera",
    "Waller",
    "Texas",
    "Iglesia Hispana",
    "Comunidad Cristiana",
    "Servicios Religiosos",
    "Escuela Dominical",
  ],
  authors: [{ name: "Iglesia Bautista Dios Proveera" }],
  creator: "Iglesia Bautista Dios Proveera",
  publisher: "Iglesia Bautista Dios Proveera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://iglesiadiosproveera.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Iglesia Bautista Dios Proveera",
    description:
      "Bienvenido a la Iglesia Bautista Dios Proveera, un lugar de adoración y crecimiento espiritual donde compartimos el amor de Cristo.",
    url: "https://iglesiadiosproveera.com",
    siteName: "Iglesia Bautista Dios Proveera",
    images: [
      {
        url: "/hero-img/familia-de-fe.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Iglesia Bautista Dios Proveera",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iglesia Bautista Dios Proveera",
    description:
      "Bienvenido a la Iglesia Bautista Dios Proveera, un lugar de adoración y crecimiento espiritual donde compartimos el amor de Cristo.",
    images: [
      {
        url: "/hero-img/familia-de-fe.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Iglesia Bautista Dios Proveera",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RezizableNavbar />
          <main className="flex-1 w-full max-w-6xl mx-auto p-4">
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
