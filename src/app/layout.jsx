import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Framer Motion Playground",
  description: "Bunch of components to play with Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx("overflow-x-hidden", {
          ...inter.className,
        })}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
