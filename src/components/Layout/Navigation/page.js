import { useEffect, useState } from "react";

const Page = ({ pageNumber }) => {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className="inline-flex cursor-pointer" onClick={() => setActivePage(pageNumber)}>
      <h1 className={`w-7 h-7 ${activePage == pageNumber ? 'bg-[#0F60FF]' : 'bg-[#F1F2F6]'} text-[#8B909A] flex justify-center items-center rounded-md`}>{pageNumber}</h1>
    </div>
  )
}
export default Page