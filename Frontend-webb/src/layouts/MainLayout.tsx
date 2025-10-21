// src/layouts/MainLayout.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
