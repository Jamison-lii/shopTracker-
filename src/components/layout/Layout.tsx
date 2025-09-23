// src/components/layout/Layout.tsx
import { ReactNode } from "react";
import Header from '../header/Header'
import Footer from "../footer/Footer";
type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </div>
  );
}
