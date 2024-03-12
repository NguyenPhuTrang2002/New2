import React, { useState } from 'react';
import { ProductApi } from "../../features/api/product";
import { SubmitHandler, useForm } from 'react-hook-form';
import { IProductFormCreate } from '../../features/common/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { productFormSchema } from '../../schemas/product.schema';
import { useDispatch } from 'react-redux';
import { reLoad } from '../../features/action/reloadData';
import { toast } from "react-toastify";
import { ErrorCode } from '../../features/common/constants';


interface ProductsProps {
  handleClose: () => void;
}
const Products = ({
  handleClose
}: ProductsProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<IProductFormCreate>({
    resolver: yupResolver(productFormSchema)
  });
  console.log(errors);

  const onSubmitCreate: SubmitHandler<IProductFormCreate> = async (data) => {
    console.log(data);
    const productApi = ProductApi();
    const res = await productApi.createProducts({
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      description: data.description,
      image: data.image
    });
    console.log(res);
    if (res.success) {
      handleClose();
      dispatch(reLoad(true));
      setIsFormOpen(false);
      toast.success("Thêm mới sản phẩm thành công!", {
        position: "top-right",
        autoClose: 5000,
      });
    }
    else {
      const errorCode = 400;
      if (errorCode === ErrorCode.VALIDATE) {
        toast.warning("Sản phẩm đã tồn tại. Vui lòng chọn một sản phẩm khác !", {
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
      <div className="w-full min-h-full flex items-center justify-center bg-opacity-50 bg-gray-500 py-5">
        <div className="bg-[#fff] flex flex-col w-[440px] rounded-xl" >
          <h1 className="text-[18px] font-medium px-4 my-5">Tạo mới sản phẩm</h1>
          <div className="w-full bg-[#F7F8FA] rounded-lg h-auto px-4">
            <div className="flex mt-[16px]">
              <p className="mb-2">Tên sản phẩm </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md
              ${errors.name ? 'border-red-300' : 'border-gray-200'}
             `}
              type="text"
              placeholder="Nhập Tên Sản Phẩm"
              {...register('name')}
            />
            <span className=" mb-2 text-red-500">{errors.name?.message}</span>
            <div className="flex">
              <p className="mb-2">Giá </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md
              ${errors.price ? 'border-red-300' : 'border-gray-200'}
             `}
              type="text"
              placeholder="Nhập Giá Của Sản Phẩm"
              {...register('price')}
            />
            <span className=" mb-2 text-red-500">{errors.price?.message}</span>
            <div className="flex">
              <p className="mb-2">Số lượng </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md
              ${errors.quantity ? 'border-red-300' : 'border-gray-200'}
             `}
              type="text"
              placeholder="Nhập Số Lượng Sản Phẩm"
              {...register('quantity')}
            />
            <span className=" mb-2 text-red-500">{errors.quantity?.message}</span>
            <div className="flex">
              <p className="mb-2">Mô tả </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <textarea
              rows={5}
              className={`border w-full border-gray-200 py-3 pl-4 mb-1 rounded-md
              ${errors.description ? 'border-red-300' : 'border-gray-200'}
              `}
              placeholder="Nhập mô tả"
              {...register('description')}
            />
            <span className=" mb-2 text-red-500">{errors.description?.message}</span>
            <div className="flex">
              <p className="mb-2">Ảnh sản Phẩm </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-5 rounded-md
              ${errors.image ? 'border-red-300' : 'border-gray-200'}
             `}
              type="text"
              placeholder="Nhập link ảnh sản phẩm"
              {...register('image')}
              onKeyPress={handleKeyPress}
            />
            <span className=" mb-2 text-red-500">{errors.image?.message}</span>
          </div>

          <div className="px-5 flex gap-4 justify-end items-center h-[70px] bg-[#fff] rounded-b-lg">
            <button className="leading-[40px] rounded-md border border-gray-200 w-[70px]" onClick={handleClose} type="button">Hủy</button>
            <button
              className="bg-[#0F60FF] w-[150px] leading-[40px] text-[#fff] rounded-md "
              type="button"
              onClick={handleSubmit(onSubmitCreate)}
            >
              Tạo mới
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Products