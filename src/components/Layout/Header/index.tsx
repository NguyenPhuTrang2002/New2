import React, { useState, useEffect, useRef } from "react";
import { logout } from "../../../plugins/axios";
import { useDispatch, useSelector } from "react-redux";
import { useUserStore } from "../../../features/auth/stores";
import { localStorageAuthService } from "../../../features/common/storages";
interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const [avtOptions, setAvtOptions] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    setShowConfirm(true);
  };

  const handleLogout = () => {
    setShowConfirm(false);
    logout();
  };

  const avatar = useSelector((state: any) => state.avatar);
  const email = useSelector((state: any) => state.email);
  const { _getOwnProfile } = useUserStore();
  const access_token = localStorageAuthService.getAccessToken();
  useEffect(() => {
    _getOwnProfile({
      access_token: access_token
    });
  }, []);

  return (
    <div className="flex justify-center items-center mb-[25px]" ref={headerRef}>
      <h1 className="text-[#23272E] text-[24px] font-bold w-[100%]">{title}</h1>
      <div className="relative mr-[24px] mt-3">
        <img className="" src="./icons/bell.svg" alt="bell" />
        <span className="absolute flex flex-col rounded-lg w-4 h-4 text-[12px] text-[#fff] bg-[#EA5455] ml-3.5 justify-center items-center" style={{ top: '25%', transform: 'translateY(-50%)' }}>4</span>
      </div>
      <div className="relative">
        <div className="group ">
          <div className=" h-[50px] flex justify-center items-center mt-2 ">
            <img className="cursor-pointer mr-1 rounded-3xl w-[38px] h-[38px] group" src={avatar} alt="Avatar" />
            <img className="absolute mb-2 bottom-0 right-0" src="./icons/status.svg" alt="status" />
          </div>
          {/* {avtOptions && ( */}
          <div
            className="hidden group-hover:flex absolute top-[15px] right-0 z-10 w-[165px] rounded-md bg-[#0F60FF] flex-col justify-center items-center space-y-2 p-4 mt-[50px]
            after:content-[''] after:h-[10px] after:w-[10px] after:z-20 after:border-l-[20px] after:border-l-transparent after:border-solid after:border-b-[20px] 
            after:border-r-[20px] after:border-r-transparent after:border-b-[#0F60FF] after:top-[-10px] after:right-[0px] after:absolute
            ">
            <p className="text-gray-300">{email}</p>
            <p className="text-white hover:text-gray-300 cursor-pointer">Thông tin</p>
            <p className="text-white hover:text-gray-300 cursor-pointer">Cài đặt</p>
            <p onClick={handleSubmit} className="text-white hover:text-gray-300 cursor-pointer">Đăng xuất</p>
          </div>
          {/* )} */}
        </div>
      </div>
      {showConfirm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <p className="text-xl">Bạn có chắc chắn muốn đăng xuất tài khoản ?</p>
            <div className="flex justify-between mt-5">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setShowConfirm(false)}>Hủy</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleLogout}>Đăng xuất</button>
            </div>
          </div>
        </div>
      )}
    </div >
  );
}
export default Header;
