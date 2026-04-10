import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Markaz Ahlil Athar — Islamic Education Centre",
  description:
    "A centre dedicated to teaching the Qur'an, Sunnah, Arabic language and authentic Islamic knowledge upon the manhaj of the Salaf.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7EF] font-serif antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}