import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen max-w-full">
      <Navbar />
      <div className="grow px-6">{children}</div>
    </div>
  );
}

export default Layout;
