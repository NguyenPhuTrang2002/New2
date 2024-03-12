import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import { ProductApi } from "../../features/api/product";
import { RootState } from "../../features/common/interfaces";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const reload = useSelector((state: RootState) => state.reload);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productApi = ProductApi();
        const res = await productApi.getAllProducts({
          page: currentPage,
          limit: 100,
          keyword: searchKeyword,
        });
        setProducts(res.data.items);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [reload, searchKeyword, currentPage]);

  const handleKeywordChange = (newKeyword: string) => {
    setSearchKeyword(newKeyword);
  };

  return (
    <div>
      <Product ListProduct={products} onKeywordChange={handleKeywordChange} loading={loading} />
    </div>
  );
};

export default ProductPage;
