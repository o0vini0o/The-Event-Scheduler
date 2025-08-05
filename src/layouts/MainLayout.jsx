import { Outlet } from "react-router";
import { Heading } from "../components";

const MainLayout = () => {
  return (
    <div>
      <Heading />
      <main className="contain mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
