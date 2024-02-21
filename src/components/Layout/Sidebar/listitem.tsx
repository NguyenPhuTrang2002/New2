
import React from 'react';
interface ListitemsProps{
  icon: React.ReactNode;
  title: string;
  href: string;
  SidebarOpens: boolean;
}
const listitems: React.FC<ListitemsProps> = ({ icon, title, href, SidebarOpens }) => {
  const currentPath = window.location.href;
  return (
    <a href={href} className={`flex flex-wrap space-x-3 w-full h-full items-center px-4 ${currentPath === href ? 'bg-[#F3F4F8] rounded-md' : 'bg-[#fff]'} mb-5`}>
      <p className={`${SidebarOpens ? '' : ''}`}>
        {icon}
      </p>

      <h1 className={`${SidebarOpens ? '' : 'hidden'}`}>{title}</h1>
    </a>
  )
}
export default listitems