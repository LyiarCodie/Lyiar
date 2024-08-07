import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from '@/app/components/Navbar'

const dmSans = DM_Sans({ subsets: ["latin"], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: "Lyiar",
  description: "Welcome to my world, i am a Game Developer and Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
