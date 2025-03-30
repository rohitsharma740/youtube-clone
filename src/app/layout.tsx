import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube",
  description: "YouTube Clone - Watch and share videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="min-h-screen bg-black">
          <Header />
          <Sidebar />
          <main className="pl-[72px] pt-14 h-[calc(100vh-56px)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
