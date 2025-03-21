import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iglesia Bautista Dios Proveera",
  description:
    "Bienvenido a la Iglesia Bautista Dios Proveera, un lugar de adoración y crecimiento espiritual donde compartimos el amor de Cristo.",
  icons: {
    icon: "/favicon.ico", // Favicon path relative to the public folder
    apple: "/apple-touch-icon.png", // Optional: For iOS
    // You can add more icons if you like
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="max-w-4xl mx-auto p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
