
import Layout from "@/components/layout/Layout";
import { ReactNode } from "react";
import './globals.css' 

// Root layout wraps all pages
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen">
        {children}
      </body>
    </html>
  );
}
