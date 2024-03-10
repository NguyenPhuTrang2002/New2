import React, { ChangeEvent, useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar/index";
import Header from "../Layout/Header";
import Navigation from "../Layout/Navigation/Show";
import ProductsAdd from "./addproducts";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import Page from "../Layout/Navigation/page";
import ListProducts from "./listproduts";

interface Props {
  ListProduct: any;
  onKeywordChange: (newKeyword: string) => void;
}

interface ProductArray {
  id: string;
  name: string;
  price: string;
  quantity: string;
  description: string;
  image: string;
}

const Product = ({ ListProduct, onKeywordChange }: Props) => {
  const dispatch = useDispatch();
  const [ListProductArray, setListProductArray] = useState<ProductArray[]>([]);
  const [numberOfRows, setNumberOfRows] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setListProductArray(ListProduct);
  }, [ListProduct]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    onKeywordChange(value);
  };

  const handleNumberOfRowsChange = (newNumberOfRows: number) => {
    setNumberOfRows(newNumberOfRows);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleCancel = () => {
    setActive(false);
  };

  const totalPages = Math.ceil(ListProductArray.length / numberOfRows);
  console.log(totalPages);

  const startIndex = (currentPage - 1) * numberOfRows;
  const endIndex = startIndex + numberOfRows;
  const currentProductPage = ListProductArray.slice(startIndex, endIndex);

  return (
    <div className="w-full bg-[#fff] h-full rounded-xl shadow-md overflow-y-auto">
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className={`w-full px-[26px] py-2`}>
          <Header title={'Danh sách sản phẩm'} />
          <div className="flex items-center justify-between mb-4">
            <div className="flex justify-center items-center rounded-md bg-[#fff] h-[37px] w-[320px] shadow-md">
              <div className="flex justify-center items-center w-[100%]">
                <input
                  className="flex items-center justify-center w-[100%] outline-none px-3"
                  type="text"
                  placeholder="Tìm kiếm"
                  onChange={handleInputChange}
                />
                <img className="mr-3" src="./icons/search.svg" alt="search" />
              </div>
            </div>
            <div className="flex" onClick={() => setActive(true)}>
              <img className="cursor-pointer" src="./icons/add.svg" alt="addNew" />
            </div>
          </div>
          <div className="w-full bg-white rounded-xl shadow-md max-h-[500px] overflow-y-auto">
            <table className="min-w-full table-fixed">
              <thead>
                <tr className="text-[13px] border-b border-gray-300 h-[60px]">
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">TÊN SẢN PHẨM</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-left">GIÁ</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">SỐ LƯỢNG</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-left pl-10">MÔ TẢ</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">ẢNH</th>
                  <th className="text-[#8B909A] text-[13px] font-medium text-center">HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {currentProductPage.map((product: ProductArray) => (
                  <ListProducts
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    price={product.price}
                    total={product.quantity}
                    description={product.description}
                    img={product.image}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between py-4 px-6 overflow-y-auto mb-4">
            <Navigation
              handleNumberOfRowsChange={handleNumberOfRowsChange}
              totalNumberOfProducts={ListProductArray.length}
            />
            <div className="flex justify-center items-center gap-[2px]">
              <button
                className="bg-[#F1F2F6] w-7 h-7 flex justify-center items-center rounded-md"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <img src="./icons/leftback.svg" alt="backPage" />
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <Page
                  key={`page-${pageNumber}`}
                  pageNumber={pageNumber}
                  onPageChange={handlePageChange}
                  activePage={currentPage}
                  totalItems={ListProductArray.length}
                  itemsPerPage={numberOfRows}
                />
              ))}
              <button
                className="bg-[#F1F2F6] w-7 h-7 flex justify-center items-center rounded-md"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <img src="./icons/rightnext.svg" alt="nextPage" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {active && <ProductsAdd handleClose={handleCancel} />}
      <ToastContainer />
    </div>
  );
};

export default Product;