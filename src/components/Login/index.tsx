import React, { useState } from "react";
import { useLoginForm } from "../../features/auth/forms/login-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, errors, onSubmit, } = useLoginForm();
  const [showPass, setShowPass] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mx-auto">
        <img className="mt-[120px] mb-[24px]" src="./icons/logologin.svg" alt="logo.svg" />
        <h1 className=" text-[#1B1B33] text-[32px] leading-[48px] mb-5 font-semibold">Đăng nhập</h1>
      </div>

      <div className="flex flex-col">
        <p className="mb-2">Email :</p>
        <input
          className={`border  w-[425px] h-[35px] pl-4 outline-none
          ${errors.email ? 'border-red-300' : 'border-gray-200'}
          `}
          type="text"
          placeholder="Nhập Email"
          {...register('email')}
        />
        <span className=" mb-5 text-red-500">{errors.email?.message}</span>
      </div>

      <div className="relative">
        <p className="mb-2">Mật khẩu :</p>
        <div className={`relative flex items-center border border-gray-200 w-[425px] h-[35px] pr-3
           ${errors.password ? 'border-red-300' : 'border-gray-200'}
        `}>
          <input
            className={`pl-4 pr-10 w-full outline-none`}
            type={`${showPass ? 'text' : 'password'}`}
            placeholder="••••••••••••••"
            {...register('password')}
            onKeyPress={handleKeyPress}
          />
          <img src={`${showPass ? './icons/show.svg' : './icons/eye.svg'}`}
            alt=""
            onClick={() => setShowPass(!showPass)} />
        </div>
        <span className=" mb-5 text-red-500">{errors.password?.message}</span>
      </div>

      <div className="flex mb-5 mt-5">
        <input type="checkbox" id="myCheckbox" name="myCheckbox" />
        <label className="ml-2 mr-[140px]" htmlFor="myCheckbox">Ghi Nhớ Đăng Nhập</label>
        <a className="text-[#0F60FF]" href="/forget-password" target="_blank">Quên mật khẩu ?</a>
      </div>

      <button
        className="bg-[#0F60FF] text-[#fff] w-[425px] leading-[45px] rounded-md mb-5 "
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Đăng Nhập
      </button>
      <div className="flex">
        <p>Bạn chưa có tài khoản ? </p>
        <Link className="text-[#0F60FF] ml-2" to="/register">Đăng ký</Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
