import { useEffect, useState } from "react";
import Product from "../../components/Product";
import { ProductApi } from "../../features/api/product";
import { RootState } from "../../features/common/interfaces";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const reload = useSelector((state: RootState) => state.reload);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [limit, setLimit] = useState(); // State để lưu giá trị limit
  const [currentPage, setCurrentPage] = useState(1);
  const limitOnPPage = useSelector((state: any) => state.limit)

  console.log(limitOnPPage);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productApi = ProductApi();
        const res = await productApi.getAllProducts({
          page: currentPage,
          limit: 100,
          keyword: searchKeyword,
        });
        console.log(res.data.totalItems);
        setProducts(res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [reload, searchKeyword, limit, currentPage, limitOnPPage]); // Thêm limit vào dependency array
  const handleKeywordChange = (newKeyword: string) => {
    setSearchKeyword(newKeyword);
  };

  return (
    <div className="min-h-screen overflow-y-auto bg-[#fff]">
      <Product
        ListProduct={products}
        onKeywordChange={handleKeywordChange}
      />
    </div>
  );
}

export default ProductPage;
