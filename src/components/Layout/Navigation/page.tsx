import React from "react";

interface PageProps {
  pageNumber: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
  activePage: number;
}

const Page = ({ pageNumber, onPageChange, activePage }: PageProps) => {
  const handleClick = () => {
    onPageChange(pageNumber);
  };

  return (
    <div className="inline-flex cursor-pointer" onClick={handleClick}>
      <h1
        className={`w-7 h-7 ${pageNumber === activePage ? "bg-[#0F60FF] text-[#fff]" : "bg-[#F1F2F6]"
          } text-[#8B909A] flex justify-center items-center rounded-md`}
      >
        {pageNumber}
      </h1>
    </div>
  );
};

export default Page;