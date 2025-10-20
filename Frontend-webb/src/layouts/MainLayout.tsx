import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Outlet />  {/* här renderas route-sidan */}
      </main>
      <Footer />
    </>
  );
}
