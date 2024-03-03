import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userFormSchema } from '../../schemas/user.schema';
import { IUser, IUserFromCreate } from '../../features/common/interfaces';
import { UserApi } from '../../features/api';
import { useDispatch } from 'react-redux';
import { reLoad } from '../../features/action/reloadData';
import { toast } from "react-toastify";

interface ProductsProps {
  id: string;
  handleClose: () => void;
}
const EditUsers = ({
  id,
  handleClose
}: ProductsProps) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IUserFromCreate>({
    resolver: yupResolver(userFormSchema)

  });

  const [selectUpdate, setSelectUpdate] = useState({
    id: id,
    name: '',
    email: '',
    birthday: '',
    phone: '',
    avatar: ''
  });
  console.log(id);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userApi = UserApi();
        const res = await userApi.getUserDetails(id);
        console.log(res);
        if (res.success) {
          const { name, email, birthday, phone, avatar } = res.data;
          setValue('name', name);
          setValue('email', email);
          setValue('birthday', birthday);
          setValue('phone', phone);
          setValue('avatar', avatar);
        };
      }
      catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id, setValue]);

  const onSubmitUpdate: SubmitHandler<IUserFromCreate> = async (data) => {
    try {
      const userApi = UserApi();
      const resUpdate = await userApi.updateUser(id, data);
      if (resUpdate.success) {
        handleClose();
        dispatch(reLoad(true));
        toast.success("Cập nhập thông tin người dùng thành công !", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto">
      <div className="w-full min-h-full flex items-center justify-center bg-opacity-50 bg-gray-500 py-5">
        <div className="bg-[#fff] flex flex-col w-[440px] rounded-xl" >
          <h1 className="text-[18px] font-medium px-4 my-5">Chỉnh sửa thông tin người dùng</h1>
          <div className="w-full bg-[#F7F8FA] rounded-lg h-auto px-4">
            <div className="flex mt-[16px]">
              <p className="mb-2">Tên người dùng </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md ${errors.name ? 'border-red-300' : 'border-gray-200'} `}
              type="text"
              placeholder="Nhập Tên Sản Phẩm"
              defaultValue={selectUpdate?.name}
              {...register('name')}
            />
            <span className='mb-5 text-red-500'>{errors.name?.message}</span>
            <div className="flex">
              <p className="mb-2">Email</p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md ${errors.email ? 'border-red-300' : 'border-gray-200'} `}
              type="text"
              placeholder="Nhập Giá Của Sản Phẩm"
              defaultValue={selectUpdate?.email}
              {...register('email')}
            />
            <span className='mb-5 text-red-500'>{errors.email?.message}</span>
            <div className="flex">
              <p className="mb-2">Ngày sinh</p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md ${errors.birthday ? 'border-red-300' : 'border-gray-200'} `}
              type="text"
              placeholder="Nhập Số Lượng Sản Phẩm"
              defaultValue={selectUpdate?.birthday}
              {...register('birthday')}
            />
            <span className='mb-5 text-red-500'>{errors.birthday?.message}</span>
            <div className="flex">
              <p className="mb-2">Số điện thoại</p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md ${errors.birthday ? 'border-red-300' : 'border-gray-200'} `}
              type="text"
              placeholder="Nhập Số Điện Thoại"
              defaultValue={selectUpdate?.phone}
              {...register('phone')}
            />
            <span className='mb-5 text-red-500'>{errors.phone?.message}</span>
            <div className="flex">
              <p className="mb-2">Link Avatar </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md ${errors.avatar ? 'border-red-300' : 'border-gray-200'} `}
              type="text"
              placeholder="Nhập link ảnh sản phẩm"
              defaultValue={selectUpdate?.avatar}
              {...register('avatar')}
            />
            <span className='mb-5 text-red-500'>{errors.avatar?.message}</span>
          </div>

          <div className="px-5 flex gap-4 justify-end items-center h-[70px] bg-[#fff] rounded-b-lg">
            <button className="leading-[40px] rounded-md border border-gray-200 w-[70px]" onClick={handleClose} type="button">Hủy</button>
            <button
              className="bg-[#0F60FF] w-[150px] leading-[40px] text-[#fff] rounded-md "
              type="button"
              onClick={handleSubmit(onSubmitUpdate)}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default EditUsers;
