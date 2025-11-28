import Sidebar from "@/_components/Sidebar/Sidebar";
import SidebarMobil from "@/_components/Sidebar/SidebarMobil";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <div className={`flex h-screen bg-white`}>
        <div className="hidden md:flex">
          <Sidebar />
        </div>

        <div className="block md:hidden">
          <SidebarMobil />
        </div>

        <div className="flex-1 ">
          <div className="bg-red-500 px-2">Header</div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
