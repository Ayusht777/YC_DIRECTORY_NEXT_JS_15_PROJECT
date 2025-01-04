import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
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
