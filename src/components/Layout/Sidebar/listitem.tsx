
import React from 'react';
import { Link } from 'react-router-dom';
interface ListitemsProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  SidebarOpens: boolean;
}
const listitems = ({ icon, title, href, SidebarOpens }: ListitemsProps) => {
  const currentPath = window.location.pathname;
  console.log("npt", currentPath);
  return (
    <Link to={href} className={`flex flex-wrap space-x-3 w-full h-full items-center px-4 ${currentPath === href ? 'bg-[#F3F4F8] rounded-md' : 'bg-[#fff]'} mb-5`}>
      <p className={`${SidebarOpens ? '' : ''} ${currentPath === href ? '' : 'opacity-40'}`}>
        {icon}
      </p>
      <h1 className={`${SidebarOpens ? '' : 'hidden'} ${currentPath === href ? '' : 'opacity-50'}`}>{title}</h1>
    </Link>
  )
}
export default listitems