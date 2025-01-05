import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
