import React, { useState } from "react";
import { ProductApi } from "../../features/api";
import { useDispatch } from "react-redux";
import { reLoad } from "../../features/action/reloadData";
import { IProductFormCreate } from "../../features/common/interfaces";
import EditProducts from "./editproduts";

interface ListProductsProps {
  id: string;
  title: string;
  price: string;
  total: string;
  description: string;
  img: string;
}

const ListProducts = ({
  id,
  title,
  price,
  total,
  description,
  img,
}: ListProductsProps) => {
  const [editingProduct, setEditingProduct] = useState<IProductFormCreate | null>(null); // State để lưu trữ thông tin sản phẩm cần chỉnh sửa
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); // State để kiểm soát việc hiển thị confirm dialog

  const handleCancel = () => {
    setActive(false);
  };

  const handleEditProduct = async () => {
    setIsFormOpen(true); // Mở form chỉnh sửa khi chỉnh sửa thành công
  };

  const deleteProduct: (productId: string) => Promise<any> = async (productId) => {
    try {
      const productApi = ProductApi();
      const res = await productApi.deleteProduct(productId);
      return res;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };

  const handleDeleteProduct = async () => {
    console.log('id: ', id);
    setShowConfirm(true); // Hiển thị confirm dialog khi người dùng nhấn vào icon xóa
  };

  const confirmDeleteProduct = async () => {
    try {
      const res = await deleteProduct(id);
      if (res.success) {
        dispatch(reLoad(true));
      } else {
        console.error('Failed to delete product:', res.error);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
    setShowConfirm(false); // Ẩn confirm dialog sau khi xác nhận xóa
  };

  return (
    <tr className="border-b border-gray-300">
      <td className="text-center">{title}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{total}</td>
      <td className="text-left pl-10">{description}</td>
      <td className="flex justify-center it py-[13px]">
        <img className="h-[36px] w-[36px]" src={img} alt="Product" />
      </td>
      <td className="">
        <div className="w-full h-full flex justify-center items-center gap-[10px] px-5 py-[13px]">
          <div onClick={() => { setActive(true); handleEditProduct(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M9.5 7H6.5C5.39543 7 4.5 7.89543 4.5 9V18C4.5 19.1046 5.39543 20 6.5 20H15.5C16.6046 20 17.5 19.1046 17.5 18V15" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 15H12.5L21 6.49998C21.8284 5.67156 21.8284 4.32841 21 3.49998C20.1716 2.67156 18.8284 2.67156 18 3.49998L9.5 12V15" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.5 5L19.5 8" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div onClick={handleDeleteProduct}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 7H20.5" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5 11V17" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.5 11V17" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 7L6.5 19C6.5 20.1046 7.39543 21 8.5 21H16.5C17.6046 21 18.5 20.1046 18.5 19L19.5 7" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.5 7V4C9.5 3.44772 9.94772 3 10.5 3H14.5C15.0523 3 15.5 3.44772 15.5 4V7" stroke="#8B909A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </td>
      {
        active && (
          <EditProducts id={id} handleClose={handleCancel} />
        )
      }
      {showConfirm && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <p className="text-xl">Bạn có chắc chắn muốn xóa sản phẩm này?</p>
            <div className="flex justify-between mt-5">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setShowConfirm(false)}>Hủy</button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={confirmDeleteProduct}>Xóa</button>
            </div>
          </div>
        </div>
      )}
    </tr>
  );
};

export default ListProducts;
