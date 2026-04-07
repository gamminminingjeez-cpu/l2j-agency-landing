import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L2J Server Themes | Premium Lineage 2 Server Themes",
  description: "Temas premium para servidores Lineage 2. Elige tu estilo de reino: Elven, Chaos o Imperial.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#10b981",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-elven-mist-950 text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
