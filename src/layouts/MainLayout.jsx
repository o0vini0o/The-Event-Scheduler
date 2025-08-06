import React from "react";
import { ToastContainer, Bounce, Slide } from "react-toastify";
import { Outlet } from "react-router";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

const MainLayout = () => {
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
      <main className=" w-full mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
