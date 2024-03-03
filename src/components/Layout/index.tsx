import React from 'react';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="w-full bg-[#fff] h-full rounded-xl shadow-md overflow-y-auto">
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
