import React from "react";
import { Outlet } from "react-router";
import Homepage from "../pages/Homepage";
import { Heading, Footer } from "../components";

const ProtectedLayout = () => {
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

export default ProtectedLayout;
