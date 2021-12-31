import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <Navbar />
      <div className="flex grow px-6 lg:px-40 duration-300">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
