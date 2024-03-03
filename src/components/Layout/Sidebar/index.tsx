import React, { useState } from "react";
import Listitems from "./listitem";

interface SidebarProps { }

const Sidebar = () => {
  const [SidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!SidebarOpen);
  };
  const currentUrl = window.location.href;
  if (currentUrl === "/product") {

  }
  const ArrayList = [
    {
      icon: (
        <img src="./icons/sidebarproduct.svg" alt="sidebarproduct" />
      ),
      title: "Sản Phẩm",
      href: "/product"
    },
    {
      icon: (
        <img src="./icons/sidebaruser.svg" alt="sidebaruser" />
      ),
      title: "Users",
      href: "/user"
    },
  ]
  return (
    <div className={`w-1/5 bg-[#fff] p-4 ${SidebarOpen ? '' : 'w-[90px]'}`}>
      <div className="flex justify-center items-center gap-[50px] mb-9">
        <img className={`${SidebarOpen ? 'visible' : 'hidden'}`} src="./icons/logo.svg" alt="logo" />
        <button className="" onClick={toggleSidebar}>
          <img src="/icons/closesidebar.svg" alt="closeSidebar" />
        </button>
      </div>
      <div className={`sidebar ${SidebarOpen ? 'visible' : 'hidden'}`}>
        <p className="text-[#8B909A] text-[14px] mb-7 px-4">QUẢN LÝ SẢN PHẨM</p>
      </div>
      <div className="grid grid-cols-1">
        {ArrayList.map((array, index) => (
          <Listitems key={index} icon={array.icon} title={array.title} href={array.href} SidebarOpens={SidebarOpen} />
        ))}
      </div>
    </div>
  )
}
export default Sidebar;



