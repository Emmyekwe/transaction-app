import Dashboard from "@/components/dashboard";
import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assessment Test",
  description: "Emmanuel Ukhueleigbe Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        <Header />
          <div className="flex flex-row">
            <Sidebar />
            {/* <Dashboard /> */}
            {children}
          </div>
      </div>
        </body>
    </html>
  );
}
