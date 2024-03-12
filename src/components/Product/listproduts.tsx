import React, { useState } from "react";
import { ProductApi } from "../../features/api";
import { useDispatch } from "react-redux";
import { reLoad } from "../../features/action/reloadData";
import { IProductFormCreate } from "../../features/common/interfaces";
import EditProducts from "./editproduts";
import { toast } from "react-toastify";

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
  const [editingProduct, setEditingProduct] = useState<IProductFormCreate | null>(null);
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCancel = () => {
    setActive(false);
  };

  const handleEditProduct = async () => {
    setIsFormOpen(true);
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
    setShowConfirm(true);
  };

  const confirmDeleteProduct = async () => {
    try {
      const res = await deleteProduct(id);
      if (res.success) {
        dispatch(reLoad(true));
        toast.success("Xóa sản phẩm thành công !", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        console.error('Failed to delete product:', res.error);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
    setShowConfirm(false);
  };
  const formatPrice = (price: string) => {
    let priceString = price.toString();
    let parts = priceString.split('.');
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? `.${parts[1]}` : '';
    let formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let formattedPrice = formattedIntegerPart + decimalPart;
    return formattedPrice;
  }

  return (
    <tr className="border-b border-gray-300">
      <td className="text-left px-5 max-w-[100px] whitespace-normal py-3">{title}</td>
      <td className="text-center max-w-10">${formatPrice(price)}</td>
      <td className="text-center">{total}</td>
      <td className="text-left pl-10 max-w-[100px] whitespace-normal">{description}</td>
      <td className="text-center">
        <div className="flex justify-center items-center">
          <img className="h-[36px] w-[36px]" src={img} alt="Product" />
        </div>
      </td>
      <td className="text-center">
        <div className="flex justify-center items-center gap-[10px] px-5 py-[13px]">
          <div onClick={() => { setActive(true); handleEditProduct(); }}>
            <img className="cursor-pointer" src="./icons/edit.svg" alt="Edit" />
          </div>
          <div onClick={handleDeleteProduct}>
            <img className="cursor-pointer" src="./icons/delete.svg" alt="Delete" />
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
            <p className="text-xl">Bạn có chắc chắn muốn xóa sản phẩm này ?</p>
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
