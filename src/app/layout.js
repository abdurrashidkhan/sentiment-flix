"use client";
import Footer from "@/components/Footer/Footer";
import DbNavbar from "@/components/navbar/DbNavbar";
import Navbar from "@/components/navbar/Navbar";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

// Import Poppins for English content
const poppins = Poppins({
  subsets: ["latin"], // Correct subset for English (Latin script)
  weight: ["400", "700"], // Specify weights as needed
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const dbPath = pathname?.slice(0, 10);
  return (
    <html lang="en">
      <body
        className={`${poppins.className} text-slate-800 bg-[#f0eded] antialiased`}
      >
        {dbPath === "/dashboard" ? <DbNavbar /> : <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
