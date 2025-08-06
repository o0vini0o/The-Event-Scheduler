import React from "react";
import { ToastContainer, Bounce, Slide } from "react-toastify";
import { Outlet } from "react-router";
import { Heading, Footer } from "../components";

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
