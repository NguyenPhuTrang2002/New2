import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { ProductApi } from "../../features/api/product";
import { RootState } from "../../features/common/interfaces";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const reload = useSelector((state: RootState) => state.reload);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [limit, setLimit] = useState(); // State để lưu giá trị limit
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productApi = ProductApi();
        const res = await productApi.getAllProducts({
          page: currentPage,
          limit: limit,
          keyword: searchKeyword,
        });
        setTotalPages(res.data.totalItems);
        setProducts(res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    console.log("LM", limit)
    fetchProducts();
  }, [reload, setTotalPages, searchKeyword, limit, currentPage]); // Thêm limit vào dependency array
  console.log("Current Page", currentPage);
  const handleKeywordChange = (newKeyword: string) => {
    setSearchKeyword(newKeyword);
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-[#fff]">
      <Product
        totalPages={totalPages}
        ListProduct={products}
        onKeywordChange={handleKeywordChange}
      />
    </div>
  );
}

export default ProductPage;
