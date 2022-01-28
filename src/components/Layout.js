import React from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));
const Navbar = dynamic(() => import("@/components/Navbar"));
const BackgroundGrid = dynamic(() => import("./BackgroundGrid"));

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen max-h-full relative">
      <BackgroundGrid />
      <div className="sticky shadow-lg dark:bg-slate-900/95 bg-white/95 backdrop-blur-sm dark:shadow-sky-500/25 shadow-sky-200/25 top-0 border-b-2 border-dashed dark:border-slate-300 border-sky-200 rounded-b-xl z-50">
        <Navbar />
      </div>
      <div className="flex grow justify-center duration-300">
        <div className="flex max-w-5xl mx-auto px-6 w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
