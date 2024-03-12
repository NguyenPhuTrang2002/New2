import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { productFormSchema } from '../../schemas/product.schema';
import { IProduct, IProductFormCreate } from '../../features/common/interfaces';
import { ProductApi } from '../../features/api';
import { useDispatch } from 'react-redux';
import { reLoad } from '../../features/action/reloadData';
import { toast } from "react-toastify";
import { ErrorCode } from '../../features/common/constants';

interface ProductsProps {
  id: string;
  handleClose: () => void;
}
const EditProducts = ({
  id,
  handleClose
}: ProductsProps) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IProductFormCreate>({
    resolver: yupResolver(productFormSchema)
  });
  const [selectUpdate, setSelectUpdate] = useState({
    id: id,
    name: '',
    price: '',
    quantity: '',
    description: '',
    image: ''
  });
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productApi = ProductApi();
        const res = await productApi.getProductDetails(id);
        if (res.success) {
          const { name, price, quantity, description, image } = res.data;
          setValue('name', name);
          setValue('price', price);
          setValue('quantity', quantity);
          setValue('description', description);
          setValue('image', image);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id, setValue]);

  const onSubmitUpdate: SubmitHandler<IProductFormCreate> = async (data) => {
    console.log("data: ", data);
    try {
      const productApi = ProductApi();
      const resUpdate = await productApi.updateProduct(id, data);
      if (resUpdate.success) {
        handleClose();
        dispatch(reLoad(true));
        toast.success("Cập nhập thông tin sản phẩm thành công !", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        const errorCode = 400;
        if (errorCode === ErrorCode.VALIDATE) {
          toast.warning("Tên Sản phẩm đã tồn tại. Vui lòng chọn một sản phẩm khác !", {
            position: "top-right",
            autoClose: 5000,
          });
        }
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto">
      <div className="w-full min-h-full flex items-center justify-center bg-opacity-50 bg-gray-500 py-5">
        <div className="bg-[#fff] flex flex-col w-[440px] rounded-xl" >
          <h1 className="text-[18px] font-medium px-4 my-5">Chỉnh sửa thông tin sản phẩm</h1>
          <div className="w-full bg-[#F7F8FA] rounded-lg h-auto px-4">
            <div className="flex mt-[16px]">
              <p className="mb-2">Tên sản phẩm </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md ${errors.name ? 'border-red-300' : 'border-gray-200'} `}
              type="text"
              placeholder="Nhập Tên Sản Phẩm"
              defaultValue={selectUpdate?.name}
              {...register('name')}
              readOnly
            />
            <span className='mb-5 text-red-500'>{errors.name?.message}</span>

            <div className="flex">
              <p className="mb-2">Giá </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md ${errors.name ? 'border-red-300' : 'border-gray-200'} `}
              type="text"
              placeholder="Nhập Giá Của Sản Phẩm"
              defaultValue={selectUpdate?.price}
              {...register('price')}
            />
            <span className='mb-5 text-red-500'>{errors.price?.message}</span>
            <div className="flex">
              <p className="mb-2">Số lượng </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md ${errors.name ? 'border-red-300' : 'border-gray-200'} `}
              type="text"
              placeholder="Nhập Số Lượng Sản Phẩm"
              defaultValue={selectUpdate?.quantity}
              {...register('quantity')}
            />
            <span className='mb-5 text-red-500'>{errors.quantity?.message}</span>

            <div className="flex">
              <p className="mb-2">Mô tả </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <textarea
              rows={5}
              className={`border w-full border-gray-200 py-3 pl-4 mb-1 rounded-md ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
              placeholder="Nhập mô tả"
              defaultValue={selectUpdate?.description}
              {...register('description')}
            />
            <span className='mb-5 text-red-500'>{errors.description?.message}</span>

            <div className="flex">
              <p className="mb-2">Ảnh sản Phẩm </p><p className="ml-1 text-[#0f60ff]"> *</p>
            </div>
            <input
              className={`border w-full border-gray-200 py-3 pl-4 mb-2 rounded-md ${errors.name ? 'border-red-300' : 'border-gray-200'} `}
              type="text"
              placeholder="Nhập link ảnh sản phẩm"
              defaultValue={selectUpdate?.image}
              {...register('image')}
            />
            <span className='mb-5 text-red-500'>{errors.image?.message}</span>

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

export default EditProducts;
