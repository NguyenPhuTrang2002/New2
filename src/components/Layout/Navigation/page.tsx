import React, { useState } from "react";

interface PageProps {
  pageNumber: number;
}

const Page: React.FC<PageProps> = ({ pageNumber }) => {
  const [activePage, setActivePage] = useState<number>(1);

  return (
    <div className="inline-flex cursor-pointer" onClick={() => setActivePage(pageNumber)}>
      <h1 className={`w-7 h-7 ${activePage === pageNumber ? 'bg-[#0F60FF]' : 'bg-[#F1F2F6]'} text-[#8B909A] flex justify-center items-center rounded-md`}>{pageNumber}</h1>
    </div>
  );
};

export default Page;
