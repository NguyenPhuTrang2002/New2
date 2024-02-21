import React, { FC } from "react";

interface UsersProps {
  callback: () => void;
}
const Users = ({ callback }: UsersProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 ">
      <div className="w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-500">
        <div className="bg-[#fff] flex flex-col w-[440px] rounded-xl ">
          <h1 className="text-[18px] font-medium px-4 py-5">Tạo mới người dùng</h1>
          <div className="w-full bg-[#F7F8FA] rounded-b-lg h-auto px-4">
            <div className="flex mt-[16px]">
              <p className="mb-2">Tên người dùng </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className="border w-full border-gray-200 leading-5 py-3 pl-4 mb-5 rounded-md" type="text" placeholder="Nhập Tên Người Dùng" />
            <div className="flex">
              <p className="mb-2">Email </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className="border w-full border-gray-200 leading-5 py-3 pl-4 mb-5 rounded-md" type="text" placeholder="Nhập Email" />
            <div className="flex">
              <p className="mb-2">Ngày sinh </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <div className="relative w-full mb-5">
              <input className="border w-full border-gray-200 leading-5 py-3 pl-4 pr-10" type="text" placeholder="YYYY/MM/DD" />
              <svg className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fill="#868FA0" d="M5 1C5.41421 1 5.75 1.33579 5.75 1.75V3H10.25V1.75C10.25 1.33579 10.5858 1 11 1C11.4142 1 11.75 1.33579 11.75 1.75V3H13C14.1046 3 15 3.89543 15 5V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V5C1 3.89543 1.89543 3 3 3H4.25V1.75C4.25 1.33579 4.58579 1 5 1ZM10.25 4.5V5.25C10.25 5.66421 10.5858 6 11 6C11.4142 6 11.75 5.66421 11.75 5.25V4.5H12.5C13.0523 4.5 13.5 4.94772 13.5 5.5V7C13.5 7.55228 13.0523 8 12.5 8H3.5C2.94771 8 2.5 7.55228 2.5 7V5.5C2.5 4.94772 2.94772 4.5 3.5 4.5H4.25V5.25C4.25 5.66421 4.58579 6 5 6C5.41421 6 5.75 5.66421 5.75 5.25V4.5H10.25Z" />
              </svg>
            </div>

            <div className="flex">
              <p className="mb-2">Số điện thoại </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className="border w-full border-gray-200 leading-5 py-3 pl-4 mb-5 rounded-md" type="text" placeholder="Nhập số điện thoại" />
            <div className="flex">
              <p className="mb-2">Avatar</p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className="border w-full border-gray-200 leading-5 py-3 pl-4 mb-5 rounded-md" type="text" placeholder="Nhập link ảnh avatar" />
          </div>

          <div className="px-5 flex gap-4 justify-end items-center h-[70px] bg-[#fff] rounded-b-lg">
            <button className="leading-[40px] rounded-md border border-gray-200 w-[70px]" onClick={callback} type="button">Hủy</button>
            <button className="bg-[#0F60FF] w-[150px] leading-[40px] text-[#fff] rounded-md " type="button">Tạo mới</button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Users