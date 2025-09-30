// src/app/(dashboard)/layout.tsx
"use client";

import { ReactNode } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout flex flex-col min-h-screen">
      <Header />
      <main className="flex justify-center items-center mt-12">{children}</main>
      <Footer />
    </div>
  );
}
