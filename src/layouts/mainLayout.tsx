import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main style={{'minHeight': 'calc(100vh - 120px)'}} className="flex justify-center items-center">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
