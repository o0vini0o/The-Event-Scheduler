import React from "react";
import { Outlet } from "react-router";
import Homepage from "../pages/Homepage";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { ToastContainer, Bounce, Slide } from "react-toastify";

const ProtectedLayout = () => {
  return (
    <>
      <div>
        <Heading />
        <ToastContainer
          className="mt-16 text-lg"
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          limit={2}
          transition={Bounce}
        />
      </div>
      <main className="w-full mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ProtectedLayout;
