import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { ThemeContext } from "@/store/themeContext";
import React, { useContext } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`body-${theme} transition`}>
      <Header />
      <main
        style={{ minHeight: "calc(100vh - 120px)" }}
        className="flex"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
