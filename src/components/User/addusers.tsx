import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IUserFromCreate } from "../../features/common/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserApi } from "../../features/api";
import { reLoad } from "../../features/action/reloadData";
import { userFormSchema } from '../../schemas/user.schema';
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorCode } from "../../features/common/constants";
import { toast } from "react-toastify";


interface UsersProps {
  handleClose: () => void;
}
const AddUsers = ({ handleClose }: UsersProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<IUserFromCreate>({
    resolver: yupResolver(userFormSchema)
  });
  console.log(errors);

  const onSubmitCreate: SubmitHandler<IUserFromCreate> = async (data) => {
    console.log(data);
    const userApi = UserApi();
    const res = await userApi.createUsers({
      name: data.name,
      email: data.email,
      birthday: data.birthday,
      phone: data.phone,
      avatar: data.avatar
    });
    console.log(res);
    if (res.success) {
      handleClose();
      dispatch(reLoad(true));
      setIsFormOpen(false);
      toast.success("Thêm mới người dùng thành công !", {
        position: "top-right",
        autoClose: 5000,
      });
    }
    else {
      const errorCode = 400;
      if (errorCode === ErrorCode.VALIDATE) {
        toast.warning("Email đã tồn tại. Vui lòng chọn một email khác !", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmitCreate)();
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto">
      <div className="w-full min-h-full flex items-center justify-center bg-opacity-50 bg-gray-500">
        <div className="bg-[#fff] flex flex-col w-[440px] rounded-xl ">
          <h1 className="text-[18px] font-medium px-4 py-5">Tạo mới người dùng</h1>
          <div className="w-full bg-[#F7F8FA] rounded-b-lg h-auto px-4 pb-3">
            <div className="flex mt-[16px]">
              <p className="mb-2">Tên người dùng </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md
              ${errors.name ? 'border-red-300' : 'border-gray-200'}
    
            `} type="text" placeholder="Nhập Tên Người Dùng"   {...register('name')} />
            <span className=" mb-2 text-red-500">{errors.name?.message}</span>
            <div className="flex">
              <p className="mb-2">Email </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md
              ${errors.email ? 'border-red-300' : 'border-gray-200'}
    
            `} type="text" placeholder="Nhập Email"   {...register('email')} />
            <span className=" mb-2 text-red-500">{errors.email?.message}</span>


            <div className="flex">
              <p className="mb-2">Ngày sinh </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <div className="relative w-full mb-2">
              <input
                className={`border w-full border-gray-200 py-3 pl-4 pr-10 rounded-md ${errors.email ? 'border-red-300' : 'border-gray-200'} `} type="text" placeholder="DD/MM/YYYY"   {...register('birthday')}
              />
              <img className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500" src="./icons/birthday.svg" alt="birthday" />
            </div>
            <span className=" mb-3 text-red-500">{errors.birthday?.message}</span>

            <div className="flex">
              <p className="mb-2">Số điện thoại </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md
              ${errors.phone ? 'border-red-300' : 'border-gray-200'}
    
            `} type="text" placeholder="Nhập số điện thoại"   {...register('phone')} />
            <span className=" mb-2 text-red-500">{errors.phone?.message}</span>

            <div className="flex">
              <p className="mb-2">Avatar</p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md
              ${errors.avatar ? 'border-red-300' : 'border-gray-200'}
            `}
              onKeyPress={handleKeyPress}
              type="text" placeholder="Nhập link ảnh avatar" {...register('avatar')} />
            <span className=" mb-2 text-red-500">{errors.avatar?.message}</span>
          </div>

          <div className="px-5 flex gap-4 justify-end items-center h-[70px] bg-[#fff] rounded-b-lg">
            <button className="leading-[40px] rounded-md border border-gray-200 w-[70px]" onClick={handleClose} type="button">Hủy</button>
            <button className="bg-[#0F60FF] w-[150px] leading-[40px] text-[#fff] rounded-md " type="button"
              onClick={handleSubmit(onSubmitCreate)}
            >Tạo mới</button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default AddUsers