import type { Metadata } from "next";

import "./globals.css";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kuldeep Yadav",
  description: "Develop What You Think",
  colorScheme: "dark",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531] `}
      >
        {children}
      </body>
    </html>
  );
}
