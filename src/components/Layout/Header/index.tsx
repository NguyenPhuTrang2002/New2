import React, {FC} from "react";
import { useState } from "react"

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({title}) => {
  const [avtOptions, headerOptions] = useState(false);
  const handdleAvtClick = () => {
    headerOptions(!avtOptions);
  }
  return (
    <div className="flex justify-center items-center mb-[35px]">
      <h1 className="text-[#23272E] text-[24px] font-bold w-[100%]">{title}</h1>
      <div className="">
        <span className="absolute flex flex-col rounded-lg w-4 h-4 text-[12px] text-[#fff] bg-[#EA5455] ml-3.5 justify-center items-center">4</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
          <path d="M11.2742 5.41667C11.2742 4.22005 12.2442 3.25 13.4408 3.25C14.6375 3.25 15.6075 4.22005 15.6075 5.41667C18.1427 6.61543 19.8094 9.11543 19.9408 11.9167V15.1667C20.1062 16.5325 20.9103 17.7387 22.1075 18.4167H4.77417C5.97138 17.7387 6.7755 16.5325 6.94084 15.1667V11.9167C7.07232 9.11543 8.73899 6.61543 11.2742 5.41667" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11.2742 5.41667C11.2742 4.22005 12.2442 3.25 13.4408 3.25C14.6375 3.25 15.6075 4.22005 15.6075 5.41667C18.1427 6.61543 19.8094 9.11543 19.9408 11.9167V15.1667C20.1062 16.5325 20.9103 17.7387 22.1075 18.4167H4.77417C5.97138 17.7387 6.7755 16.5325 6.94084 15.1667V11.9167C7.07232 9.11543 8.73899 6.61543 11.2742 5.41667" stroke="white" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10.1908 18.4167V19.5C10.1908 21.2949 11.6459 22.75 13.4408 22.75C15.2357 22.75 16.6908 21.2949 16.6908 19.5V18.4167" stroke="#4B465C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10.1908 18.4167V19.5C10.1908 21.2949 11.6459 22.75 13.4408 22.75C15.2357 22.75 16.6908 21.2949 16.6908 19.5V18.4167" stroke="white" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className="relative ">
        <img onClick={handdleAvtClick} className="ml-[24px] mr-1 rounded-3xl" src='./images/img.png' alt="" />
        <svg className="absolute bottom-0 right-0" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <circle cx="6.76196" cy="6.73969" r="5" fill="#28C76F" stroke="white" stroke-width="2" />
        </svg>

        {avtOptions && (
          <div
            className="absolute top-[6px] right-0 z-10 w-[130px] rounded-md bg-[#0F60FF] flex flex-col justify-center items-center space-y-2 p-4 mt-[50px]
            after:content-[''] after:h-[10px] after:w-[10px] after:z-20 after:border-l-[10px] after:border-l-transparent after:border-solid after:border-b-[10px] after:border-r-[10px] after:border-r-transparent after:border-b-[#0F60FF] after:top-[-10px] after:right-[10px] after:absolute
            ">
            <p className="text-white">Thông tin</p>
            <p className="text-white">Cài đặt</p>
            <p className="text-white">Đăng xuất</p>
          </div>
        )}
      </div>
    </div>

  );
}
export default Header;