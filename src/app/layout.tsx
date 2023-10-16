import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresclean Link",
  description: "Fresclean links and contacts.",
  icons: {
    icon: "/fc-logo.webp",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-lg mx-auto h-screen antialiased bg-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
