import "./globals.css";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { ReactNode } from "react";
import Image from "next/image";
import Logo from "../../public/logo.webp";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresclean Link",
  description: "Fresclean links and contacts.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-lg mx-auto h-screen antialiased`}
      >
        <main className="container h-full py-6 flex flex-col gap-6">
          <div className="flex justify-center">
            <Image src={Logo} alt={"Fresclean logo"} width={200} height={200} />
          </div>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
