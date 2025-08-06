import React from "react";
import { ToastContainer, Bounce, Slide } from "react-toastify";
import { Outlet } from "react-router";
import { Heading } from "../components";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Heading />
      <main className="contain mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
